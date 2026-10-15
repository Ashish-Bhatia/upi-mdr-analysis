# The UPI MDR Story — Evidence Ledger

Edition 03 | Research cutoff: 15 October 2026 | India

> **Update notice:** The Edition 01 lower-priority source-retrieval status has been superseded by the dated findings below. This ledger retains some original investigation notes for audit history; where they conflict, prefer the Edition 02 corrections.

## Verification protocol

Primary evidence = originating institution's publication or signed filing. A government release proves an official position, not necessarily the economic accuracy of an estimate. Secondary reporting quoting a notice does not replace the notice. An identified but unread document is labelled *unretrieved*. Statuses: supported, qualified, unresolved, contradicted. Claims retain their claimant, date, provenance and citation.

## Document register

| ID | Record | Class | Status |
|---|---|---|---|
| S1 | [RBI Benchmarking India's Payment Systems, 2022](https://www.rbi.org.in/Scripts/PublicationReportDetails.aspx?ID=1214) | Primary RBI | Reviewed, 2020 zero-MDR history |
| S2 | [Cabinet UPI incentive approval, 19 Mar 2025](https://www.pib.gov.in/PressReleasePage.aspx?PRID=2112771) | Primary Government | Reviewed, scheme amount and actual prior-year payouts |
| S3 | [DFS evaluation announcement, 16 Feb 2026](https://www.pib.gov.in/PressReleasePage.aspx?PRID=2228651) | Primary Government | Notice reviewed, full evaluation pending |
| S4 | [PRS legislative tracker, Aug 2026](https://prsindia.org/billtrack/the-taxation-and-other-laws-amendment-bill-2026) | Legislative tracker | Passage dates reviewed, enacted text pending |
| S5 | [Finance Ministry statement, 8 Aug 2026](https://www.pib.gov.in/PressReleasePage.aspx?PRID=2296594) | Primary Government | Reviewed, no-user-charge and policy intent |
| S6 | [Finance Ministry rate framework, 15 Sep 2026](https://www.pib.gov.in/PressReleseDetailm.aspx?PRID=2310586) | Primary Government | Reviewed, rate card; 96% claim not independently audited |
| S7 | [Paytm BSE/NSE signed filing, 15 Sep 2026](https://paytm.com/document/ir/stock-exchange-submissions/fy2026-27/sep/Disclosure_Reg_30_LODR_15_09_2026.pdf) | Primary corporate filing | Reviewed, corroborates NPCI OC-237 and old Oct 15 date |
| S8 | [NPCI monthly UPI statistics](https://www.npci.org.in/product/upi/product-statistics) | Primary NPCI dataset | Reviewed, all-UPI monthly totals |
| S9 | [Reuters quoting NPCI postponement, 13 Oct 2026](https://www.reuters.com/world/india/india-postpones-upi-payment-fee-rollout-after-diwali-festival-2026-10-13/) | Secondary quoting institution | Report reviewed, original NPCI notice outstanding |
| S10 | [PTI report on alternative 0.08% proposal, 11 Oct 2026](https://economictimes.indiatimes.com/industry/banking/finance/iit-bombay-study-bats-to-cut-mdr-to-0-08-pc-exclude-banks-from-taking-bulk-share/articleshow/134873852.cms) | Secondary research account | Report reviewed, complete paper unverified |
| S11 | [NPCI UPI FAQs](https://www.npci.org.in/what-we-do/upi/faqs) | Primary NPCI | Architecture and funding method distinctions |
| S12 | [NPCI RuPay credit-card-on-UPI circular](https://www.npci.org.in/PDF/npci/upi/circular/2022/Operating-circular-for-RuPay-Credit-Cards-linked-to-UPI.pdf) | Primary NPCI | Separate charging regime, not bank-account MDR |
| S13 | [Indian Express on Supreme Court petition, Sep 2026](https://indianexpress.com/article/legal-news/upi-mdr-supreme-court-pil-rs-2000-10881464/) | Secondary legal report | Petition reported, original filing and signed order pending |
| S14 | [Original researchers' paper URL](https://www.math.iitb.ac.in/~ashish/workshop/MDR_on_UPI_Oct11.pdf) | Original link | Retrieval failed; do not pretend full paper reviewed |
| S15 | [NPCI official circular index](https://www.npci.org.in/circulars/upi) | Primary directory | Index reviewed, OC-237 full text not retrieved |

## Verified history and accounting distinctions

RBI places the UPI/RuPay zero-MDR intervention on 1 January 2020. In the March 2025 approval, the Cabinet gave BHIM-UPI payout figures of ₹957 crore (FY2021–22), ₹1,802 crore (FY2022–23), ₹3,268 crore (FY2023–24). The same 2025 release approves an *estimated outlay* of ₹1,500 crore for FY2024–25, paying a conditional 0.15% incentive on qualifying small-merchant UPI receipts up to ₹2,000. Estimated outlay is **not** actual disbursement, ecosystem-wide cost, or a direct subsidy to each shopper.

The August 2026 Ministry communication describes legislative **intent**. The September 15 release describes a **rate framework**. A September 15 Paytm filing names the NPCI operating circular **NPCI/UPI/OC-No.237/2026-27** and its planned October 15 start. Reuters on October 13 quoted NPCI postponing implementation to after Diwali, exact date to be announced. Do not present October 15 as the actual effective date.

The Ministry's September policy schedule: P2P free; all merchant payments up to ₹2,000 exempt; qualifying small P2PM merchants receiving up to ₹1 lakh/month through UPI QR exempt; qualifying standard P2M above ₹2,000 charged 0.40% with a ₹300 cap; selected essential sectors above ₹2,000 charged flat ₹5; capital market payments at 0.02% capped ₹300; 5% of MDR collections earmarked for a small-merchant fund. The Ministry estimates ~96% of P2M **transaction count** exempt. The full eligibility rules, coding, rounding and classifications must be checked against OC-237.

## Reproducible arithmetic

NPCI September 2026 total volume: 24,068.38 million payments = **2,406.838 crore**. Total value ₹29,37,396.67 crore = **₹29.3739667 lakh crore**. Live banks: **756**. These are totals across UPI; **not** the P2M chargeable base. No model should multiply 0.4% by total UPI value and call it projected MDR revenue.

For an eligible standard merchant payment above ₹2,000, proposed fee is the lower of (0.004 × amount) and ₹300. For a selected essential-sector payment above ₹2,000, proposed fee is ₹5. For a qualifying capital-market payment above ₹2,000, it is the lower of (0.0002 × amount) and ₹300. P2P and qualifying exempt payments yield zero. A hypothetical alternative shown on site uses the lower of (0.0008 × amount) and ₹40 for standard eligible payments. This simplification is **not** a full reproduction of the researchers' proposal.

| Payment | Standard proposal | Illustrative alternative |
|---|---:|---:|
| ₹2,000 | ₹0 | ₹0 |
| ₹5,000 | ₹20 | ₹4 |
| ₹10,000 | ₹40 | ₹8 |
| ₹75,000 | ₹300 | ₹40 |
| ₹1,00,000 | ₹300 | ₹40 |

Profit example: a 0.4% fee on gross sale compared with a hypothetical 5% net margin is 0.4 ÷ 5 = **8% of profit margin on that sale** before behavioural changes. This is arithmetic, not evidence of retailer pricing outcomes.

## Open primary-source requests

1. Confirm an accessible official copy of S.O. 5067(E), Gazette ID CG-DL-E-14092026-276170, and Act 21/2026 (documents identified in Edition 02).
2. Authenticate NPCI Circular OC-237 against the original NPCI-domain issue (four-page third-party copy and official 42-question FAQ now reviewed in Edition 02), and resolve GST, refund and rounding questions.
3. Original NPCI October 13 press release and subsequent effective-date notice (the deferral is corroborated by Paytm's signed filing in Edition 02).
4. Merchant P2M eligible value/volume by amount band and category, to independently test the 96% estimate.
5. Audited payment-ecosystem cost accounts, fraud and cyber operating expenses, the actual fee distribution after fund contributions and GST, and bank-acquirer transaction statements.
6. Full authors' paper and methodology behind the quoted CASA bank earnings and 0.08% recommendation.
7. Original Supreme Court petition, registry details and any signed orders. Filing alone is not a judicial decision.
8. Published evidence on merchant pass-through to consumer prices, cash-substitution and differential retailer margins.

## Updating the edition

Add sources with document date, publisher, URL, verification class and precise scope. Revise claim status when evidence changes. Record policy-effective dates separately from announcement dates. Commit substantive corrections with a changelog entry; never turn reports or estimates into verified transactional facts.

This project is independent commentary. It is not affiliated with RBI, NPCI, Government of India, or the cited researchers.


## Additional named-claim and parliamentary leads (edition 01)

| ID | Record | Status |
|---|---|---|
| S16 | [Indian Express: opposition claims about US pressure and UPI fee](https://indianexpress.com/article/political-pulse/upi-mdr-transaction-fee-hike-opposition-protest-alleges-us-pressure-10881197/) | Secondary, exact attributions reported. Neither a claimed US pressure campaign nor consumer pass-through is independently established. |
| S17 | [India Today: government/opposition dispute over standing-committee endorsement](https://www.indiatoday.in/india/story/upi-mdr-row-government-cites-no-dissent-congress-says-specific-proposal-never-discussed-disputes-finance-panel-backing-2996943-2026-09-17) | Secondary. The disagreement does not itself determine what exact rates the committee endorsed. |
| S18 | [Ikigai Law: payments policy and sector funding discussion](https://www.ikigailaw.com/article/693/fintales-edition-48---upi-monetisation-and-revolving-credit-rules) | Secondary. Reported ₹20,700 crore payment processing cost and ₹2,000 crore budget provision require original source and scope validation. |
| S19 | [Sansad eLibrary catalog: 32nd Standing Committee on Finance Report, 12 March 2026](https://elibrary.sansad.in/items/435c4f84-01da-4686-aaa9-edda73d105ab/full) | Primary parliamentary catalog located; original 18_Finance_32.pdf contents **not read or authenticated here**. |

**Named political claim test:** A publicly attributed assertion that the MDR is a tax on every UPI user or is paid straight to the United States conflicts with the Government's documented P2P exemptions and its description of MDR as merchant ecosystem remuneration. The further political allegation of pressure from the United States remains unsubstantiated on the primary evidence gathered, which is different from proving such pressure never existed. Independent evidence of lobbying and causal influence would be needed to settle it.

**Committee endorsement test:** The parliamentary report predates the September tariff. Its issuance and topic are now verified at the Sansad eLibrary catalog level. Without comparing the operative pages of its original PDF with the exact 0.4% plan, do not assert endorsement of the precise rate, exempt threshold, or distribution formula.


---

# Edition 02 investigative audit, 15 October 2026

## A. Legislative sequence identified

**17 August 2026:** Act 21 of 2026, the Taxation and Other Laws (Amendment) Act, officially gazetted at [egazette 275521](https://egazette.gov.in/WriteReadData/2026/275521.pdf), amends the Payment and Settlement Systems Act Section 10A. The amendment changes the method for identifying which payment modes receive statutory no-charge protection. It **does not directly set a 0.4% merchant tariff**.

**14 September 2026:** Ministry of Finance (Department of Financial Services), **S.O. 5067(E)**, [Gazette ID CG-DL-E-14092026-276170](https://egazette.gov.in/WriteReadData/2026/276170.pdf), identifies: (i) RuPay-powered debit cards and (ii) UPI transactions up to ₹2,000. Under Section 10A, system providers or banks cannot directly or indirectly charge payers or recipients for those specified modes. Its document number and text are cross-corroborated by [Gazette Tracker](https://www.gazettetracker.com/g/CG-DL-E-14092026-276170) and [JSA law analysis](https://www.jsalaw.com/newsletters-and-updates/jsa-prism-fintech-september-2026/). **The official Gazette PDF timed out during this research pass**. The source is identified, not falsely characterised as fully visually inspected.

**15 September 2026:** NPCI Circular **NPCI/UPI/OC-No.237/2026-27** defines commercial MDR rates and successive onward transfers. A [four-page original-form circular copy hosted on an independent website](https://www.madhyabharatparidrishya.com/wp-content/uploads/2026/09/OC_237_MDR-2026.pdf) was examined visually. This is **not an official NPCI-hosted copy**. Its circular identifier and policy date are independently confirmed by a [signed 15 September Paytm exchange disclosure](https://paytm.com/document/ir/stock-exchange-submissions/fy2026-27/sep/Disclosure_Reg_30_LODR_15_09_2026.pdf). This strengthens provenance but does not certify each scanned page.

**13 October 2026:** The [signed Paytm update lodged with BSE/NSE](https://paytm.com/document/ir/stock-exchange-submissions/fy2026-27/oct/Disclosure_Reg_30_LODR_13_October_2026.pdf) expressly cites NPCI's 13 October statement and describes commencement after Diwali, with date to be notified. This corroborates Reuters and PTI, and supersedes the October 15 start date. The underlying NPCI press release is still not independently archived on an official NPCI domain.

## B. Fee-distribution calculation

The apparent circular sets the following **sequential** fee waterfall on a standard, eligible P2M transaction (before fund contributions and applicable GST):

| Payer → recipient | Rate of transaction amount | At ₹10,000 |
|---|---:|---:|
| Merchant → acquiring bank (gross MDR ceiling) | 0.40% | ₹40 |
| Acquiring bank → issuing bank (interchange) | 0.28% | ₹28 |
| Issuing bank → payer PSP | 0.12% | ₹12 |
| Payer PSP → app provider | 0.08% | ₹8 |

The amounts on the right are **transfers**, not independently additive charges to the merchant.

Therefore, the implied retained amounts (gross waterfall less onward obligations) are:

| Participant | Net retained percentage, before other deductions | Amount at ₹10,000 |
|---|---:|---:|
| Acquiring bank | 0.12% | ₹12 |
| Issuing bank | 0.16% | ₹16 |
| Payer PSP | 0.04% | ₹4 |
| App provider | 0.08% | ₹8 |
| **Total** | **0.40%** | **₹40** |

Bank retention totals **0.28% of transaction value = 70% of gross MDR**, matching researchers' criticism of the bank share. Some PSPs are banks and commercial allocations can differ; **this is a conceptual flow, not an audited legal-entity income statement**.

**Industry Program:** Annexure B of the apparent circular lists 10 groups of merchant-category codes. These include debt collection, fuel, agriculture, railway transportation, bill payment (telecom, utilities), government payments, insurance, education, wallet top-ups and tolls/bridges. The special chain is **₹5 MDR → ₹3.50 interchange → ₹1.50 PSP fee → ₹1.00 app fee**. Implied pre-deduction retention is acquiring bank ₹1.50, issuing bank ₹2.00, payer PSP ₹0.50, app ₹1.00.

**Dedicated fund correction (material):** Ministry of Finance's September 15 press release gives a simplified 5%-of-total-MDR statement. Point 10 of the apparent NPCI circular explicitly describes a 5% contribution from each participant's share **excluding Industry Program categories**. It targets merchants with turnover no more than ₹20 lakh annually; this turnover criterion concerns the fund's intended beneficiaries, **not the P2PM ₹1 lakh monthly qualification**. No independently authenticated fund collection account or rules have yet been located. This exception must be shown wherever the fund is quantified.

**GST caveat:** The original-form circular describes rates as **exclusive of applicable GST** and mentions a **1.1092 multiplier**. Do **not** silently apply generic 18% GST to the 0.4% merchant rate or claim the multiplier equals 18% without a validated transactional example. The current calculator displays pre-tax, nominal proposed MDR only. Actual remittance and tax incidence remain outstanding.

## C. Official 42-question NPCI MDR FAQ

[Official NPCI-hosted September 15 FAQ](https://www.npci.org.in/uploads/FA_Qs_Merchant_Discount_Rate_MDR_on_Select_UPI_P2_M_Transactions_58dba1d39e.pdf), independently available from the [Department of Financial Services](https://financialservices.gov.in/sites/default/files/2026-09/FAQs---Merchant-Discount-Rate--MDR--on-Select-UPI--P2M--Transactions_0.pdf), was read. It is primary evidence of NPCI's own position.

- **Q2:** NPCI states payments at or below ₹2,000 are *more than 95% of P2M volume*. The Ministry says roughly **96% remain exempt**, including qualifying P2PM. These are different but compatible estimates. Neither figure independently establishes the **share of transaction value** exempt.
- **Q5:** Still states October 15 as effective date; it is a dated FAQ rendered **out of date** by the October 13 deferral.
- **Q8–Q9 and Q27:** Fund intends onboarding support for Tier 3–6, north-east, J&K/Ladakh and scheme-linked categories, with RBI consultation and detailed guidelines projected within three months. The final rules remain unverified.
- **Q10:** Cites **~₹20,000 crore annual operating expenditure** as an industry estimate. The actual audit scope, P2P/P2M allocation, net costs and total operating expenses are not published within the FAQ. It proves the estimate is publicly asserted, **not that it is true**.
- **Q17:** States UPI applications cannot levy platform charges.
- **Q18:** Predicts no general consumer shelf-price effects, without displaying an empirical causal study. This remains an **unresolved economic prediction**, even where explicit surcharge pass-through is prohibited.
- **Q22:** States recurring UPI AutoPay mandates do not attract prescribed MDR charges. Test this against full operating instructions and MCC category eligibility before forecasting.
- **Q26:** A *single* payment above ₹2,000 does not cancel confirmed P2PM status.
- **Q28:** Merchant GST registration is **not** a qualification for P2PM zero MDR.
- **Q29:** NPCI says formal P2PM → P2M recategorisation occurs after inward UPI credit **above ₹1 lakh monthly for three consecutive months**.
- **Q33–Q42:** Gives special tariffs and classes, including utilities and education. The third-party circular Annexure B explicitly lists education at ₹5 for above ₹2,000.

## D. Independent researchers' contrary proposal

The 11 October paper attributed to Ashish Das and Praggya Das has a [40-page academic-hosted URL](https://www.math.iitb.ac.in/~ashish/workshop/MDR_on_UPI_Oct11.pdf). The original text was discoverable in public search indexing but **full PDF retrieval failed in this review**. A [detailed Moneylife summary](https://www.moneylife.in/article/cut-upi-mdr-to-008-percentage-scrap-banks-70-percentage-share-iitbombay-study-proposes-overhaul-of-merchant-charges/81914.html) and [Mint numerical account](https://www.livemint.com/money/upi-mdr-from-0-40-to-0-08-what-iit-bombay-report-has-proposed-and-why-it-wants-new-fee-structure-explained-11791805337722.html) report:
- 0.08% remuneration, split **0.06% app provider and 0.02% PSP**.
- Remove current scheme's 70% issuer/acquirer bank share and propose contributing around 3% of estimated FY2026 bank CASA margin to digital payment operations, roughly ₹15,000 crore annually.
- Target *online* merchants and large *offline* merchants exceeding ₹50 crore annual turnover; apply a ₹40 ceiling where relevant.
- Remove fees for loan repayment channels and maintain digital payment acceptance-infrastructure support.

Critical challenges to test: CASA margin is not equal to incremental UPI revenue; an inferred large CASA resource does not alone establish cross-bank equitable funding, the underlying reported 90% revenue coverage needs granular counterparty data, and alternative cost allocation should account for acquirer fraud, liquidity, compliance, uptime and operational risk. The existing on-site 0.08% comparator deliberately uses only arithmetic with the same ticket-size eligibility and **must not be misrepresented as a full implementation of the research proposal**.

## E. Newly priority open questions

1. Authenticate all four pages of OC-237 against the original NPCI upload; clarify the 1.1092 GST multiplier and fund deductions with a worked bank-acquirer statement.
2. Retrieve primary Act/Gazette official PDFs reliably, and compare precise notification operative text in all official languages as applicable.
3. Reproduce the 95%-under-₹2,000 claim, 96%-exempt claim, 70%-P2P-value claim and taxable merchant value with a complete 2026 transaction cube by month, ticket band, merchant category and funding type.
4. Validate industry annual ₹20,000/₹20,700 crore running-cost estimates independently by cost class and avoid double-counting sunk infrastructure versus per-payment operating cost.
5. Confirm whether automatic recurring UPI transactions are exempt across all funding types and MCCs.
6. Obtain complete Das–Das paper and audit its CASA margin, ₹18,000 crore MDR revenue projection and targeted-merchant revenue assumptions.
7. Track any actual post-Diwali operational notification. The October 15 start is **not in force**, and reports discussing January 2027 are speculative absent notice.
8. Review the parliamentary committee's exact 32nd report language before attributing support for **specific** 0.4% tariffs.
9. Retrieve signed Supreme Court filings/orders. A September petition report is not an order.

**Revision statement:** Edition 02 replaces the first edition's blanket “original Gazette not located” status with an official instrument ID and link, expands source count to 25, documents the four-page circular copy with domain provenance caveat, and explicitly corrects the 5% fund exception.


---

# Edition 03 correction bulletin — 15 October 2026

**Material correction:** Edition 01/02 overemphasised filing while failing to record the Supreme Court's 28 September hearing. Court reporters at Akashvani News, Bar & Bench and The Tribune independently report refusal of interim stay and direction to file counter-affidavits within four weeks. The case was filed by advocate Anjan Datta through AOR Ashutosh Dubey; legal coverage gives **W.P.(C) Diary No. 57387/2026**. The underlying signed court order and current case registry record **have not been directly retrieved**. Do not infer a final merits ruling. NPCI's October 13 postponement was an administrative statement, not an interim order.

**Trade mobilisation:** The CAIT-led meeting occurred on September 30; the trade body's own publication (appearing dated October 5) says AICPDF and AIMRA withdrew their planned October 2 No UPI Day campaign. The press statement documents withdrawal of that call, not an endorsement of MDR and not a finding about whether isolated protests took place.

**Survey evidence:** LocalCircles published 32,796 relevant merchant responses across 242 districts. Its 17%-willingness figure is conditional survey reporting. For consumers, the question about *preferred most-used payment method if UPI has an added cost* received 37,654 answers, with 76% choosing alternative methods. Another question received 31,206 responses and reported 14% accepting an extra charge. The publisher's forecasts of a **10% value drop** and **4% volume drop** are scenarios, not observed outcomes. Respondents to multiple questions must not be assumed unique; sample selection, response bias and representativeness are not established.

See [full Edition 03 investigation](litigation-trade-surveys.md) for citations, chronological analysis and open questions.
