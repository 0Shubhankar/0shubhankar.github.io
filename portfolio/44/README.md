# The Developer's Dilemma

An original, standalone, fictional real-estate development strategy game for a static portfolio. The public website does not show the internal portfolio sequence number.

## Play

Open `index.html` through a local HTTP server. Buy plots, choose development type (apartment/office/mixed use), choose construction borrowing (45%, 65%, or 80%), advance years, refinance or sell properties. Three difficulty settings and ten simulated annual turns. All computations are local browser JavaScript; no data leaves your machine.

## Visual identity

This game intentionally looks different from the earlier municipal-finance games: lavender city-planning board, hard black outlines, fluorescent yellow labels, bright orange highlights, expressive oversized sans-serif typography, and a flat stylized interactive city grid. No stock artwork and no external game library. Optional fonts load from Google Fonts; local fallback works offline.

## Core accounting and math (fictional $ millions)

- Land acquisition: cash decreases by price; the parcel becomes an owned land asset at cost.
- Project underwriting: construction budget, leverage (loan / construction cost), projected stabilized NOI, modeled capitalization value, and first-stage cash requirement. The player must own a plot first.
- Construction: each annual turn incurs `base construction budget / construction years × construction-cost multiplier`. The bank finances the selected leverage percentage of *that year's* actual spending. The remaining construction spending is paid from unrestricted corporate cash. If projected available cash is insufficient, the construction stage pauses (no spending or loan draw).
- Loans: construction draws are debt proceeds and are **not** operating revenue. Interest on end-of-stage drawings begins the following year. Once opened, an operating property's loan amortizes annually over 10 years; refinancing sets the remaining term to 8 years. Rates are fixed at loan origination, even when macro rates shift.
- Rental cash flow: property-specific stabilized annual NOI × neighborhood demand × citywide demand × property shock × 1.8% annual post-completion growth. NOI is already **net** of simplified property operating costs; it is before interest, scheduled principal, and depreciation.
- Values: stabilized NOI / a scenario-adjusted capitalization rate. Work-in-progress at a market-adjusted invested-cost proxy. These are *estimated values*, not liquid cash or GAAP book values.
- Cash: opening cash + NOI + construction debt proceeds − construction spending − loan interest − principal repayment. If negative, a punitive 14.5%-interest rescue note automatically covers the negative cash balance. Land purchases, refinancing and disposals hit cash immediately and are captured in the current cash balance and transaction log (not inside the annual cash-flow display).
- Equity estimate: cash + estimated property values − all property and rescue liabilities.
- Annual simplified profit: NOI − interest − straight-line building depreciation (30 years). This is not a complete income statement.
- Selling: 3% selling friction on open properties, 20% distressed discount on active construction, repayment of property debt, remaining proceeds or loss to cash. If loss exceeds corporate cash, a rescue note covers the shortfall.
- Refinancing: when a property is operating, new mortgage limited to 65% of modeled market value; existing debt repaid; net proceeds after 1.8% financing fee increase cash. This generates no operating profit.

## Key limitations

This is an illustrative educational game, **not financial advice**. It does not model full lender covenant enforcement, tax accounting, intercreditor waterfalls, title/permit litigation, real regulatory constraints, complete financial statements, real-world property values, cash on asset sale taxes, or true stochastic Monte Carlo risk. Offices have a specific recession occupancy shock; demand and rate events follow the same fixed event schedule (modified by difficulty). No investor return claims should be inferred from simulated outcomes.

## Local installation and publishing

Place this folder under `portfolio/44/`. The supplied `images/previews/44.webp` is a *real screenshot of the locally rendered game* (not generated unrelated artwork). Add a gallery entry in `portfolio/script.js` with titleLink `44/index.html` and image `images/previews/44.webp`. Preview locally and only commit after approval. Do not add the internal number or dates to any user-facing title, header or labels.
