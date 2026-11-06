# The Interest Rate Roller Coaster

Private development notes — keep public-facing game free of edition dates and internal project numbers. The repository folder number is only a navigation path.

## What this game is

A self-contained, fictional five-room financial science museum. Players shift a modeled reference short rate, alter curve slope and credit spreads, then discover how the same financial environment affects fixed-income valuations, commercial property, municipal refinancing, floating-rate debt and interest-rate hedges. A three-year scenario connects the outcomes in one city treasury.

**Important:** This is an educational model, **not** an investment product, a real market dataset, a central bank simulator, or investment advice. Rates, earnings, revenues, spreads, default and access assumptions are illustrative. The project runs in the browser; no dependencies, server calls, wallets, accounts or user data transmission.

## How to play

1. Use the rate dial, curve-shape dropdown and credit-condition dropdown in **Move the Market**. The graph and four real-time indicators update as those inputs change.
2. **Control the Curve:** review spot rates, curve slope and an implied forward rate.
3. **Price the Bonds:** compare a fixed government bond, municipal bond, corporate bond and resetting floating-rate note. The cash-flow table displays present values; rates, credit spreads and timing affect prices.
4. **Finance the City:** choose fixed bonds, floating bonds, or project deferral; optionally apply a temporary tax surcharge. The five-year treasury reconciles operating cash, capital investment, borrowing, coupons and principal.
5. **Hedge the Risk:** choose no hedge, a pay-fixed swap or a cap for a fictional $50M floating loan. Observe annual net interest and five-year cash cost.
6. **Survive the Shock:** choose a scenario and municipal emergency response, then run the three-year stress. Results include minimum treasury liquidity, municipal coverage, property value and bond value.
7. The **Math Lab** explains the assumptions and equations without leaving the experience.

## Files

- `index.html` — semantic interface, five chapters, disclosures, and educational dialogs.
- `styles.css` — unique violet/orange/cyan kinetic exhibit design and responsive layout.
- `game.js` — pure math functions, renderers, inputs, player state and scenario engine.
- `README.md` — internal reference.
- `../images/previews/49.webp` — captured from the **actual opening game interface**, not an imagined illustration.

The `portfolio/script.js` entry is installed locally with the included installer. No changes to other project folders are needed.

## Core mathematics (all rates internally in decimals)

### Spot curve

For maturity `t` in years, define:

`z(t) = rate / 100 + slope_parameter × (1 − exp(−t / 4.5))`.

Shape coefficients: normal `+0.006`, flat `0`, inverted `−0.024`, steep `+0.022`. This is a **constructed spot curve**, not fitted to actual market bonds. Reference is the 4% normal curve. The graphic depicts selected annual spots at 1, 2, 3, 5, 7, 10 and 15 years. The user-facing dial is a modeled market reference, not a literal central-bank rate or a prediction of the yield curve.

`DF(t) = (1+z(t)+issuer_credit_spread)^(-t)`.

For a forward rate between year 5 and year 10: `f_5,10 = [(1+z10)^10/(1+z5)^5]^(1/5)-1`.

### Bonds

For bullet bonds: `P = Σ[(annual_coupon + principal_paid_if_matured) × DF(t)]`. $100 face values, annual coupons, full maturity principal. Government 10Y/4.5%, municipal 8Y/5.5%, corporate 6Y/6.25%.

Municipal credit spread: 1.20 pp base, +1.80 pp under stress; corporate: 2.60 pp base +2.50 pp stress. Government spread is zero. These are **assumed spreads** for demonstrating credit-rate separation.

FRN 5Y: next coupon locked at 4.80%; subsequent coupon period t equals modeled 1-year forward rate from t−1 to t plus 0.80 pp. Discount the cash flows using the spot curve plus 0.60 pp normal FRN spread, which adds 1.20 pp under stress. This is a simplified static forward/reset model, not a full arbitrage-free FRN valuation.

Numerical effective duration uses a ±10 basis-point **parallel shift of the entire benchmark spot curve**, including forward resets for the FRN:

`D_eff ≈ (P_- - P_+)/(2 P Δy)`; `Convexity ≈ (P_- + P_+ - 2P)/(P Δy²)`; `DV01 = P × D_eff × 0.0001`.

The finite-difference measure for the FRN is not a complete measure of basis or spread duration. True callable bonds/options, OAS and default state modeling are not included.

### Property

Office sustainable NOI baseline $7.5M/year; baseline cap rate 5.75%. Modeled cap rate changes by `0.70 × (10Y_spot_current−10Y_spot_baseline)` plus 1.50 pp in credit stress, bounded to 3–19%. No modeling of actual transactions, lease roll, taxation or building-level capex. `Value = sustainable NOI/cap_rate`. $65M floating mortgage costs `reference_rate + 1.7 pp`, with an illustrative $2M annual principal payment. `Property_DS​CR = NOI/(loan_interest + scheduled_principal)`.

The output is a *gross enterprise/property value* without automatically transferring asset appreciation into municipal cash. In the stress experiment NOI is also multiplied by a scenario factor.

### Municipal treasury

Starting unrestricted cash $16M, operating revenue $72M, operating service costs $59M. Legacy debt outstanding $120M at 4.60% fixed (simplified constant $5.52M annual interest + $2M regular principal). An additional $45M principal maturity is refinanced in year 3 at a new rate; refinancing proceeds pay that maturity, and 1% issuance fees apply. The new project costs $35M; if issued, new bond proceeds of $35M fund it and an issuance fee of $0.35M is paid. New fixed project bond interest uses the 10-year spot + 1.60 pp plus 1.70 pp in stress. The alternative floating issue uses the current reference rate + 1.30 pp, plus 1.20 pp in stress. The new fixed bond is a 10-year **bullet** and remains outstanding beyond the five-year treasury chart. No new-bond principal is repaid in the chart. A tax policy optionally adds $2.5M of annual receipts.

Annual operating margin = operating revenue − operating service expenses. Cash is reconciled as:

`closing_cash = opening_cash + operating_margin − all_debt_service − capital_expenditure + borrowing_proceeds − issuance_fees`.

Debt-service coverage = operating margin / (interest + scheduled principal). In year three the $45M balloon principal is included in *cash* debt service but excluded from *ongoing DSCR* because refinancing is assumed. A negative cash balance is an **unfunded liquidity gap**, not a legal determination of default. Refinancing availability is assumed; actual capital markets might refuse it.

### Pay-fixed swap and cap

Model floating loan $50M at `reference_rate + 1.7 pp`. Pay-fixed swap: receive current floating reference, pay a fixed illustrative **4.0%** rate established at the model's initial base reference, so net loan reference exposure is replaced with fixed + 1.7 pp. For simplicity the game uses a zero initial premium on this simplified at-market proxy. The displayed mark-to-market is a present value of constant-rate future net swap receipts over five years, *not* a live-market or arbitrage-free full-curve valuation.

Cap strike 5.50%, annual payoff $50M × max(reference − strike,0), upfront $1.1M fixed premium. Five-year comparisons assume the displayed reference rate remains unchanged for five annual periods. They are not forecasts.

### Three-year crisis scenarios

Four fixed paths for the market reference rate and separate scenario arrays for municipal revenue, operating costs and property NOI. Credit spreads can widen independently. Crisis-response actions affect municipal revenue, service costs or emergency debt; the chosen economic scenario independently reprices property and other assets. One option draws a $12M emergency note, interest-only during the three-year horizon, with an upfront fee. The $45M legacy maturity is still refinanced in Year 3.

The simulation reports cash-flow reconciliation, year-end cash, DSCR, bond price, and property valuation. Property value declines do not automatically imply cash transfers to the city. Some scenarios generate negative cash to expose the limits of simplistic financing assumptions. The model has no probabilistic forecasting or guarantee of lender participation.

## How to expand later

- Historical yield curves and calibrated forward rates with proper interpolation.
- Full duration decomposition: key-rate and spread duration, FRN discount margin, option-adjusted analysis.
- Stochastic paths and Monte Carlo rather than flat-rate illustrative hedge horizons.
- Multi-series municipal debt issues with sinking funds, revenue/GO liens, covenant tests and credible refinancing decisions.
- Property-level NOI, lease expiries, capex and independent refinancing covenants.
- Full financial statements and event-driven linked lender/city/equity outcomes.
- Save/load runs and reproducible scenario seeds (without server storage).

## Testing and local workflow

Built for GitHub Pages static hosting. No package installation required. A browser with modern JavaScript and native HTML dialog support is sufficient. JavaScript syntax and automated browser interactions checked with desktop and phone viewport layouts. Financial reconciliation checked to floating-point tolerance across the base municipal model and all four stress scenarios. **Always review locally before publishing**, then stage only `portfolio/49/`, `portfolio/images/previews/49.webp` and `portfolio/script.js`.

Remember: `portfolio/49` is an internal directory. The public game title contains no project number, development year or edition label.
