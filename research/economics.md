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
