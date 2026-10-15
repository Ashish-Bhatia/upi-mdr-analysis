# The UPI MDR Story — Evidence Ledger

Edition 10 | Research cutoff: 16 October 2026 | India

> **Edition 10 supersedes prior statements that the September 28 court ROP is missing.** The registered W.P.(C)1199/2026 original-form two-page ROP is now reviewed from LiveLaw and cross-checked against the official SCI cause list. Prior notes remain as audit history.

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


---

# Edition 04: budget and operational checks — 15 October 2026

- **S35 original Union Budget:** Ministry of Finance Output-Outcome Monitoring Framework FY2026–27 (https://www.indiabudget.gov.in/doc/OutcomeBudgetE2026_2027.pdf), Demand 32, printed p115 / PDF p123. Planned outlay **₹2,000 crore** for RuPay debit and low-value BHIM-UPI P2M incentives. Targets 10% UPI acceptance growth, **18,187 crore P2M** payments and **25% BHIM-UPI volume growth**. These are *allocated/targeted*, not spent/achieved. They establish FY2026–27 budgetary intention while the Government proposes later MDR, but not whether scheme criteria will be retained after MDR starts.
- **S36 CBDT official history:** Circular 16/2020 dated 30 August 2020, Income Tax Department record https://www.incometaxindia.gov.in/w/circular-no.-16/2020-imposition-of-charge-on-the-prescribed-electronic-modes-under-section-269su-of-the-income-tax-act-1961 . Instructed banks to refund covered prohibited charges collected from 1 January 2020, and cited penalties under the then applicable legal rules. Never extrapolate the 2020 legal status directly to 2026 without considering Act 21/2026.
- **S37 regulatory comparison:** RBI 1 September 2016 debit-card MDR unbundling, https://www.rbi.org.in/Scripts/BS_ViewMasDirections.aspx?id=10591 . Require separate disclosure and merchant education in *card* acceptance. This is historical transparency precedent, not proof the same law applies unchanged to 2026 account-funded UPI MDR.
- **New circular ambiguity:** Third-party mirror of NPCI OC-237 page 1, paragraphs 3 and 4. Capital markets receive a **0.02% rate**, but paragraph 4 refers to a standard provider distribution with stated sequential onward rates **0.28%, 0.12%, 0.08%**. They cannot apply literally to a 0.02% gross fee. Source neither describes a clearly scaled allocation table nor supplies a worked example. *Unresolved operational interpretation; do not invent one.*
- **Mandate exception:** OC-237 page 1 note (b): mandate-related pricing excluded from that circular's scope. NPCI FAQ Q22 likewise says prescribed new transaction MDR does not apply to UPI AutoPay standing instructions. This does not imply every possible existing mandate charge is zero.

[Full Edition 04 analysis](funding-operations.md).


---

# Edition 05 audit — GST incidence and UPI funding modes (15 October 2026)

**Governmental primary source:** The [Ministry of Finance's April 18, 2025 PIB clarification](https://www.pib.gov.in/PressReleasePage.aspx?PRID=2122747) denied a GST tax on *UPI transferred value*, while explicitly recognising GST on MDR/payment-service charges **when charged**. At that time bank account-funded UPI MDR was zero. It is a misreading to argue the 2025 denial rules out the taxation of a September 2026 proposed processing fee.

**NPCI's reported September 22 clarification:** [Indian Express](https://indianexpress.com/article/business/npci-clarifies-18-percent-gst-on-upi-payments-over-2000-mdr-merchant-impact-10889118/) records 18% GST on nominal MDR, e.g. eligible ₹10,000 bank account P2M produces **₹40 MDR and ₹7.20 fee GST**. It reports NPCI saying input-tax credit reduces incidence for GST-registered merchants. The statement is not proof *every* merchant can claim a credit.

**Statutory eligibility:** [CBIC ITC rules](https://cbic-gst.gov.in/input-tax-credit-rules.html) require registration and documentation. The account-funded P2PM exemption of **≤₹1 lakh monthly incoming UPI** is not a GST registration threshold. Traders above the former can still be unregistered for GST under applicable supply and turnover rules. For an eligible ₹10,000 standard account-funded payment, **₹47.20 gross deduction, ₹40 economic fee with full valid ITC, ₹47.20 if ITC is unavailable**. Tax registration is not by itself proof of complete reclaim eligibility.

**Instrument segmentation:** [Google Pay merchant documentation](https://support.google.com/pay-offline-merchants/answer/13591970?hl=en) explains existing credit-card, credit line and wallet MDR for UPI-linked payments; [NPCI's RuPay credit-card product](https://www.npci.org.in/product/rupay/credit-card-on-upi) establishes separate card-funding restrictions including unavailable P2P/P2PM. Google credit-linked merchant size thresholds based on annual turnover do not measure the same eligibility as bank-funded P2PM monthly credits.

**Live merchant operational notice:** [Google Pay's current settlement Help page](https://support.google.com/pay-offline-merchants/answer/9846840?hl=en), inspected directly on October 15, acknowledges NPCI's October 13 delay and warns that merchants who previously opted out of >₹2,000 payments may need to opt out again when the new MDR actually starts. That is product-specific operational information. A separate search-indexed Google MDR guide continued referencing the original October 15 start, but opening that exact URL returned 404: cite only with the explicit dated-index limitation, and do not suggest the charges went live.

**Next work:** validate affected unregistered-merchant count, complete bank/PSP tax invoicing process, actual ITC uptake, receipt categories and separate credit-/account-funded transaction volumes. No such microdata or post-implementation observations are yet verified.

[Edition 05 detailed source audit](tax-and-funding-rails.md).


---

# Edition 06 verification: transaction denominators, research math and court-record disambiguation

**A. 2026 source tiers.** Original [NPCI P2P/P2M ecosystem page](https://www.npci.org.in/what-we-do/upi/upi-ecosystem-statistics) was directly available with an **August 2025** screenshot/snapshot showing P2M count 12,705.16 million and P2M value ₹7,23,797.42 crore. It must not be mislabeled a September 2026 original. The [official NPCI monthly totals](https://www.npci.org.in/product/upi/product-statistics) establish all-UPI August 2026 volume 24,508.96 million and value ₹29,82,355.95 crore, but not the merchant split.

**B. Direct historical RBI corroboration.** [RBI Bulletin research, October 2024](https://www.rbi.org.in/Scripts/BS_ViewBulletin.aspx?Id=22933) cites P2M shares changing from 45.2% to 61.7% *count*, 16.6% to 26.2% *value* (April 2021 to March 2024). This supports the count/value distinction but **does not authenticate September 2026 shares**. [India Dispatch](https://data.indiadispatch.com/payments) attributes Sep 2026 63.3%-by-count and 30.2%-by-value P2M to NPCI but is a secondary compilation. [Indiagraphs](https://indiagraphs.com/data/india-upi-p2p-vs-p2m-transactions/p2m-transaction-value) publishes August P2M value ₹8,95,320.68 crore with licensed raw data inaccessible here.

**C. Source-specific ticket bands.** [Moneycontrol, 16 Sept, by Ishaan Gera](https://www.moneycontrol.com/news/business/upi-payments-above-rs-2-000-double-in-three-years-but-share-declines-14031173.html) reports August 2026 merchant payments: above ₹2,000 ~4% count and 67% value (~620 million transactions/~₹6 lakh crore). Under ₹500: 86% count, 16% value. ₹501–2,000: 10% count, 17% value. These percentages sum to 100 within P2M, and are **not** all-UPI counts, actual MDR qualifications or audited original microdata. Above-₹2,000 P2M count is ~2.53% of all-August UPI count using the report's rounded 620m and official 24,508.96m.

**D. Model reconstruction.** ₹8,95,320.68 crore August P2M × approximate 67% high ticket share = **₹5,99,864.86 crore**. × 0.4% = **₹2,399.46 crore nominal monthly uncapped arithmetic**, not realised fees; × 0.25% = **₹1,499.66 crore/month**, ×12 = ~**₹17,995.95 crore static annualisation**. These reconstruct the rough academic reported ₹1,500 crore monthly/₹18,000 crore annualisation by arithmetic, not independent validation of its eligible base or tariff weighting. See [economics](economics.md).

**E. Signed Supreme Court order misidentification warning.** An [official, genuine 16 February 2026 ROP PDF](https://api.sci.gov.in/supremecourt/2026/5777/5777_2026_1_8_68773_Order_16-Feb-2026.pdf) exists for **ANJAN DATTA v UNION OF INDIA, W.P.(C) 152/2026**, counsel Ashutosh Dubey, which only says **Tag with W.P.(C) 101/2026**. It predates the September MDR instrument and is **not** the signed 28 September MDR hearing order. Matching litigant/counsel names would create a false-positive identification. We must continue seeking official record for separately reported Diary 57387/2026. See the source record S50.

**F. Original academic work retrieval.** Original Ashish Das/Praggya Das [40-page PDF](https://www.math.iitb.ac.in/~ashish/workshop/MDR_on_UPI_Oct11.pdf) appears in indexed search as published 11 October 2026, but both direct web-open and container download failed. The [ET Now article](https://www.etnownews.com/news/upi-mdr-may-burden-costs-on-consumers-flags-iit-bombay-report-seeks-framework-tweak-before-implementation-article-156320435) is explicitly secondary coverage. Do not claim page-level reading of the full original.

[Full Edition 06 report](merchant-value-audit.md).


---

# Edition 07 — first-party postponement and government-commissioned baseline (16 October 2026)

## Corrected source status: NPCI's own postponement notice verified

**S52** Original [NPCI press-release PDF, 13 October 2026](https://www.npci.org.in/uploads/UPI_MDR_on_Select_Merchant_Transactions_Shall_be_Implemented_Post_Diwali_4c9cdd77d5.pdf), opened and visually inspected. The one-page announcement says the *UPI and Services Steering Committee* deferred the proposed select P2M MDR until after Diwali, with the specific date to be separately notified. This is a **primary source**, superseding earlier assertions that the NPCI press release was unavailable. An exact date such as 1 January 2027 is speculative, not official.

**Remaining NPCI gap:** This is an authentic first-party *postponement announcement*, **not** the original four-page NPCI Circular OC-237 containing tariff details. The OC-237 copy remains independently hosted with corporate filing corroboration; official NPCI-hosted complete copy and clarifications are still outstanding.

## Government assessment, report provenance and qualitative limits

**S53** [Ministry of Finance/DFS original PIB release, 16 February 2026](https://www.pib.gov.in/PressReleasePage.aspx?PRID=2228651) names Ipsos Research Pvt Ltd as third-party contractor working in consultation with NPCI. It reports **10,378** face-to-face CAPI respondents from **15 states**: **6,167 users, 2,199 merchants, 2,012 service providers**. Fieldwork was **22 July–25 August 2025**. Within this sampled population the release reports **72% of merchants satisfied** with digital payments, **57% self-report increased sales** after adopting digital payments and **94% of sampled small merchants using UPI**.

These are historical pre-MDR **survey/descriptive findings**. They do not establish nationally representative rates without sampling weights, nor prove that the scheme alone *caused* sales increases, nor measure the behavioural impact of the proposed 2026 merchant charges. Government publication of a commissioned third-party study does not by itself make it an independent causal trial.

**S54** The original [government-hosted 2026 impact-analysis PDF](https://financialservices.gov.in/beta/sites/default/files/socio-economic-impact-incentive-scheme.pdf) was identified from the Ministry's own linked document and selectively indexed text, but direct PDF fetch returned 404/502. **Do not claim full report reviewed page by page**. Indexed text contains an additional scenario of 76% reverting to cash **if UPI became unavailable**. This is not the same question as the [LocalCircles 2026 consumer survey](https://www.localcircles.com/a/press/page/upi-mdr-consumer-survey) asking about methods **if UPI became more expensive**, even though both report a rounded 76% outcome.

## Scheme disbursement reconciliation — key accounting correction

Original [Cabinet PIB release 19 March 2025](https://www.pib.gov.in/PressReleasePage.aspx?PRID=2112771) separately presents total payout, RuPay debit and BHIM-UPI amounts for first three years. The 2026 DFS release supplies FY2024–25 and a four-year total:

| FY | Total scheme disbursement ₹ crore | BHIM-UPI ₹ crore | RuPay debit ₹ crore | Provenance |
|---|---:|---:|---:|---|
| 2021–22 | 1,389 | 957 | 432 | Cabinet PIB |
| 2022–23 | 2,210 | 1,802 | 408 | Cabinet PIB |
| 2023–24 | 3,631 | 3,268 | 363 | Cabinet PIB |
| 2024–25 | 1,046 | Not independently separated | Not independently separated | DFS study announcement |
| **Total** | **8,276** | **6,027 identified in first 3 FYs** | **1,203 identified in first 3 FYs** | Both |

Check: 1,389 + 2,210 + 3,631 + 1,046 = **8,276**. First three years total **7,230** = BHIM-UPI **6,027** plus RuPay debit **1,203**. Treating ₹8,276 crore as exclusively BHIM-UPI is incorrect.

The Cabinet **approved an estimated FY2024–25 outlay of ₹1,500 crore**, whereas DFS later *reported ₹1,046 crore in FY2024–25 disbursements* for the studied scheme. Do not conflate voted/approved scheme outlay with settled reimbursements or assume the difference ₹454 crore establishes savings, lapsed claims or a fiscal shortfall without accounting and release data.

## Specific evidence test

**Hypothesis:** the UPI MDR would reverse the adoption and merchant-experience benefits of the earlier zero-MDR incentive scheme.

**What primary evidence supports:** merchant satisfaction and perceived sales changes under the old environment; actual first-party scheme disbursements; value of testing merchant price sensitivity.

**What remains unproved:** merchant exit rate after MDR, ex-post effects of a charge not yet implemented, cost-based appropriateness of 0.4%, fraction of merchants able to claim GST ITC, and the net social value of replacing or complementing public subsidy.

**Further work:** pursue full Ipsos PDF using government archive or alternate DFS host, raw survey questionnaire/weights, original OC-237 on NPCI's server, SCI signed 28 September order, and actual scheme financial releases.

[Full Edition 07 audit](evaluation-and-primary-notice.md).


---

# Edition 08 — Exemption proposal and premature policy conclusions (16 October 2026)

- **Reported proposed amendment (S55):** [Business Standard, 8 October 2026](https://www.business-standard.com/amp/finance/news/festival-breather-upi-merchant-fee-may-be-deferred-till-january-1-126100800036_1.html?isa=yes), reporters Ajinkya Kawale/Archis Mohan, citing unnamed Steering Committee-related sources, described two separate possibilities: a start date of **1 January 2027** and expansion of the zero-MDR merchant exemption to annual turnover of **₹40 lakh**. The article reports NPCI did not respond to comment before publication. These were **not formal notifications**.
- **Chronologically later official source (S52):** NPCI's [13 October press release](https://www.npci.org.in/uploads/UPI_MDR_on_Select_Merchant_Transactions_Shall_be_Implemented_Post_Diwali_4c9cdd77d5.pdf) confirms a deferral until post-Diwali with the exact new date **separately notified**, and says nothing about an amendment to the merchant-exemption definition. Thus neither January 1 nor ₹40 lakh qualifies as implemented policy at the research cutoff.
- **Different policy denominators:** Existing announced P2PM merchant classification refers to **≤₹1 lakh inward UPI receipts per month**, and NPCI FAQ Q29 discusses three consecutive months over the limit. The reported new proposal refers to **total annual merchant turnover** up to ₹40 lakh. A merchant with high cash/credit sales but relatively little incoming UPI may pass the monthly UPI test and fail the annual turnover test; the converse is possible. Never annualise ₹1 lakh ×12 and compare directly to ₹40 lakh without explicitly changing variables.
- **Academic proposal differs again:** Das and Das paper (reported secondary summaries) suggests offline MDR for very large merchants above ₹50 crore annual sales and lower provider remuneration. This is neither the announced monthly P2PM test nor a negotiated government exemption.
- **Existing non-bank UPI products:** [Google merchant help](https://support.google.com/pay-offline-merchants/answer/13591970?hl=en) uses **₹20 lakh annual business turnover** for certain RuPay credit-card, credit-line and wallet-funded UPI merchant tariffs, with its own payment-acceptance requirements. This must not be substituted for the bank-funded framework's P2PM definition.
- **RBI Governor's October 7 reported expectation (S56):** Sanjay Malhotra told reporters he expected a small MDR not to materially reduce UPI volumes, and did not observe a decline before rollout. This is **pre-policy judgement**, not actual MDR effect. [LocalCircles October 4](https://www.localcircles.com/a/press/page/upi-mdr-consumer-survey) forecast a 10% reduction in value/4% volume under hypothetical conditions, also unproven. The forecasts are not mutually disproof of one another; only measured post-activation effects may settle them.
- **Provider operational communication:** [Google's indexed MDR help article](https://support.google.com/pay-offline-merchants/answer/18716009?hl=en) still surfaced October 15 phrasing on public search (direct open was blocked by automated Google challenge), but its accessible [credit-product help page](https://support.google.com/pay-offline-merchants/answer/13591970?hl=en) contains the current October 13 postponement banner. A historical snippet cannot override NPCI's press statement or prove launch.
- **Checkout fee taxonomy:** [Indian Express, 12 October](https://indianexpress.com/article/explained/explained-economics/online-payments-tickets-price-rise-reasons-10916419/) reviews platform and convenience charges/dark patterns in online transactions. No such existing add-on should automatically be labelled NPCI OC-237 MDR. Consumer surcharge, merchant network MDR, PSP/aggregator fees, and separate credit-funded UPI MDR require separate transactions and legal invoices.

[Detailed investigation](merchant-exemption-policy-watch.md).


---

# Edition 09 — first-party Parliament documents and UPI lending impacts (16 October 2026)

## A. New unreconciled official figures

**S59** [Original Lok Sabha Unstarred Question 4111](https://sansad.in/getFile/loksabhaquestions/annex/185/AU4111_DBNB6R.pdf?source=pqals), answered **18 August 2025**, is a signed public Ministry of Finance reply by Minister of State **Pankaj Chaudhary** to **Anand Bhadauria**. It says the Government extended approximately **₹8,730 crore** in ecosystem incentive support in FY2021–22 through FY2024–25. **S53** [DFS–Ipsos press statement](https://www.pib.gov.in/PressReleasePage.aspx?PRID=2228651), dated **16 February 2026**, says ₹8,276 crore incentive disbursements for FY2021–22 through FY2024–25, broken down 1,389 + 2,210 + 3,631 + 1,046 crore. **Difference ₹454 crore**, or approximately 5.5% of the later disbursement total. Not fraud evidence. 'Support' and 'disbursement' may refer to different bases; neither the month-end cutoff nor adjustments are published alongside the two statements. Seek annual sanction, release, claim, settlement, reversals, instrument splits, and audit reports.

**Historical MDR, newly first-party verified:** The same Lok Sabha reply identifies an NPCI **30 August 2019 circular** permitting acquiring banks to apply UPI P2M MDR of up to 0.30%, before the 2020 zero-MDR regime. The answer says **no proposal at that time in August 2025**, not that no charge could ever be considered subsequently. Future 2026 amendments cannot retroactively make its original August 2025 answer inaccurate.

## B. Original Standing Committee follow-up is now directly reviewed

**S60** [Original 44th Standing Committee on Finance Report (18th Lok Sabha)](https://sansad.in/getFile/app/lsscommittee/Finance/18_Finance_44.pdf?source=app) is a 62-page PDF. Its PDF pages 7–10 include the verbatim reproduced **32nd Report** recommendation, **Department of Financial Services' written response**, and 44th Committee follow-up. The original full 32nd Report remains unreviewed, and S62 is its [official library catalog](https://elibrary.sansad.in/items/435c4f84-01da-4686-aaa9-edda73d105ab/full).

The Committee recommended the Department explore a **self-reliant tiered revenue model** for larger UPI merchants, protect small merchants and P2P, and not rely indefinitely on Treasury support. The reviewed passages **do not explicitly authorise the precise 0.40% rate, ₹300 cap or ₹2,000 ticket threshold** adopted later. Parliament's general recommendation must not be substituted for executive/NPCI detailed rate-setting.

The Ministry response (original PDF page 8) discloses two policy options under consideration **before September's rate announcement**: selectively reintroducing MDR for high-value transaction/merchant cohorts and designing tiered incentives to phase out ongoing public subsidy. It also confirms historic UPI P2M fees up to 0.30% until December 2019.

## C. ₹20,700 crore cost figure is a published formula, not an audited cost register

**Department of Financial Services written reply** in the 44th Report identifies a unit operating-cost estimate of **₹1.38 per P2M transaction**, multiplied by **15,000 crore prior-year merchant transactions**, yielding **₹20,700 crore annual industry cost**. This is a recoverable official calculation, but no bank/TPAP/acquirer cost ledgers, cash expenditures, capital depreciation, cost allocation by P2P/P2M or independent methodology accompany the reply. It is **officially asserted cost**, not independently audited fact.

**Coverage:** ₹2,000 crore FY2026–27 proposed incentive outlay divided by ₹20,700 crore estimate = **9.66%**. The Committee reproduces wording 'merely 11%' in the earlier 32nd recommendation and later refers to 'barely 10 per cent', reflecting differing approximations. These should not be silently forced into exact numeric equality. Committee separately cites government incentive covering '14% of potential MDR collections' without an authenticated transaction-level fee cube.

## D. Loan repayments have specific fee-incidence questions

**S61** [Vinod Kothari Consultants, 20-page original specialist analysis](https://vinodkothari.com/wp-content/uploads/2026/09/MDR-on-UPI-_-As-applicable-on-Lenders.pdf), viewed with its source provenance clearly marked secondary:

- ₹10,000 manual one-off EMI processed as eligible standard P2M could attract **₹40**, excluding GST.
- A collection account classified as eligible MCC 'Debt Collection' Industry Program could attract **flat ₹5**, not 0.4%. Classification is merchant/acquirer dependent and not automatic for all NBFCs.
- Qualifying recurring UPI AutoPay mandates are outside *new ordinary-ticket MDR*, consistent with official NPCI FAQ Q22. A lender disbursement to a consumer's bank UPI is not a P2M merchant collection.
- The paper models ₹1,00,000 nominal 18% 12-month loan, approximate ₹9,168 monthly EMI; each fee at 0.40% ₹36.67 and modeled effective annual IRR drop of 77 basis points to around 17.23%. This is illustrative model, **not realised economic effects**. Check loan timing and repayments before treating exact IRR as independently replicated.
- The paper argues MDR may remain due after a subsequent commercial refund because initial payment services were performed. This is **an analyst's interpretation**; no authenticated primary OC-237 refund/reversal contractual rule was obtained. It must remain unresolved.
- S63 [TeamLease September UPI Consolidated Circular 1.0 note](https://teamleaseregtech.com/updates/article/59640/npci-issued-the-upi-consolidated-circular-version-10/) identifies 18 Sep master text with historical OCs consolidated only up to July 31. S64 [NPCI Knowledge Base](https://www.npcisupport.org.in/portal/en/kb/articles/upi-operating-circular-path) confirms member bank URCS/e-library access and public circular listings. Neither alone authenticates OC-237 full original.

## Required additional evidence

1. Official DFS signed letter or audit reconciliation of ₹8,730 crore versus ₹8,276 crore with scheme inclusions and cutoff dates.
2. Independent breakdown of ₹1.38/P2M cost by acquirer, issuer, PSP and app provider, variable/fixed costs, fraud/cyber risk, GST and cash-flow effects.
3. Complete source of 32nd Committee report, all paragraphs on UPI MDR and any committee minority/dissent records.
4. Authenticated OC-237 source, exact MCC classification, loan repayment/manual/AutoPay and refunds/reversals.
5. Full text of 18 September consolidated UPI master, including fee/consumer pass-through sections.
6. Empirically test lender IRR scenario from hypothetical bank amortization schedules, not conclude actual pass-through to borrowers.
7. Track post-Diwali effective date. Deferral is primary-confirmed; no real October 15 MDR collection inferred.

[Complete Edition 09 report](parliament-cost-and-lender-audit.md).


---

# Edition 10, 16 October 2026 — Found the real September 28 Supreme Court ROP

A two-page [original-form Supreme Court Record of Proceedings](https://www.livelaw.in/pdf_upload/2026/10/06/5738720262026-09-28-704692.pdf) has now been viewed in full, including both page images, on LiveLaw's file host. It identifies **Anjan Datta v Union of India & Ors., W.P.(C)1199/2026**, Item 56, Court 1. IA295283/2026 concerns additional documents, and IA288162/2026 is the stay request. Coram: CJI, Joymalya Bagchi and V. Mohana; petitioner AOR Ashutosh Dubey.

**Official independent corroboration:** Supreme Court's [28 September official cause list](https://api.sci.gov.in/jonew/cl/2026-09-28/M_J_2.pdf) includes the matching registered number, petitioner, AOR and IA. This is original Supreme Court evidence of a scheduled listing, while the reproduced ROP is evidence of what was written as operative directions. The order document itself was not retrieved from an official Supreme Court file endpoint.

**ROP page 2:** Issue notice returnable **02 November 2026**; Gurmeet Singh Makker accepts notice for respondents 1, 3 and 4; Alok Tripathi accepts for respondent 2; counter-affidavits **if any** within four weeks. The ROP lists the stay application but does **not expressly record its refusal**. [LiveLaw oral courtroom reporting](https://www.livelaw.in/top-stories/supreme-court-asks-centre-to-explain-decision-to-levy-charges-on-upi-transactions-refuses-stay-552055) says stay was sought and declined, reports Justice Bagchi's questions concerning the legal incidence of a charge under amended payment law and Income-tax Act 269SU, and ASG N. Venkataraman's characterization as a service settlement fee. None of this establishes a final court conclusion on tax character or constitutional validity.

**Procedural dates:** November 2 is a returnable date, *not proof of a confirmed listing or a completed hearing*. Preserve the distinction and check official future cause lists when published. The unrelated February 16 W.P.(C)152/2026 Anjan Datta order is confirmed as a false-positive search result.

**Study proposal detail:** The [Moneylife account of Das/Das alternative](https://www.moneylife.in/article/cut-upi-mdr-to-008-percentage-scrap-banks-70-percentage-share-iitbombay-study-proposes-overhaul-of-merchant-charges/81914.html) reports a per-TPAP monthly MDR receipt limit of **₹50 crore**, with excess diverted to development funding, in addition to 0.06% app and 0.02% PSP. Original paper PDF full text still not retrieved; this is *secondary reporting of a research recommendation*, not an implemented NPCI rule.

[New source-graded research note](supreme-court-record-edition10.md).
