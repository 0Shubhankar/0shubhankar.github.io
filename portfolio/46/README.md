# The Property Machine

An independent, self-contained browser strategy game about the financial system behind a fictional city's existing property market. **Public title contains no internal project number or publication year.** All assets are fictional; nothing is financial advice.

## Running

Serve the repository root with `python -m http.server 8001`, then open `/portfolio/46/`. Or open `index.html` directly: no third-party libraries, build system, API keys or network requests are required. The game keeps an optional local save in the visitor's own browser (`localStorage`). Reset clears that save.

## What's playable

1. **Years 1–3 — Landlord:** Select one of twelve properties, compare asking and income values, submit a bid, choose all-cash / senior fixed / senior floating / senior+mezzanine finance. Seller may reject discounted offers.
2. **Years 4–7 — Deal maker:** Retain tenants, make capital improvements, refinance, sell, monitor amortization and 5-/7-year loan balloons.
3. **Years 8–11 — Fund manager:** Raise $3M of outside investor commitments into a **separate fund**, acquire properties on its account, collect management fees, distribute fund cash through an illustrative capital / preference / carry waterfall.
4. **Years 12–15 — Financial engineer:** Purchase a time-limited rate cap on a floating secured loan; purchase or sell senior/junior fictional mortgage-linked notes.
5. **Years 16–20 — Reckoning:** Keep liquidity during credit tightening, face stressed refinancing, possible emergency credit borrowing, and distressed property disposals.

## Main assumptions and formulas

**Units:** USD millions, annual time steps. Decimals such as `.065` are 6.5% rates.

- Collected rent = potential rent × market rent index × property-specific rental improvements × sector/district factor × physical-condition factor × (1 − effective vacancy).
- Operating expense = collected rent × sector operating cost ratio × unemployment adjustment + fixed property cost. `NOI = collected rent − operating expense` (does not deduct financing, corporate overhead or capital expenditure).
- Marked property value = `NOI / cap rate`, where cap rate adjusts for property type, employment, credit and the macro cycle. Seller asking prices reprice separately and may differ from estimated value.
- Five-year investment X-ray: unlevered IRR, levered equity IRR and discounted equity NPV at a selectable 10–20% hurdle. Forecast assumes 2% annual NOI growth, recurring maintenance, amortizing mortgage payments, and a five-year exit at an exit cap rate 0.5 percentage point higher than the entry market cap. Bids, financing and the exit assumptions affect returns.
- Concentration/stress memo: sector share of company directly held properties and valuation decline if cap rates increase by two percentage points without a change in NOI.
- Annual senior mortgage service = `P × r / (1 − (1 + r)^(-n))` on remaining principal, using an illustrative 20-year amortization. Senior debt balloons after year 7. Mezzanine debt is interest-only and balloons after year 5.
- Underwriting: senior LTV is subject to a credit-cycle-dependent cap. Property NOI / scheduled senior+mezz debt service must be at least 1.13×. Fund and company cash are separately tested before any equity contribution.
- Buy transaction: company/fund cash falls by the equity contribution **plus transaction/origination costs**. Secured debt rises separately. Financing proceeds are not counted as operating income or net wealth creation.
- Sale transaction: net cash proceeds = market-based sale price − brokerage/transaction costs − outstanding secured debt. Distressed sales receive a larger discount.
- Rate caps: upfront premium = 1.8% of outstanding floating senior loan balance. Simplified four-year floating-rate limit = prevailing contract rate at purchase + 1.4 percentage points; no derivative fair-value accounting.
- Investor fund: $3M outside paid-in capital is tracked **only** in fund cash; annual $0.03M management fee is an expense to the fund and income to the manager. LP preference is modeled as 8% on unpaid contributed capital. Cash distribution: return capital, pay accrued preference, then split remaining profit 80% LP / 20% GP. This is a simplified distribution waterfall, not a legal LPA.
- Mortgage note credit losses: computed from fictional employment and lender-credit metrics, affecting junior and senior claims differently. Principal prepayments and coupons are shown as separate cash movements. The notes reference **external illustrative loans**, not mortgages owed on properties you own.
- Cash reconciliation: opening company cash + recorded cash inflows − recorded cash outflows = closing cash; same check for separate fund cash. Each closed year stores the reconciliation difference.
- Management-company marked net worth = company cash + fair-value properties it directly owns − company secured mortgages + marked mortgage securities − emergency credit. Fund assets and debts are excluded. These are marked estimates, **not** audited GAAP financial statements.

## Known deliberate simplifications

- Yearly rather than monthly periods; no real property data, zoning, title searches or tenant-level leases.
- Construction/development is not modeled: this game is about *existing* property investment and financing (unlike the earlier Developer's Dilemma).
- Credit and macro events are scripted illustrative scenarios, not calibrated historical forecasts. Asking-price and appraisal models are heuristic and stylized.
- Loan underwriting and mortgage note waterfall are pedagogical simplifications, not lender- or securitization-grade valuation systems.
- Fund return waterfall approximates a whole-fund structure; it omits complex GP catch-up, taxes, clawbacks, separate class waterfalls and subscription credit facilities.
- No actual mortgage securitization issuance, swaps, loan servicing, accounting standards, third-party credit ratings or regulator-approved investment products.
- Asset prices and yearly market events are not live; the game has **no back end**. Mobile view uses responsive CSS.

## Files

- `index.html`: semantic page structure, chapter labels, screens and player controls.
- `styles.css`: bespoke vintage property boardroom design; offline-friendly system font stacks.
- `game.js`: game state, investment mechanics, cash reconciliation, scenario engine, rendering and browser save.
- `../images/previews/46.webp`: gallery preview obtained from a real screenshot of the game interface.

## Iteration backlog

- More nuanced fixed-income tranches and true distribution waterfall with collateral-level defaults and recoveries.
- Monthly property rent rolls, tenant expirations, lease indexation and taxes.
- Full three-statement property-company accounting rather than mark-to-market NAV.
- Fund-specific performance fees with hurdle, catch-up, clawbacks, and realized investor IRR.
- Competing bidders, lender balance sheets, hedging mark-to-market, more varied geographic location effects.
- Model unit testing, accessibility audit, full keyboard and mobile gamepad support.

## Publishing workflow

Install locally under `portfolio/46/`; add the preview `portfolio/images/previews/46.webp`; update `portfolio/script.js` for the gallery card. Check local `http://127.0.0.1:8001/portfolio/46/` and `.../portfolio/` first, and only commit/push after approval. Do not push personal files from `~/portfolio-audit`.
