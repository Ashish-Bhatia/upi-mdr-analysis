# Edition 08 — Which MDR exemptions are policy, proposal, or something else?

**Cutoff: 16 October 2026.** This document audits a substantive policy-change lead and compares apparently conflicting public statements without presenting either as realised MDR effects.

## 1. Press reporting versus an approved NPCI rule

**8 October 2026:** [Ajinkya Kawale and Archis Mohan, Business Standard](https://www.business-standard.com/amp/finance/news/festival-breather-upi-merchant-fee-may-be-deferred-till-january-1-126100800036_1.html?isa=yes), citing unnamed sources involved in UPI Steering Committee discussions, reported:
- A possible move from the initially scheduled **15 October** to **1 January 2027**.
- A proposal to exempt merchants with **annual business turnover ≤₹40 lakh**.
- Continued protection for individual merchant payments ≤₹2,000.
- NPCI had **not responded** to the article's request by publication.

**13 October 2026:** NPCI itself released the [original first-party PDF](https://www.npci.org.in/uploads/UPI_MDR_on_Select_Merchant_Transactions_Shall_be_Implemented_Post_Diwali_4c9cdd77d5.pdf), stating implementation **post-Diwali, with a date to be notified separately**. The document gives no revised date and does not mention any ₹40-lakh turnover exemption.

**Finding:** The newspaper was right to explore postponement, but the precise January date and merchant criterion remain **reported proposals**, not adopted policy. The original NPCI notice is authoritative for the fact of delay and does **not** imply an exemption amendment is approved.

## 2. Four eligibility figures on different bases

| Figure | What is actually being measured? | Scope / evidence |
|---|---|---|
| ≤₹1 lakh each month | Merchant's inward UPI receipts, P2PM category | September 2026 published bank account-funded MDR framework, not yet live |
| ≤₹40 lakh each year | Merchant's annual aggregate business turnover | Reported Steering Committee proposal, not notified |
| >₹50 crore each year | Offline firm's total annual sales | Das–Das academic alternative to current fee policy |
| ₹20 lakh/year condition | Business turnover in Google Pay's merchant credit-linked QR fee rules | Existing RuPay credit/credit-line/wallet-funded rail, not standard bank-funded UPI |

[Official NPCI MDR FAQ](https://www.npci.org.in/uploads/FA_Qs_Merchant_Discount_Rate_MDR_on_Select_UPI_P2_M_Transactions_58dba1d39e.pdf), Q26/Q29, describes the small-P2PM threshold and the three-month reclassification condition. [Google merchant help](https://support.google.com/pay-offline-merchants/answer/13591970?hl=en) makes clear that its separate RuPay credit-card programme's threshold applies to a different payment product.

**Two hypothetical profiles, not a compliance classification:**
- Merchant A: **₹24 lakh annual total sales**, **₹1.2 lakh inward UPI each month for three months**. Could fail the announced monthly UPI exemption while satisfying the **unannounced annual test**.
- Merchant B: **₹60 lakh annual total sales**, **₹80,000 inward UPI per month**. Could satisfy the monthly UPI test while failing the annual-business-turnover proposal.

Neither example proves eligibility when actual merchant category, exact definitions, PSP records, platform processing, or future amended rules are unknown.

## 3. Two forecasts that cannot be fact-checked with pre-rollout totals

RBI Governor Sanjay Malhotra reportedly told the 7 October post-MPC press conference he did not anticipate a major fall in UPI volumes from a small charge and had seen no decrease **as of that date**. Source: [Business Standard](https://www.business-standard.com/finance/news/small-fee-unlikely-to-impact-upi-transaction-volumes-rbi-governor-on-mdr-126100700606_1.html).

LocalCircles forecast a 4% decrease in volume and 10% decrease in value under consumer/merchant fee response assumptions. Source: [Original survey publisher](https://www.localcircles.com/a/press/page/upi-mdr-consumer-survey).

**Both statements are pre-rollout expectations.** The planned October 15 commencement was cancelled/postponed; the earlier October 7 observation covers a period **before** new MDR. Treating the Governor's absence of decline as evidence consumers did not react to a charge never imposed is a temporal error. Similarly, the LocalCircles scenario is not actual subsequent payments data.

Research design after implementation: (a) tag merchant type, incoming UPI monthly, annual sales category where legally held, funding instrument and MCC; (b) construct eligible and zero-MDR control groups; (c) compare pre/post transactions **around the actual date** with seasonality, value mix and merchant turnover; (d) examine reporting/price substitution bias; (e) account for platform charges and GST input credits.

## 4. Merchant provider guidance may be out of sync

[Search-indexed Google Pay for Business fee article](https://support.google.com/pay-offline-merchants/answer/18716009?hl=en) still contains initial “from 15 October 2026” wording. A direct web-open request hit a Google automated verification page; this review does **not** assert current live view of the article. The directly accessible [Google credit-linked merchant help page](https://support.google.com/pay-offline-merchants/answer/13591970?hl=en) contains a prominent banner identifying the **13 October NPCI deferral** and a merchant opt-out reconfiguration warning. The indexable historical wording must not override NPCI's dated original notice.

## 5. Distinguish merchant-facing fees found online

A consumer may see a payment gateway's convenience fee, seller platform fee, transaction processing charge or other checkout add-on even while the **new bank-account MDR is deferred**. [Indian Express](https://indianexpress.com/article/explained/explained-economics/online-payments-tickets-price-rise-reasons-10916419/) surveyed widespread online add-ons and checkout dark patterns. Their existence cannot establish the proposed NPCI charge has gone live. Differentiate fee payer, fee beneficiary, underlying payment instrument, contractual/legal rate, GST and how the amount appears in checkout versus acquiring-bank settlement.

## Open verification requests

1. A new signed NPCI notice explicitly adopting, rejecting or amending ₹40-lakh annual turnover eligibility.
2. New operational notice for the exact effective date, not newspaper January speculation.
3. Exact legal definition of 'annual turnover' versus GST turnover, merchant UPI credits and cash sales.
4. Whether three-month P2PM reclassification and existing MCC flags would survive an amended turnover test.
5. Acquirer guidance about evidence/document requirements for merchant annual turnover.
6. RBI original press-video/transcript for the October 7 comment, not only press reports.
7. Complete NPCI OC-237 circular on the official domain and primary audit of its disputed capital-market distribution.
8. Actual post-launch transaction counts and values using eligible merchant cohorts.

**Editorial verdict:** Evidence supports a live policy discussion over the exemption definition. It **does not** support treating the ₹40-lakh criterion or January 1 as enacted or operational.
