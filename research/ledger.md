# The UPI MDR Story — Evidence Ledger

Edition 01 | Research cutoff: 15 October 2026 | India

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

1. Signed September 14 Gazette notification, number and enacted amendments to PSS Act section 10A.
2. NPCI full OC-237 dated September 15 and September MDR FAQs with exemptions, fee splits, GST, merchant-category coding, refund rules and cap calculations.
3. Original NPCI October 13 deferral circular and next effective-date notification.
4. Merchant P2M eligible value/volume by amount band and category, to independently test the 96% estimate.
5. Payment ecosystem cost accounts, fraud and cyber operating costs, and the actual revenue split.
6. Full authors' paper and methodology behind the quoted CASA bank earnings and 0.08% recommendation.
7. Original Supreme Court petition, registry details and any signed orders. Filing alone is not a judicial decision.
8. Published evidence on merchant pass-through to consumer prices, cash-substitution and differential retailer margins.

## Updating the edition

Add sources with document date, publisher, URL, verification class and precise scope. Revise claim status when evidence changes. Record policy-effective dates separately from announcement dates. Commit substantive corrections with a changelog entry; never turn reports or estimates into verified transactional facts.

This project is independent commentary. It is not affiliated with RBI, NPCI, Government of India, or the cited researchers.
