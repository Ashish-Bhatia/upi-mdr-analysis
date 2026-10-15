(function(){
"use strict";
const data=window.MDR_DATA;
if(!data)return;
const $=id=>document.getElementById(id);
const src=id=>data.sources.find(x=>x.id===id);
const money=n=>"₹"+Number(n).toLocaleString("en-IN",{minimumFractionDigits:2,maximumFractionDigits:2});
const esc=s=>String(s).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
const safeUrl=u=>/^https:\/\//.test(u)?u:"#evidence";

function renderTimeline(){
 const root=$("timeline-list");
 if(!root)return;
 root.innerHTML=data.timeline.map(t=>{
 const s=src(t.source);
 return '<article class="timeline-row"><div class="timeline-date">'+esc(t.date)+'</div><div class="timeline-card"><span class="tag tag-reported">'+esc(t.kind)+'</span><h3>'+esc(t.title)+'</h3><p>'+esc(t.detail)+'</p><a class="timeline-source" href="'+safeUrl(s?.url||"")+'" target="_blank" rel="noopener noreferrer">'+esc(s?.id||"")+' · Open source ↗</a></div></article>';
 }).join("");
}
function renderSources(){
 const root=$("source-grid");if(!root)return;
 root.innerHTML=data.sources.map(s=>'<a class="source" href="'+safeUrl(s.url)+'" target="_blank" rel="noopener noreferrer"><div class="source-top"><span>'+esc(s.id)+' / '+esc(s.type)+'</span><span aria-hidden="true">↗</span></div><h3>'+esc(s.title)+'</h3><p>'+esc(s.note)+'</p><span class="source-date">'+esc(s.date)+'</span></a>').join("");
 $("source-count").textContent=data.sources.length+" documented sources & research leads · edition "+data.updated;
}
const findingLabels={verified:"SUPPORTED",qualified:"QUALIFIED",unresolved:"UNRESOLVED",contradicted:"CONTRADICTED"};
let selected="all",term="";
function renderClaims(){
 const filtered=data.claims.filter(c=>(selected==="all"||c.finding===selected)&&[c.claim,c.claimant,c.analysis].join(" ").toLowerCase().includes(term));
 $("claim-list").innerHTML=filtered.map(c=>'<article class="claim"><div class="claim-head"><span class="claim-id">'+esc(c.id)+' / CLAIM REGISTER</span><span class="tag tag-'+esc(c.finding)+'">'+esc(findingLabels[c.finding])+'</span></div><h3>'+esc(c.claim)+'</h3><div class="claimant">CLAIMANT / ORIGIN: <strong>'+esc(c.claimant)+'</strong></div><p>'+esc(c.analysis)+'</p><div class="claim-foot">'+c.refs.map(id=>{let s=src(id);return s?'<a href="'+safeUrl(s.url)+'" target="_blank" rel="noopener noreferrer">Source '+esc(id)+' ↗</a>':""}).join("")+'</div></article>').join("");
 $("no-claims").hidden=filtered.length!==0;
}
function setupClaims(){
 $("claim-search")?.addEventListener("input",e=>{term=e.target.value.trim().toLowerCase();renderClaims()});
 document.querySelectorAll(".filter").forEach(b=>b.addEventListener("click",()=>{
 selected=b.dataset.filter;
 document.querySelectorAll(".filter").forEach(btn=>{btn.classList.toggle("active",btn===b);btn.setAttribute("aria-pressed",String(btn===b))});
 renderClaims();
 }));
 const all=document.querySelector(".filter.active");if(all)all.setAttribute("aria-pressed","true");
 renderClaims();
}
function calculate(){
 const raw=Number($("amount")?.value);
 const valid=Number.isFinite(raw)&&raw>0&&raw<=10000000;
 const amount=valid?raw:0,cat=$("category").value;
 let proposed=0,alternative=0,reason="";
 if(!valid){reason="Enter a valid positive transaction amount up to ₹1 crore."}
 else if(cat==="p2p"){reason="Person-to-person bank-account UPI transfers are outside the proposed MDR."}
 else if(cat==="small"){reason="Assumes confirmed P2PM eligibility and monthly receipts within the published ₹1 lakh exemption condition."}
 else if(amount<=2000){reason="All eligible bank-account UPI merchant payments up to ₹2,000 remain zero MDR under the stated framework."}
 else if(cat==="essential"){proposed=5;alternative=5;reason="Proposed flat ₹5 tariff for qualifying essential-sector P2M payments above ₹2,000. Alternative comparison holds the special tariff constant."}
 else if(cat==="capital"){proposed=Math.min(amount*.0002,300);alternative=proposed;reason="Proposed capital-market tariff of 0.02%, subject to ₹300 cap. Alternative comparison holds this special tariff constant."}
 else{proposed=Math.min(amount*.004,300);alternative=Math.min(amount*.0008,40);reason="Standard qualifying P2M fee: 0.4% of payment, capped at ₹300. The comparator is hypothetical 0.08% capped at ₹40."}
 proposed=Math.round(proposed*100)/100;alternative=Math.round(alternative*100)/100;
 const gst=Math.round(proposed*.18*100)/100, gross=Math.round((proposed+gst)*100)/100;
 const eligibleItc=$("gst-status")?.value==="full"?gst:0, net=Math.round((gross-eligibleItc)*100)/100;
 if($("gst-amount"))$("gst-amount").textContent=money(gst);
 if($("gross-debit"))$("gross-debit").textContent=money(gross);
 if($("itc-amount"))$("itc-amount").textContent=money(eligibleItc);
 if($("net-cost"))$("net-cost").textContent=money(net);
 $("fee-amount").textContent=money(proposed);
 $("fee-explanation").textContent=reason;
 $("base-fee").textContent=money(proposed);
 $("alt-fee").textContent=money(alternative);
 $("fee-difference").textContent=money(proposed-alternative);
 $("fee-amount").setAttribute("aria-label","Proposed merchant fee "+money(proposed));
 return {amount,cat,proposed,alternative,gst,gross,eligibleItc,net,reason};
}
function setupCalculator(){
 $("amount")?.addEventListener("input",calculate);
 $("category")?.addEventListener("change",calculate);
 $("gst-status")?.addEventListener("change",calculate);
 $("copy-calculation")?.addEventListener("click",async()=>{
 const v=calculate(),message="UPI MDR Story — policy simulator (15 Oct 2026)\nAmount: "+money(v.amount)+"\nCategory: "+$("category").selectedOptions[0].text+"\nDeferred proposal: "+money(v.proposed)+"\nHypothetical pre-tax comparison: "+money(v.alternative)+"\n"+v.reason+"\nSource: https://www.pib.gov.in/PressReleseDetailm.aspx?PRID=2310586\nNot a live tariff quotation.";
 try{
   if(!navigator.clipboard)throw Error("Clipboard unavailable");
   await navigator.clipboard.writeText(message);
   const b=$("copy-calculation"),old=b.textContent;b.textContent="Copied to clipboard ✓";setTimeout(()=>b.textContent=old,2200);
 }catch(e){window.prompt("Copy this calculation:",message);}
 });
 calculate();
}
function renderChart(){
 const root=$("volume-chart");if(!root)return;
 const values=data.volumes.map(v=>v.million/10);
 const w=960,h=290,left=55,right=20,top=26,bottom=44,plotH=h-top-bottom,plotW=w-left-right,scaleMax=2700;
 const ticks=[0,900,1800,2700];
 let items='';
 ticks.forEach(n=>{let y=top+plotH-(n/scaleMax)*plotH;items+='<line class="chart-gridline" x1="'+left+'" y1="'+y+'" x2="'+(w-right)+'" y2="'+y+'"/><text class="chart-label" text-anchor="end" x="'+(left-10)+'" y="'+(y+4)+'">'+n.toLocaleString("en-IN")+'</text>'});
 const groupW=plotW/values.length,barW=Math.min(91,groupW*.61);
 data.volumes.forEach((d,i)=>{
  let x=left+groupW*i+(groupW-barW)/2,y=top+plotH-values[i]/scaleMax*plotH,ht=top+plotH-y;
  items+='<rect class="chart-bar" x="'+x+'" y="'+y+'" width="'+barW+'" height="'+ht+'" rx="6"><title>'+esc(d.month)+" 2026: "+values[i].toLocaleString("en-IN",{maximumFractionDigits:2})+' crore transactions</title></rect>';
  items+='<text class="chart-value" text-anchor="middle" x="'+(x+barW/2)+'" y="'+(y-10)+'">'+values[i].toFixed(0)+'</text>';
  items+='<text class="chart-label" text-anchor="middle" x="'+(x+barW/2)+'" y="'+(h-12)+'">'+esc(d.month)+'</text>';
 });
 root.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 960 290" preserveAspectRatio="xMidYMid meet" role="img" aria-labelledby="chart-title"><title id="chart-title">UPI monthly total transaction volume, crore, April to September 2026</title>'+items+'</svg>';
}
function setupMoneyFlow(){
 const buttons=Array.from(document.querySelectorAll(".money-option"));
 if(!buttons.length)return;
 const breakdown=[["split-acquirer",.0012],["split-issuer",.0016],["split-psp",.0004],["split-app",.0008]];
 const render=amount=>{
  const gross=Math.round(amount*.004*100)/100;
  $("money-total").textContent=money(gross);
  breakdown.forEach(([id,rate])=>{$(id).textContent=money(Math.round(amount*rate*100)/100)});
  buttons.forEach(b=>{
   const active=Number(b.dataset.value)===amount;
   b.classList.toggle("active",active);b.setAttribute("aria-pressed",String(active));
  });
 };
 buttons.forEach(b=>b.addEventListener("click",()=>render(Number(b.dataset.value))));
 render(10000);
}
function initNavigation(){
 const menu=$("menu-button"),panel=$("mobile-nav");
 menu?.addEventListener("click",()=>{panel.hidden=!panel.hidden;menu.setAttribute("aria-expanded",String(!panel.hidden));menu.setAttribute("aria-label",panel.hidden?"Open navigation":"Close navigation")});
 panel?.querySelectorAll("a").forEach(a=>a.addEventListener("click",()=>{panel.hidden=true;menu.setAttribute("aria-expanded","false");menu.setAttribute("aria-label","Open navigation")}));
 function onScroll(){
  const doc=document.documentElement;
  $("reading-track").style.width=100*(doc.scrollTop/(doc.scrollHeight-doc.clientHeight)||0)+"%";
  let current="home";
  document.querySelectorAll("main > section[id]").forEach(s=>{if(s.getBoundingClientRect().top<165)current=s.id});
  document.querySelectorAll(".desktop-nav a").forEach(a=>a.setAttribute("aria-current",String(a.getAttribute("href")==="#"+current)));
 }
 document.addEventListener("scroll",onScroll,{passive:true});onScroll();
}
renderTimeline();renderSources();setupClaims();setupCalculator();setupMoneyFlow();renderChart();initNavigation();
})();