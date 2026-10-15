# The UPI MDR Story — An Independent Analysis

Independent public-interest investigation into India's Unified Payments Interface merchant discount rate: policy history, legal framework, merchant costs, subsidy, sectoral exceptions, and alternative funding models.

**Edition:** 15 October 2026. Not affiliated with RBI, NPCI, the Ministry of Finance or cited researchers.

## GitHub Pages

**Intended website:** https://ashish-bhatia.github.io/upi-mdr-analysis/

The site is fully implemented as static HTML, CSS and JavaScript. The Pages workflow deploys after you activate GitHub Pages:

1. Open [Settings → Pages](https://github.com/Ashish-Bhatia/upi-mdr-analysis/settings/pages).
2. Choose **Source: GitHub Actions** under Build and deployment.
3. Review [Actions](https://github.com/Ashish-Bhatia/upi-mdr-analysis/actions). If needed run **Publish UPI MDR investigation** manually.
4. Verify a successful run and then open the intended website URL.

**Do not treat this URL as live until activation and a successful deployment are verified.** The connected GitHub tool supports editing repository files but has no Pages administration action.

## Features

- The Story: editorial narrative and competing arguments.
- Timeline: source-linked chronology and official-versus-reported classifications.
- The Numbers: NPCI Apr–Sep 2026 network volumes and interpretation safeguards.
- Cost Lab: functioning proposed-fee calculator with P2P/P2M/P2PM and sector exceptions, compared against a hypothetical alternative.
- Claim Tracker: search, status filters, claimant records and clickable sources.
- Evidence Room: primary documents, reported statements and unretrieved originals.
- Methodology: research protocol and outstanding audit questions.

## Repository structure

- [Research and evidence ledger](research/ledger.md)
- [Claim and source dataset](data.js)
- [Website](index.html), [visual design](styles.css), [interactions](app.js)
- [GitHub Pages deployment](.github/workflows/pages.yml)

No external JavaScript packages, backend, analytics, cookies or API credentials are required. The site uses relative paths, supporting GitHub Pages project subpaths. External font loading is optional and falls back to system fonts.

## Update protocol

1. Retrieve dated original regulations, circulars, pleadings, statements and datasets.
2. Record provenance and limits in research/ledger.md. Distinguish issuer statements from demonstrated outcomes.
3. Add or revise claim items, timelines and sources in data.js. Each contested claim retains claimant, status and citations.
4. When a fee or effective date changes, update index.html and the calculator rules in app.js.
5. Commit to main. The workflow republishes site changes automatically once Pages is active.
6. Document material corrections. Do not overwrite uncertain observations with unsupported declarations.

## Critical unresolved items

- The original NPCI Circular OC-237/2026–27, dated 15 September 2026.
- The 14 September 2026 Gazette notification and final enacted Section 10A wording.
- Original NPCI 13 October deferral notice and subsequent implementation notification.
- Merchant category and ticket-size dataset needed to validate the reported 96% exempt transactions and revenue forecasts.
- Original full-text researchers' paper, evidence on bank income and audited MDR cost allocations.
- Original Supreme Court filing/case number and any signed judicial order.

As of this edition, October 15 implementation was **postponed**, per Reuters quoting NPCI on October 13. The next effective date is **unverified** here. No actual merchant charges are inferred.

## Contribute a correction

[Open a GitHub issue](https://github.com/Ashish-Bhatia/upi-mdr-analysis/issues) and provide the document URL, issuer, dated quote or page reference and requested correction. Do not upload private banking or personal transaction details.

## Run locally

Serve the repository as static files with: python3 -m http.server 8000

Browse to http://localhost:8000. GitHub Pages deploys the same client-side site. The site is independent analysis, not legal or financial advice.
