# Follow the Money! — Internal build notes

A **fictional, interactive municipal-finance detective game** built as a static HTML/CSS/JavaScript site. It uses an evidence-board interface instead of a conventional financial dashboard. This internal file can be revised over time; the public page intentionally contains **no edition/year label or internal project number**.

## How to play

1. Open the case file on the landing page.
2. Read the current assignment and inspect the relevant records on the evidence wall.
3. Pin at least two independent supporting records for each chapter (three for the final verdict).
4. Use the money trail, transaction register, Civic Chain verifier, and investigation notebook.
5. Enter numerical answers and defend a conclusion. Wrong answers can be retried.
6. Solve seven connected cases. A supported final verdict unlocks a downloadable text report.

Your progress, document pins, and completed cases are kept **only in this browser's localStorage**. Reset from the footer. There is no login, server-side data collection, wallet, real blockchain, or real payment.

## Seven cases

| Case | Core mechanic | Actual financial concept |
| --- | --- | --- |
| The Vanishing $12 Million | Reconcile a bond-proceeds cash trail | Restricted trustee accounts and cash-flow classification |
| The Bond That Paid for Everything | Calculate coupon + debt-service coverage | Coupon, DSCR, borrowing vs operating revenue |
| The Ledger Never Lies? | Independently verify two hash-linked copies | SHA-256, record integrity, authorization vs real-world truth |
| The Contractor Who Built Nothing? | Compare a certified milestone with physical evidence | Payment controls, smart-contract oracles, audit evidence |
| The Interest Payment Nobody Expected | Reprice a fixed-rate bond | Discounting, market yield, price/yield relationship |
| The Digital Money Trail | Compare digital authorization to bank settlement | Settlement finality and financial reconciliation |
| The Final Audit | Select and support three findings | Evidence standards and forensic synthesis |

## Exact fictional financial model

This is a **closed, deterministic case dataset** rather than a real municipality. All values in USD.

### Bond and project cash

- Bond face proceeds = **$100m** received into the project structure; this creates a debt liability, **not operating tax revenue**.
- Contractor cash payments = **$36m + $24m + $20m + $8m = $88m**.
- Restricted balances after internal transfers = **$8m construction contingency + $4m debt-service reserve = $12m**.
- Reconciliation: **$100m proceeds − $88m paid = $12m retained**. Internal transfers do not change the aggregate balance.
- There is a separate **$3.2m digital payment instruction** but **$0 additional bank-settled outflow**, so do **not** subtract it from the reconciled $12m.
- The settled **$8m Alder** construction payment was based on an *80% certified milestone* versus *55% observed completion*, a **25-percentage-point discrepancy**. This raises an evidentiary concern, not definitive proof of a crime.

### Bonds

- Fixed coupon = 5.20% on $100m face value ⇒ **$5.20m annual coupon**.
- Annual recurring cash available for debt service = $8.10m, scheduled principal = $0 until bullet maturity ⇒ **DSCR ≈ 8.1 / 5.2 = 1.56×** under the simple game definition. Other real-world definitions or reserve treatments could differ.
- Six payments remain; indicative annual market yield = 7.10%; annual coupon on $100 face = $5.20; final redemption = $100.
- Bond price per $100 face:

  `P = sum(t=1..6) [5.20 / (1.071)^t] + 100 / (1.071)^6 ≈ 90.971465`.

- Contractual coupon **does not** reprice when prevailing yields change. This simplified valuation assumes no default or optionality and annual discounting.

### Blockchain-inspired evidence

- Four simulated blocks, each storing `height`, `previous hash`, `payload`, and `SHA-256 hash`.
- The digest is `SHA256(`${height}|${prev}|${payload}`)` with UTF-8 encoding. Actual precomputed digests live in `data.js`.
- The official copy is internally hash-consistent. The unsigned export changes a $8m payment to $6m **without recomputing the block hash**, so verification fails.
- The browser uses Web Crypto SHA-256 when available, otherwise a local standards-based SHA-256 JavaScript implementation; no external crypto dependency.
- This is **not a deployed blockchain**, and has **no real validators, network consensus, wallet, smart-contract execution, digital signatures, or cash settlement**. A hash comparison checks record integrity only relative to the reference chain supplied by this fictional case. It does *not* validate construction progress or the authenticity of institutional assertions.

## Files

- `index.html` — landing story, evidence-board layout, dialogs, application shell.
- `styles.css` — newspaper/graphic-novel styling, typography, responsive layout.
- `data.js` — fictional source documents, transaction records, case questions, blockchain commitments.
- `game.js` — navigation, record inspection/pinning, puzzle grading, SHA-256 verification, notebook, saved progress, downloadable report.
- `../images/previews/47.webp` — **actual browser screenshot crop**, optimized for the gallery.

External network requests are not required for core functionality. Google Fonts are an optional typographic enhancement; fallback system fonts are provided.

## Suggested future iterations

- Expand into branching investigative leads, contradictory witnesses, and more nuanced evidence standards.
- Add an editable reconciliation worksheet and a general ledger that demonstrates every debit/credit and subaccount posting.
- Add access-control simulations: multi-signature requirements, validator trust assumptions, privilege revocation, and an independent audit-node challenge.
- Provide alternative institutional workflows for custodial vs on-chain settlement without equating them.
- Add full municipal fund reporting, restricted-resource accounting, and a transparent debt maturity schedule.
- Introduce selectable difficulty and an optional advanced forensic mode; keep the default flow accessible.

## Development / QA

- JavaScript syntax checked for both `data.js` and `game.js`.
- Automated browser simulation completed all seven cases, including document pinning and final report generation.
- Official SHA-256 chain passed validation and tampered copy failed, including fallback hashing without a secure-context API.
- Verified no browser JavaScript exceptions, no `NaN` in displayed values, and no horizontal overflow at 390px viewport in the browser test environment.
- User should still review locally in their actual browser before any public commit.

## Local preview / publishing

Place the game at `portfolio/47/` in the repository and the thumbnail at `portfolio/images/previews/47.webp`. Serve the repository root (e.g. `python -m http.server 8001`). Open `/portfolio/47/` for the game and `/portfolio/` to inspect the **local-only** gallery card. Git commit and push should only occur after explicit approval.
