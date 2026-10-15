# Edition 05 — The MDR tax and funding-mode investigation

**Cutoff:** 15 October 2026. The 0.40% merchant fee remains deferred until a separately announced date after Diwali.

## 1. What exactly is subject to GST?

The [Ministry of Finance's April 2025 denial](https://www.pib.gov.in/PressReleasePage.aspx?PRID=2122747) rejected claims of a new 18% GST on UPI transferred value, not GST on an eventual payment-processing fee. Its original text acknowledges fees such as MDR can attract GST. The [September 22, 2026 NPCI response quoted by Indian Express](https://indianexpress.com/article/business/npci-clarifies-18-percent-gst-on-upi-payments-over-2000-mdr-merchant-impact-10889118/) gives ₹40 MDR plus ₹7.20 GST on a standard eligible ₹10,000 bank-account-funded payment.

It would be incorrect to calculate 18% of ₹10,000 as a new tax for paying through UPI. Under the proposed standard policy, the full modeled merchant deduction, if charged, is ₹47.20. If eligible GST input credit is claimed in full, modeled economic fee cost is ₹40, excluding compliance and liquidity costs.

## 2. Why the tax incidence is not identical for all merchants

The [CBIC input-tax-credit rules](https://cbic-gst.gov.in/input-tax-credit-rules.html) require GST registration and legally adequate records for an ITC claim. The **≤₹1 lakh/month inward UPI** small-merchant rule is a UPI P2PM *payment classification*, not a criterion for GST registration. The economy can contain an MDR-eligible merchant who cannot reclaim the GST component, including an eligible unregistered business with different turnover and tax conditions.

NPCI's reassurance that GST on MDR is creditable describes a genuine possibility for eligible registered businesses. It cannot establish that the tax is a null cost for every MDR-paying merchant. Even registered persons may face invoice-matching, taxable/exempt output mix and other restrictions; tax registration alone does not automatically assure full ITC.

## 3. A single QR does not mean one fee regime

[Google Pay for Business merchant help](https://support.google.com/pay-offline-merchants/answer/13591970?hl=en) explicitly describes MDR already charged on UPI payments from **RuPay credit cards, credit lines and wallets**, with product-specific merchant-acceptance arrangements. [NPCI's RuPay credit card on UPI overview](https://www.npci.org.in/product/rupay/credit-card-on-upi) distinguishes credit-funded merchant purchases and disallows P2P/P2PM payments on that product.

| Underlying source of funds | Status or rule |
|---|---|
| Direct bank UPI P2P | Free, independently of transfer size |
| Direct bank UPI merchant ≤₹2,000 | Free under the proposed framework |
| Eligible P2PM ≤₹1 lakh incoming UPI monthly | Separate zero-MDR exception |
| Standard bank UPI P2M >₹2,000 | Proposed 0.40%, capped ₹300; **deferred** |
| RuPay credit card on UPI | Preexisting separate credit-product MDR |
| Credit line or wallet | Existing individual programme terms |
| Mandates / AutoPay | New ordinary-ticket MDR excludes mandate pricing; check existing rules |

Google describes a **₹20 lakh annual turnover** condition for some credit-linked fees. The new P2PM exemption refers to **₹1 lakh incoming UPI per month**. The two are different tests; do not calculate one from the other.

## 4. Dated Google Pay guidance and opt-out risk

The [currently accessible Google Pay settlement help article](https://support.google.com/pay-offline-merchants/answer/9846840?hl=en) includes a banner recognising NPCI's **October 13 deferral** to after Diwali, exact date still to be notified. It says merchants who previously opted out of higher-value UPI receipts may need to opt out again at actual commencement. This is an app-provider notice, not a circular imposing the same step on other banks or apps.

A separate [indexed Google merchant MDR guide](https://support.google.com/pay-offline-merchants/answer/18716009?hl=en) contains the obsolete October 15 start date in search results and transaction-level illustrations. The direct URL returned **404** on inspection. Do not treat this as active live instructions. Current Google banner and [signed Paytm October 13 disclosure](https://paytm.com/document/ir/stock-exchange-submissions/fy2026-27/oct/Disclosure_Reg_30_LODR_13_October_2026.pdf) support the later effective date.

## 5. Open data and implementation questions

1. Number and transaction value of MDR-eligible *GST-unregistered* merchants, by sector and invoice category.
2. Actual tax-invoice generation and GSTIN validation rules for acquirers and aggregator platforms.
3. Whether delayed implementation causes preselected opt-out or merchant MCC assignment to reset, and how providers notify customers.
4. Distinct volumes and merchant tariff shares for bank-account, credit card, credit-line and wallet-funded payments.
5. Separate registration and tax treatment for merchants selling exempt goods, receiving cross-border payments or using special tax schemes.
6. Authenticated original NPCI OC-237, any later amendments, and post-Diwali start notice.
7. Full Das–Das paper and cost-benchmark calculations; research paper retrieval still unsuccessful.

**Finding:** GST on MDR is a cost incidence question distinct from a tax on transaction value. The same UPI user interface hosts multiple payment products with separate merchant economics. No MDR revenue is presumed to have been collected from the delayed 2026 bank-funded programme as of this cutoff.
