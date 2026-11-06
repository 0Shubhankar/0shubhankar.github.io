# The $100 Million Mistake! — local portfolio prototype

An **illustrative, browser-only, ten-year infrastructure investment game**. All entities, returns, scenarios, model coefficients and market events are invented for education and entertainment. No network service, asset purchase, wallet or external data is required. The Google Fonts stylesheet is the only optional third-party request; system fonts fall back if offline.

## Run

Copy this directory as `portfolio/42/` in the local website repository, then start the existing local static server from the repo root (for example `python -m http.server 8001`) and visit `http://127.0.0.1:8001/portfolio/42/`.

Do **not** link to the public gallery or push until visual and gameplay QA are complete.

## Gameplay

Select equity allocations across toll road, water utility, retail mall, solar plant and municipal bonds, choose a common LTV on the operating assets, then set a macro regime, starting interest rate, inflation, discount-rate premium and event severity. Commit at most $100M of **equity**. Remaining capital is initial cash. Each year a scripted shock occurs and the player chooses to hold cash, reinvest in the assets, or hedge the year's yield shock. There are 10 rounds.

## Calculation rules and disclosures

All numerical values are in **millions of U.S. dollars**, with roundings only for display.

- Initial investment in each operating asset is **equity ticket / (1 − loan-to-value ratio)** of enterprise asset acquisition value. Initial fixed project debt = enterprise acquisition value − equity ticket. Municipal bond holdings use no leverage.
- Operating asset revenue at year `t` = `initial_enterprise_value × initial_revenue_ratio × (1 + asset_growth + macro_growth + 0.65 × inflation)^t × cumulative_asset_shock_factor × reinvestment_boost × macro_revenue_factor`. Growth coefficients, expense ratios, taxes and other parameters are illustrative.
- Operating expenses = `initial_revenue × initial_expense_ratio × (1 + inflation)^t × macro_revenue_factor^0.3`. Maintenance expenditure = `initial_enterprise_value × asset_maintenance_ratio × (1 + 0.65 × inflation)^t`. Cash tax = 15% of max(0, revenue − operating expenses − maintenance). These are project-level approximate **cash taxes**, not GAAP/IFRS tax or depreciation schedules.
- **Unlevered project free cash flow** = revenue − operating expenses − maintenance − cash tax. **Cash available for debt service** is defined to equal that project free cash flow for the simplified model. Annual fixed-rate loan interest = opening loan balance × locked coupon; annual principal = origination balance / 10. **DSCR** = cash available for debt service / (interest + scheduled principal). Reinvestment policy adds discretionary current cash capital spending and increases future revenues by 2.3%; it does not capitalize into book value separately.
- **DCF project EV** at a given year = sum of projected unlevered CF from next year through year 10 discounted by `current_rate + premium + sector_risk_spread`, plus **year-10 terminal CF × sector multiple** discounted to the current year. **Equity value** = max(0, EV − remaining project debt). At year 10 valuation is terminal CF × multiple (exit value); terminal multiples are illustrative and uncertain. Initial projected enterprise value is calibrated to initial acquisition price by holding a fixed value scale computed at entry, so year-0 asset equity value equals paid-in equity. This fixed scale is preserved as rates and operating assumptions change; this is a mark-to-model estimate, not a tradeable price.
- Bond stake: fixed 10-year, annual coupon `ticket × (initial base rate + 1.8 percentage points)` and repayment of ticket at year 10. For years 0–9, **market bond price** = PV of remaining coupons and par discounted at `current base rate + 1.8 percentage points`. Its **modified duration proxy** uses central finite differences: `(P(y−0.0001) − P(y+0.0001)) / (2 × 0.0001 × P(y))`. In year 10, principal is recorded as cash redemption and bond position is excluded from assets after redemption.
- **Annual cash reconciliation:** closing cash = opening cash + project CF + coupons + bond redemption − project interest − project principal − event repair cost − discretionary policy cost − liquidity facility interest + facility draw − facility repayment. A 12% borrowing facility covers cash shortfalls, is a liability, and repays automatically from cash above $8M; it is distinct from project debt.
- **NAV** = closing cash + project equity market values + outstanding bond market values − liquidity facility. Starting NAV is $100M as a **book cost benchmark** for initial allocations. Initial project DCF values are scaled to acquisition prices at entry, keeping year-0 NAV equal to $100M in the model. Later values use that fixed scale and respond to forecast and rate changes.
- **Annualized NAV return** = `(current NAV / $100M)^(1 / elapsed years) − 1`. This is a mark-to-model performance proxy, **not** investor money-weighted IRR (there are no distributions outside the portfolio); this version intentionally does not claim otherwise.
- Concentration = maximum positive equity fair value / total positive asset fair value. Leverage = outstanding project debt / (asset equity market value + project debt), simplified and excluding the cash balance.
- Bad scenarios compound. Controls are illustrative *inputs*, not calibrated forecasts. Rate hedge only changes the current year's valuation rate, not the locked rate on project debt. Shock severity scales specified rates, one-off direct costs and asset shocks.

## Known limitations (first prototype)

- Not a complete general-ledger or multi-statement financial model; no balance sheet, depreciation, noncash taxes, credit-rating system or true fund distributions.
- Bond redemption is moved into cash at end year 10; project exit values are represented as terminal NAV, not explicit cash sale proceeds. Terminal NAV thus represents exit-equivalent value at the horizon.
- Cost/valuation inputs are invented, not sourced market rates. Initial DCF marks are price-calibrated; this is a modeling convention, not an independently observed fair market price. Scenarios are deterministic, not Monte Carlo.
- No user-controlled trading after initial commitment, asset-specific leverage structures, financing covenants, credit default or automatic project bankruptcy in this version. The facility prevents negative cash but can create substantial liabilities.
- No real-world municipal bond pricing, suitability or advice. Review accounting and economics before describing results as investable.

## Files
- `index.html`: markup and accessibility labels.
- `styles.css`: responsive dark editorial layout.
- `game.js`: deterministic game state, financial model, charts and events.

Keep this folder unpublished until the game is tested locally and explicitly approved for commit.
