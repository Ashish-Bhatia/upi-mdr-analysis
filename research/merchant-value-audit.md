# Edition 06 — The UPI MDR revenue denominator audit
Research cutoff: 15 October 2026. **Not a transaction-level revenue estimate, and not proof of live MDR collection.**

## Headline finding

The Ministry of Finance's [September 15 assurance](https://www.pib.gov.in/PressReleseDetailm.aspx?PRID=2310586) that 96% of P2M payments remain free concerns **number of transactions**, not their economic weight.

A named [Moneycontrol investigation by Ishaan Gera, 16 September 2026](https://www.moneycontrol.com/news/business/upi-payments-above-rs-2-000-double-in-three-years-but-share-declines-14031173.html) reports the August **P2M** distribution:

| Ticket band | % of P2M transaction count | % of P2M value |
|---|---:|---:|
| Up to ₹500 | 86% | 16% |
| ₹501 through ₹2,000 | 10% | 17% |
| Above ₹2,000 | 4% | 67% |
| **Total** | **100%** | **100%** |

In the report the high-ticket bucket represented **approximately 620 million P2M transactions** (of about 15.5 billion merchant transactions), worth nearly **₹6 lakh crore**. The analysis did not supply the full underlying account-by-account NPCI microdata, and the reported shares are rounded.

The available [NPCI all-network August 2026](https://www.npci.org.in/product/upi/product-statistics) count is 24,508.96 million. Hence **620/24,508.96 ≈ 2.53%** of all UPI counts, compared with **4% of P2M counts**. The denominator must always be named.

## National P2P versus P2M statistics, with source provenance

1. **RBI primary, historical:** [October 2024 RBI Bulletin](https://www.rbi.org.in/Scripts/BS_ViewBulletin.aspx?Id=22933) records P2M share of ALL UPI rising from 45.2% to 61.7% by count and 16.6% to 26.2% by value, April 2021–March 2024. Not a 2026 observation.
2. **NPCI primary, stale accessible snapshot:** [UPI ecosystem P2P/P2M page](https://www.npci.org.in/what-we-do/upi/upi-ecosystem-statistics) exposes Aug 2025 merchant transactions 12,705.16 million and value ₹7,23,797.42 crore. The web crawler did **not** expose a September 2026 P2P/P2M breakdown despite NPCI's total-network monthly dataset being current.
3. **India Dispatch independently maintained NPCI-attributed series:** [September 2026](https://data.indiadispatch.com/payments) shows P2M **63.3% of network count** and **30.2% of network value**, with average merchant ticket ₹582. A data compilation is not a directly fetched NPCI line-item return.
4. **Indiagraphs attributed compiled P2M-value series:** [August 2026 merchant transaction value](https://indiagraphs.com/data/india-upi-p2p-vs-p2m-transactions/p2m-transaction-value) is **₹8,95,320.68 crore**. The downloadable raw dataset is behind licensed access, and the provider's separate volume page presented a confusing value-as-volume label, so it was **not** used for merchant count.

**Important:** the above secondary data products may share NPCI as the same underlying source, so apparent agreement is triangulation and an arithmetic cross-check, **not independent primary evidence**.

## Replicable fee arithmetic

Use the rounded share from Moneycontrol and merchant value from Indiagraphs for a **single August 2026 period**:

- Total August P2M value **₹8,95,320.68 crore**.
- Ticket value above ₹2,000 approximately **67% × ₹8,95,320.68 = ₹5,99,864.86 crore**.
- Theoretical nominal **0.40% on the entire high-ticket amount, uncapped: ₹2,399.46 crore/month**.
- Conditional **0.25% realised effective rate: ₹1,499.66 crore/month**, 12× annualisation **₹17,995.95 crore**.
- Conditional baseline for site's slider at **50% eligible share × 0.25% effective fee: ₹749.83 crore/month**, 12× **₹8,997.97 crore**, with neither parameter empirically verified.

The second calculation approximates the [Das–Das study's reported ₹1,500 crore/month and ₹18,000 crore/year model](https://www.etnownews.com/news/upi-mdr-may-burden-costs-on-consumers-flags-iit-bombay-report-seeks-framework-tweak-before-implementation-article-156320435). It confirms arithmetic, **not** the actual tax base, bank revenue, transaction-level cap treatment, the effective-rate assumption or present collections.

For a defensible collection estimate, define **one row per payment**, including:
`period, transaction_id_pseudonym, amount, P2P_or_P2M, funding_rail, merchant_id_pseudonym, P2PM_qualification, MCC, industry_program_flag, refund_flag, cap_rule, nominal_mdr, applicable_GST, fund_contribution, issuing/acquiring/PSP/app_distribution`.

Apply the legal rate to each eligible transaction and **sum fees after caps and flat categories**. Aggregated merchant value × universal rate is not a substitute. Do not request personal bank or customer-identifying information; only anonymised aggregated or de-identified records.

## False-positive judicial document

An authentic [Supreme Court 16 February 2026 one-page order](https://api.sci.gov.in/supremecourt/2026/5777/5777_2026_1_8_68773_Order_16-Feb-2026.pdf) concerns **ANJAN DATTA, W.P.(C) 152/2026, with AOR Ashutosh Dubey**. It merely orders tagging with W.P.(C) 101/2026. Because the MDR notifications were issued in **September 2026**, this document is **not** the requested signed September 28 UPI MDR proceeding despite overlapping names. Court coverage of the 28 September hearing is consistent, but its signed ROP must still be retrieved from the correct official docket.

## What remained unresolved on 15 October

- Full original academic paper was indexed at [IIT Bombay-hosted PDF](https://www.math.iitb.ac.in/~ashish/workshop/MDR_on_UPI_Oct11.pdf), yet both direct fetch and container download failed. This was **not** a line-by-line primary academic review.
- NPCI-hosted authentic four-page OC-237 and its capital-market fee allocation.
- True eligible bank-funded P2M high-ticket share, P2PM exemption within >₹2k ticket bucket, MCC distribution and caps.
- Actual cost accounts and measured retailer pass-through; no observed impact of a fee not yet activated.
- Correct 28 September Supreme Court signed proceeding and subsequent court filings.
- Official post-Diwali start date.

**Conclusion:** The 96%-by-count exemption does not imply 96%-by-value exemption. Ticket-size studies permit a transparent scenario, but only full merchant-level classifications permit an authentic MDR revenue projection.
