# One Storm Away from Default

An educational, fictional, four-season municipal-finance / disaster-resilience strategy game. Static HTML, CSS and JavaScript; no network dependencies or build step. Public pages intentionally omit the internal portfolio project number, date and version.

## How to run

Open `/portfolio/45/` from a local static HTTP server. For example, start `python -m http.server 8001` at the repository root and open `http://127.0.0.1:8001/portfolio/45/`.

## Player loop

Forecast → Budget → Finance → Protect → Storm → Recover → Close the books. Each stage has a clearly labeled choice. Storm occurrences use reproducible fictional rolls so testers can compare choices across runs. All amounts are fictional USD millions unless otherwise noted.

## Financial mechanics

- Initial cash 18, legacy GO principal 210 at a 5% annual coupon, legacy principal repayment 4 per year. Operating revenue 64, recurring service costs 43.
- Budget choices alter recurring taxable revenue (+3, 0, −2) and services (+3, 0, −2); these changes persist.
- Resilience bond proceeds: 0–25 in 5 increments, 15-year bullet principal beyond the four-year game. Coupon fixed at issuance according to a fictional internal fiscal-risk score, with 1.5% issuance fees. Emergency notes: 0–15 in 5 increments, 9% interest only, 0.8% fee, interest-only over the game. New debt has half-year coupon accrual in the issue year. Each dollar of borrowed proceeds increases liabilities by one dollar; borrowing is **not** operating income.
- Protection: flood walls 0–15, drainage 0–15, shelters 0–10. Spend is capital cash outflow, not service operating expense. Resilience score and flood exposure respond to protection.
- Storm impact probability and strength change each season. Fixed rolls ensure reproducibility. Physical damage reflects severity, protection and existing repair backlog. Human displacement is modeled separately from physical repair and insurance recovery.
- Insurance: no cover, standard (1.8 annual premium, 50% of qualifying damage above 4 deductible up to 22), expanded (3.6 premium, 78% above 2 deductible up to 48). Insurance receipts are cash inflows, **not operating revenue**.
- Recovery: repair 25%, 55%, or 90% of accumulated damage, at 85%, 100%, or 120% of face repair cost, respectively. Remaining damage carries forward as backlog and impairs future revenue. Repair is a cash capital outflow.
- Cash flow: closing cash = opening cash + operating revenue − service costs − annual coupon interest − existing principal repayment − insurance premium − protection capital spending − repair capital spending + insurance payout + bond/note proceeds − issuance fees. Negative cash is explicitly a funding gap: no invented automatically-approved credit line.
- DSCR = (operating revenue − service costs) / (annual coupon interest + scheduled legacy principal). Credit letters and borrowing spreads are clearly identified as fictional, not official ratings. A score-based final ending considers fiscal and human outcomes.

## Known limitations / next iterations

No linked GAAP/municipal funds-based three-statement accounting; infrastructure expenditures and damage are not depreciated or capitalized in accrual statements. The land-use map is drawn, not GIS-based. No stochastic weather ensemble; each season uses a fixed reproducible outcome. Insurance and catastrophe-bond terms are simplified; no dedicated cat bond instrument yet. Protection resilience and fiscal risk formula are illustrative. No backend, ledger, third-party weather data, or financial transactions.

## Visual direction

Storm-monitoring command center with a light sea-glass interface, deep-ocean map, oversized condensed headings, orange operational controls and a radar motif. Distinct from the previous games.
