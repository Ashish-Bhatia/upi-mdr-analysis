# Economics notebook — UPI MDR, Edition 02
**Cutoff:** 15 October 2026. Currency INR. Figures are *illustrations*, not measured MDR receipts.

## 1. Three very different quantities

- **Network-wide UPI value:** all categories of transactions, as published monthly by NPCI.
- **Chargeable P2M value:** eligible merchant receipts **above ₹2,000**, excluding exempt P2PM and any other inapplicable categories.
- **Actual MDR revenue:** sum of eligible transaction-level charges with special sector tariffs, high-value caps and rounding, potentially excluding or separately accounting for tax.

Confusing these quantities can inflate or distort a projected MDR yield by orders of magnitude.

## 2. Reproducible network-wide theoretical ceiling

The Ministry of Finance [15 September release](https://www.pib.gov.in/PressReleseDetailm.aspx?PRID=2310586) states **70% of all UPI transaction value is P2P**. This is an official summary estimate, not a downloadable transaction cube. NPCI reports **₹29,37,396.67 crore** in total UPI transaction value in September 2026.

Assuming (for bounding **only**) the government ratio is exactly 70% in this specific September period:

1. Total: ₹29,37,396.67 crore.
2. Non-P2P remainder = 30% × total = **₹8,81,219.001 crore**.
3. Assume, improbably, that **every rupee** of that remainder qualifies as standard uncapped MDR at 0.40%.
4. Gross ceiling = ₹8,81,219.001 crore × 0.004 = **₹3,524.876 crore** for one month.
5. Multiplying this one-month synthetic bound by 12 gives **₹42,298.512 crore** on an *unchanging period* assumption, **not** a forecast.

This is a loose ceiling, not an estimate: chargeable merchant value is a subset of the remainder, and many tickets are exempt, capped or charged at 0.02%/flat ₹5. The bound is conditional on the 70% government value-share estimate applying to September and on no eligible rate exceeding 0.4%. It does not incorporate the tax treatment. It cannot be turned into a forecast without granular data.

## 3. Research paper scenario — an unverified calculation, not a fact

A [Mint account of the research proposal](https://www.livemint.com/money/upi-mdr-from-0-40-to-0-08-what-iit-bombay-report-has-proposed-and-why-it-wants-new-fee-structure-explained-11791805337722.html) reports the paper assumed about **₹6 lakh crore** in August merchant value over the ₹2,000 threshold and a **0.25% effective realised MDR** after policy effects:

- ₹6,00,000 crore × 0.0025 = **₹1,500 crore in the example month**.
- 12 × ₹1,500 crore = **₹18,000 crore annualised**, if that rate and base held for each of twelve months.
- At 0.40% fully charged and uncapped the same base would imply ₹2,400 crore in that month.
- At 0.08% fully charged on the same base it would imply ₹480 crore **before applying the researchers' proposed narrower merchant eligibility**.

**Limitations:** We did not retrieve the original paper or underlying transaction cube. The ₹6 lakh crore figure, the 0.25% effective rate and the merchant-value subset have **not** been independently substantiated. August and September periods must not be combined as if equivalent. These numbers illustrate sensitivity, not actual present collections, and should not be compared directly with budgeted government incentives without matching periods and cost scope.

## 4. Pricing cliff at ₹2,000

On an eligible *standard* merchant payment:
- ₹2,000 is exempt, fee ₹0.
- ₹2,001 would attract approximately ₹8.004 **before the as-yet-unverified settlement rounding/tax treatment**.
- ₹75,000 yields ₹300 and payments above that hit the ₹300 cap.

This discontinuity creates a potential incentive for merchants/payers to change ticketing or split purchases. Its prevalence, legality under bank/acquirer agreements and actual behavioural response are **not measured**. An alternative smooth graduated structure could avoid the cliff, but would have different revenue implications.

## 5. Distribution is a waterfall, not a sum

The third-party [four-page copy of NPCI OC-237](https://www.madhyabharatparidrishya.com/wp-content/uploads/2026/09/OC_237_MDR-2026.pdf) describes 0.40% paid to acquiring bank, 0.28% onward interchange to issuer, 0.12% onward issuer-to-PSP, and 0.08% onward PSP-to-app.

At ₹10,000, the retained amounts before fund contributions and GST are **₹12 acquirer, ₹16 issuer, ₹4 payer PSP, ₹8 app**. Banks' combined acquirer+issuer allocation is **70%**, whereas the figure **0.28 + 0.12 + 0.08 = 0.48%** would erroneously double-count successive transfers.

Special Industry Program ₹5 transactions similarly imply ₹1.50 acquirer, ₹2.00 issuer, ₹0.50 PSP, ₹1 app, again before other deductions and commercial agreements.

The 5% fund line in the circular copy excludes Industry Program categories. Consequently, applying 5% uniformly to network MDR or multiplying estimated aggregate revenue by 5% is **not a substantiated contribution estimate**.

## 6. Cost assertion versus cost evidence

The [official NPCI 42-question FAQ, Q10](https://www.npci.org.in/uploads/FA_Qs_Merchant_Discount_Rate_MDR_on_Select_UPI_P2_M_Transactions_58dba1d39e.pdf) says industry estimates annual ecosystem operations at around **₹20,000 crore**. A [secondary report](https://www.ikigailaw.com/article/693/fintales-edition-48---upi-monetisation-and-revolving-credit-rules) quotes approximately ₹20,700 crore.

These cannot be treated as two independent measurements. They might reflect different sources, years or cost coverage. An auditor needs an itemised cost database by participant, revenue offset, P2P/P2M split, fixed/variable classification, risk/chargeback costs, distributional welfare, incentives already funded and before/after tax.

The academics' alternative asks banks to use a slice of an alleged roughly ₹4.84–₹4.85 lakh crore CASA-related interest margin. This is a **proposed cross-subsidy logic**, not proof of incremental UPI profits or feasibility for every bank.

## 7. Decision criteria for a defensible policy comparison

- Government cost: incentive outlay approved vs **actual expenditure**, by year and recipient.
- Merchant welfare: MDR paid after caps, exclusions, GST and pass-through, by industry and margin band.
- Consumer effects: explicit surcharges versus generic price changes and payment denial, with quasi-experimental evidence.
- Competition: TPAP, PSP and acquiring-bank market share, new entrants and interoperability.
- System risk: fraud exposure and security, availability, technical declines, cost of resilience.
- Distributional equity: Tier 3–6, micro-merchants, offline vs online, informal sector access.
- Transparency: audits, fund governance, source material, rate-review process and conflict-of-interest disclosures.

**Finding as of 15 October:** A chargeable mechanism and its nominal flows have been documented. The optimal rate, realised revenue, verified system cost and general price impact remain unresolved on the public materials examined.


## 8. Edition 04 — public subsidy and capital-market distribution

The Ministry of Finance's official [FY2026–27 Output-Outcome Monitoring Framework](https://www.indiabudget.gov.in/doc/OutcomeBudgetE2026_2027.pdf), Demand 32, records a **₹2,000 crore** incentive outlay for RuPay debit and BHIM-UPI small P2M merchant payments, with performance targets. The amount is *not* evidence of money paid nor sufficient to calculate national switching costs. The pre-existing incentive's [FY2024–25 Cabinet terms](https://www.pib.gov.in/PressReleasePage.aspx?PRID=2112771) paid 80% of an eligible acquired-bank claim unconditionally, then up to 10% for technical declines below 0.75% and another up to 10% for uptime above 99.5%. This was a subsidy **with service-level incentives**, not pure unconditional funding. The FY2026–27 outlay document does not re-specify all those rules, so do not assume identical conditions.

The third-party-hosted [NPCI OC-237 copy](https://www.madhyabharatparidrishya.com/wp-content/uploads/2026/09/OC_237_MDR-2026.pdf), paragraph 4, prescribes capital-market gross MDR 0.02% with a ₹300 cap but references the paragraph 3 waterfall, which specifies 0.28% interchange, 0.12% PSP fee, 0.08% app fee in sequential transfers for the standard 0.40% merchant rate. Since 0.28% > 0.02%, **literal reuse is mathematically impossible**. There could be alternative scaling, separate clearing arrangements or a drafting ambiguity, but the published copy does not establish which. The website cost calculator displays **gross merchant charge only**, not this disputed provider allocation.

Hypothetical capital-market ₹10,000 payment at 0.02% = ₹2 gross. Applying the standard interchange of 0.28% would imply an ₹28 onward transfer and an implicit funding deficit of ₹26 even before other onward transfers. This contradiction demonstrates why an authenticated schedule and regulator clarification are needed, and **does not prove the operational system is actually configured that way**.

The same source page 1 note (b) excludes mandate pricing from OC-237; [official NPCI FAQ](https://www.npci.org.in/uploads/FA_Qs_Merchant_Discount_Rate_MDR_on_Select_UPI_P2_M_Transactions_58dba1d39e.pdf) Q22 confirms the prescribed new MDR excludes recurring AutoPay mandates.


## 9. Edition 05: pre-credit and post-credit cost sensitivity

For eligible standard bank-funded P2M, proposed MDR = min(0.4% × transaction, ₹300). Where applicable, GST = 18% × MDR. Gross MDR plus GST is **0.472% of a standard qualifying payment** until the ₹300 MDR cap takes effect, provided no other fees are charged. This is not a GST on the payment itself.

| Eligible transaction | MDR | GST on fee | Gross fee + GST | If full ITC eligible, modeled cost |
|---|---:|---:|---:|---:|
| ₹2,000 | ₹0 | ₹0 | ₹0 | ₹0 |
| ₹3,000 | ₹12.00 | ₹2.16 | ₹14.16 | ₹12.00 |
| ₹10,000 | ₹40.00 | ₹7.20 | ₹47.20 | ₹40.00 |
| ₹50,000 | ₹200.00 | ₹36.00 | ₹236.00 | ₹200.00 |
| ₹1,00,000 | ₹300.00 | ₹54.00 | ₹354.00 | ₹300.00 |

The example assumes the stated 18% service GST rate, whole-paise rounding and fully valid ITC where indicated. It does not establish actual settlement invoicing conventions. Current UPI account-funded MDR collection was **deferred**, not effective as of October 15.

Sources: [PIB April 2025](https://www.pib.gov.in/PressReleasePage.aspx?PRID=2122747), [NPCI GST statement reported in Indian Express September 22](https://indianexpress.com/article/business/npci-clarifies-18-percent-gst-on-upi-payments-over-2000-mdr-merchant-impact-10889118/), [CBIC](https://cbic-gst.gov.in/input-tax-credit-rules.html).


## 10. Edition 06: reconstructing the high-value August merchant base

Moneycontrol's [16 September 2026 named analysis](https://www.moneycontrol.com/news/business/upi-payments-above-rs-2-000-double-in-three-years-but-share-declines-14031173.html) reports **4%** of August P2M transaction *count* above ₹2,000, contributing **67%** of P2M transaction *value*. The same report indicates approximately **620 million** high-ticket transactions in approximately **15.5 billion** merchant payments. Ticket-band count shares are ≤₹500: 86%; ₹501–₹2,000: 10%; >₹2,000: 4%. Value shares are 16%, 17% and 67% respectively.

A separately [NPCI-attributed compilation](https://indiagraphs.com/data/india-upi-p2p-vs-p2m-transactions/p2m-transaction-value) reports **₹8,95,320.68 crore** of total P2M value in August 2026. Its downloaded raw series was not accessible, so these publications should not be described as direct independent audits of the same underlying NPCI transaction cube.

| Computation | Value | Meaning |
|---|---:|---|
| August total merchant value reported by compilation | ₹8,95,320.68 crore | **P2M** (not all UPI) |
| × approx 67% over-₹2,000 ticket share | ₹5,99,864.86 crore | Approximate high-ticket **P2M** base |
| × 0.40% uncapped nominal fee | ₹2,399.46 crore/month | *Hypothetical upper arithmetic* **before exclusions, tiering and caps** |
| × 0.25% effective illustrative fee | ₹1,499.66 crore/month | Modeled scenario, **not actual receipts** |
| 12 × ₹1,499.66 crore | ₹17,995.95 crore | Static annualisation of one month, not a forecast |

The ≈₹1,500-crore/month arithmetic matches the [secondary account of the Das–Das paper](https://www.etnownews.com/news/upi-mdr-may-burden-costs-on-consumers-flags-iit-bombay-report-seeks-framework-tweak-before-implementation-article-156320435), but its **assumed effective 0.25% rate is not independently demonstrated**. The original academic PDF was discoverable in search but its full text timed out.

**Do not treat 0.40% on this ticket band as actual maximum collections.** The tariff has special-sector flat ₹5 fees, capital-market 0.02%, ₹300 caps, exempt P2PM and different funding instruments. Observed transaction totals alone cannot identify qualifying transaction-level charges. Published ticket bands can anchor *scenario sensitivity* but not a verified revenue forecast.

A [NPCI-attributed September payment-series analysis](https://data.indiadispatch.com/payments) reports **63.3% P2M share of ALL UPI count** and **30.2% share of ALL UPI value**. In August, the approximately 620 million >₹2,000 merchant payments were about **2.53% of the 24,508.96 million total UPI network count** per [NPCI monthly data](https://www.npci.org.in/product/upi/product-statistics), versus 4% of *merchant* count. This is a denominator correction; it does not change the reported 96% merchant-count exemption narrative.

**Policy significance:** A payment fee may affect a low share of transaction count yet a disproportionately large share of merchant turnover. Merchant margins, surcharges, incentives and realised chargeability vary by sector. The cost incidence study must weight both merchants and transaction value, not just count.


## 11. Edition 07: reconcile scheme payouts and avoid false causal attribution

The Department of Financial Services' [Feb 16 2026 impact evaluation announcement](https://www.pib.gov.in/PressReleasePage.aspx?PRID=2228651) presents **₹8,276 crore cumulative incentives across FY2021–22 to FY2024–25**. The [Cabinet's March 19 2025 release](https://www.pib.gov.in/PressReleasePage.aspx?PRID=2112771) breaks out UPI versus RuPay debit payouts for the first three years. Totals: FY22 ₹1,389 crore = UPI ₹957 + RuPay ₹432; FY23 ₹2,210 = ₹1,802 + ₹408; FY24 ₹3,631 = ₹3,268 + ₹363. FY25 adds ₹1,046 crore under the subsequent evaluation, with no independently reviewed exact product split. **Do not describe ₹8,276 crore as UPI-only subsidy.**

The Cabinet's **₹1,500-crore FY25 approved outlay** versus the later **₹1,046-crore FY25 reported disbursement** are not comparable as though every approved rupee had to be paid within the same timing and accounting category. The arithmetic difference is ₹454 crore, not evidence of actual programme savings absent release and carryover accounts.

The same retrospective study interviewed 2,199 merchants in July–August 2025 and reports 72% satisfied with digital payments and 57% reporting increased sales following adoption. These figures measure attitudes and self-reported outcomes *before* the September 2026 merchant fee was proposed; they do not prove the fiscal incentive caused business revenue growth. The 2026 LocalCircles fee survey measures stated future price responses under different questions. The studies cannot be pooled.

The original [October 13 NPCI deferral announcement](https://www.npci.org.in/uploads/UPI_MDR_on_Select_Merchant_Transactions_Shall_be_Implemented_Post_Diwali_4c9cdd77d5.pdf) is now directly reviewed and settles the **old implementation date** question, but not the effective date after Diwali.

This first-party reconstruction is more reliable than projecting 0.4% on network-wide payment value. Credible policy accounting requires at least: product-level actual disbursement, incremental MDR-eligible turnover, merchant incidence, public-fund contribution, participant cost books, and measurable technical-decline/uptime outcomes.
