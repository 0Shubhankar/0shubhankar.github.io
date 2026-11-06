# MOVE THE CITY

An original **fictional metro-planning and urban-finance simulation** for a static personal portfolio. Public-facing game has **no internal project number, edition or development year**. The local folder number is a filing convention only.

## Files

- `index.html` — public narrative, station-board layout and model explainer
- `styles.css` — self-contained transit wayfinding style; no external fonts or CSS dependencies
- `game.js` — gameplay, interactive map, scenario engine, treasury roll-forward and result renderer
- `../images/previews/48.webp` — actual game-screen screenshot for the portfolio gallery

No package manager, web API, account, backend, cryptocurrency or network connection is needed. Serve from the repository root with `python -m http.server 8001`.

## Player flow

1. **Draw**: click station circles on the schematic metro map to add/remove up to six stops. The station dossier supports moving a selected station up to 500 m west or east on the schematic. Compare elevated and underground construction.
2. **Pay**: change fare, capital grants, percentage of land uplift collected, and share of remaining capital funding financed with 30-year municipal debt.
3. **Pressure**: respond to a developer's offer, include or omit affordable-housing protections, and choose baseline, growth, remote-work or funding-shock assumptions.
4. **Results**: run a 15-year deterministic fiscal projection. Explore the annual ledger and overall public-benefit economics (30-year appraisal horizon). Replay to explore trade-offs.

Five interactive concept stops explain **Access / Value / Finance / Equity / Resilience**. Every concept shows live figures from the calculation engine.

## Financial and urban model (fictional, explicitly simplified)

### Transit demand / catchment

Six stylized districts have fabricated resident population, employment, socioeconomic share and assessed property value. Each selected stop changes a district's walking-catchment index, subject to diminishing returns for overlapping stops. Incremental residents reached and reachable jobs produce estimated new weekday rides. Fare elasticity is constant at −0.36 in the demand equation. An additive 14,000 rides per day represents *existing* ridership on the corridor for the full operating line; there are no operating receipts when no new station is selected. Forecast demand multipliers depend on scenario.

### Construction

Capital cost combines costs of chosen stations, line length, additional alignment detours, a program allowance and underground/elevated multipliers. A stress scenario can inflate overall capital expenditure. This is *not* an engineering-cost estimate.

### Funding reconciliation

All values in **USD millions**.

- Capital cost = grant + one-off captured land uplift + developer contribution + bond issuance + city capital contribution.
- Capital grants = stated share of capital costs × scenario funding multiplier.
- Estimated land uplift = district assessed values × incremental access × invented sensitivity factor × assumed market multipliers.
- **Collectible** land-value capture = chosen portion of estimated uplift, subject to a $120M cap. Remaining uplift is not treasury cash.
- Bond issuance = chosen financed share of the balance after grant/capture/developer payments.
- City contribution covers the remaining balance, paid at time zero. The financial model flags liquidity below zero rather than creating imaginary financing.

### Debt

The new municipal capital bond pays a level annuity on a 30-year amortization schedule. New borrowing rate = 4.9% baseline + scenario adjustment + leverage-related spreads. Each annual service payment is split into interest on outstanding principal and actual principal retirement. Remaining principal is displayed at year 15. No early redemption, issuance fees, subordinated debt or covenant enforcement is modeled.

### Agency operating forecast

Full-year fare receipts = modeled total daily rides × fare × 330 operating days / $1,000,000. A multiyear commissioning ramp scales ridership and operating expense while the network becomes operational. Dedicated recurring tax increment, computed at 1.3% of the modeled land uplift, ramps after year 3. This **recurring tax increment** is separate from the **one-off value-capture contribution** (an intentionally simplified toy model that assumes a different base/claim for the two funding channels; do not take both from the same tax assessment in reality). Agency net cash after debt = fare revenue + dedicated tax increment − operating costs − interest − scheduled principal.

### City treasury / liquidity

City capital cash after construction = assumed opening city cash ($142M) − city capital contribution. Then, each year:

`Closing municipal cash = opening cash + $28M baseline general-fund surplus + fare receipts + dedicated incremental taxes − operating costs − bond interest − scheduled principal`.

All displayed annual cash accounts reconcile to this equation (subject to rounding). The $28M baseline surplus is an **independent hypothetical city budget assumption**, not income created by the metro. A negative treasury cash balance signifies an **unfinanced gap**. No cash borrowing is silently generated. Future modeling could allocate construction payments across years rather than assume full initial funding.

### Economic benefits and distribution

Modeled incremental public economic benefits = incremental rides × 285 active travel days × 34 minutes saved per ride × an illustrative $23/hour value of time, plus $0.75 external benefits per new trip. Economic benefit-cost ratio compares the 30-year PV at a 4.5% discount rate with upfront project cost plus PV operating costs. Farebox revenue, public grants and land-value appreciation are **not counted as extra public benefits** to avoid transfers/double-counting. Land uplift is a separate distributional impact. Income-weighted coverage and a hypothetical displacement-pressure indicator form the equity score. These are not empirical relocation predictions.

### Scenarios

- **Steady city**: base assumptions
- **Growth surge**: higher demand and land values, modest cost rise and improved new-issue pricing
- **Remote-work slump**: lower demand and land values, higher borrowing rate
- **Funding shock**: significantly higher construction costs, lower grants, weaker travel demand and higher borrowing rate

Each is a **deterministic sensitivity scenario**, not a frequency-weighted or calibrated forecast. The player's inputs are not saved or uploaded.

## Intended future enhancements

Dynamic route-drawing with network topology and actual travel-time paths; agent-based household/workplace choices; zoning and community-meeting mechanics; real GIS catchments; timed construction cash draws; capitalized interest; multiple bonds and maturities; municipal fund accounting; affordability outcomes; probabilistic shocks, multiobjective Pareto comparison, full stress scenario matrix, accessibility screen-reader map alternative.

## Publishing checklist

1. Preview locally at `/portfolio/48/` and at least one phone-sized viewport.
2. Verify circles, station shift, finance sliders, scenarios and 15-year results; verify financial sources and cash reconciliation.
3. Inspect the local gallery card at `/portfolio/` and confirm `images/previews/48.webp` is linked correctly.
4. Only on explicit approval, stage `portfolio/48`, `portfolio/images/previews/48.webp` and `portfolio/script.js`; then commit and push. Other files remain untouched.
