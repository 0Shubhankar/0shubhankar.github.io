# The Parallel Cities Experiment

## What this is

A playable, offline-capable, entirely fictional simulation of **two identical cities** whose municipal finances, infrastructure, housing, accessibility, and population diverge under different policy choices. The same 20-year economic / climate shock sequence is applied to both cities. Its purpose is **experimentation and conceptual understanding**, not actual credit analysis, policy advice, real bond issuance, or empirical predictions.

Public game title: **The Parallel Cities Experiment**. The number `50` is for its folder and internal portfolio reference only. No release date or version number is rendered on the page.

## How to play

1. Set Alderport's and Novahaven's policy choices independently. The cities start from precisely the same demographic, fiscal, and infrastructure conditions.
2. Choose taxes, public service level, capital-project priority, debt instrument, financing share and optional development levy.
3. Advance one year, five years, or the remaining 20-year horizon. Every year is simulated with a **deterministic** common external shock.
4. Inspect the cash and debt timeline, housing burden and infrastructure score, and open **Financial Microscope** to see every annual cash-flow item and the live debt register.
5. Save the current future. Rewind to an earlier year, change policies and replay the same outside events. The saved financial outcome remains available for comparison.
6. If continuing to issue large bonds for expensive projects every year pushes the city into distress, use **No new capital project**, stronger revenues, or more restrained service spending to explore different fiscal paths.

There is no single winner; fiscally strong outcomes may come with poorer services, reduced accessibility or higher housing stress.

## Important modeling choices

All monetary values are fictional, in **millions of US dollars** unless stated otherwise.

### Identical opening conditions

- Population 250,000; employment proxy 95,000 jobs.
- Opening cash reserve $32M; legacy general-obligation bond balance $180M.
- Legacy bond: fixed 4.2% coupon, 20-year straight-line annual principal amortization, first year's opening principal $180M.
- $80M approximate opening annual revenue (property tax $36M, activity tax $17M, fees $10M, transfers $17M before model adjustments); service-spending baseline is approximately $52.8M.
- Median household income $55,000; monthly reference rent $1,350; 105,000 housing units; infrastructure score 61; resilience score 38; and other urban indices identical.

### Cash reconciliation (a key invariant)

`Closing cash = opening cash + property tax + activity tax + service fees + grants - operating services - bond interest - bond principal - capital investment + new bond proceeds - issuance / onboarding fees + developer levy - storm repair expenditures + emergency notes issued`.

The model records an annual `ledger` for each city. Numerical verification checks this identity for each year to machine precision. New principal appears as financing inflow, **not** operating revenue. Construction costs appear as investment cash flows; the model does not represent a full accrual income statement.

### Issuance and debt

- Bond principal is financed at a configurable 0%, 50%, or 85% of project cost; the remainder uses the treasury cash. The issuer pays a modeled fee.
- Bonds issued at year-end have **no interest/principal service until the following simulated year**. They amortize in 12 equal annual principal installments; annual interest uses opening outstanding principal.
- Conventional: $0.73M fixed + 1.20% variable issuance fee.
- Pooled: $0.24M fixed + 0.90% variable issuance fee, modest additional ongoing program administration and a 9bp coupon premium.
- Simulated tokenized: $1.05M first issue (or $0.18M repeat issuance) + 0.45% variable fee, modest annual ledger cost and a 17bp coupon premium. **These are hypothetical assumptions, not observed savings or market yields.**
- New coupon = 4.1% base + shared scenario rate shock + modeled credit spread (related to indebtedness, reserves, emergency use, and credit-shock environment) + instrument-specific premium. Each new bond's coupon is fixed at issuance.
- If the city would have negative closing cash, a high-cost **emergency note** at 9.8% and 5-year straight-line amortization is automatically drawn for the exact funding gap and recorded transparently. In real life, access to emergency borrowing is not assured; it is a modeling simplification and the game flags financial distress.

### Economic and urban response

- Four investment types: transit, housing, resilience, water/drainage, plus **no new capital project**. Model-specific costs, accessibility gains, housing additions and resilience improvements are in `game.js` under `PROJECTS`.
- Population, employment, median income and rents evolve using explicitly simplified policy and shock response assumptions; these are **not empirically estimated elasticities**.
- Housing burden equals `12 × monthly reference rent ÷ modeled median household income`; this is a fictional affordability stress proxy, **not** a measured share of cost-burdened residents.
- Development levies represent a one-time additional receipt with a mild modeled rent effect; property value appreciation itself never becomes city cash automatically.
- Capital stock and service quality are stylized physical/operating indicators, not audited public asset valuations.

### Controlled comparison and rewind

`EVENTS` defines the same 20-year shock schedule in `game.js`. The chosen environment (`twists & turns`, `mostly calm`, or `turbulent`) applies symmetrically to both cities and is locked after advancing time. There is no random number generation and no year-specific advantage assigned to Alderport or Novahaven. To make a genuine like-for-like comparison, keep policies otherwise identical or compare a single change while using `Save current future` and `Rewind`.

Rewind restores complete copies of each city's state, including loan vintages, accumulated capital investment and reserves, then truncates future years and ledgers. The saved future is retained in the page session for comparative inspection. **Progress and alternate histories are not persisted to storage** and will reset if you reload the page.

## Files

- `index.html` — accessible interface with paired cities, finance controls, time machine, chart, microscope and model notes.
- `styles.css` — original retro-futurist exhibition design; responsive at desktop and mobile widths. No CDN or font downloads.
- `game.js` — deterministic model, dynamic SVG city scenes, cash-flow engine, UI and tests-only read-only snapshot access.
- `../images/previews/50.webp` — compressed crop of the actual browser-rendered game screen, not a generated fantasy image.
- `INSTALL_LOCAL.py` in the distribution ZIP — safe local-only installer that adds the portfolio gallery entry and preserves existing files.

## Development / limitations

The code runs without package managers and external data. It should be served from the **repository root** using `python -m http.server 8001`, then visited at `/portfolio/50/`. `index.html` also works without network access. For local rollout: back up the gallery; install locally; inspect gameplay and gallery; only then stage `portfolio/50`, `portfolio/images/previews/50.webp`, and `portfolio/script.js` for an approved commit.

Limitations: not a real blockchain, not full governmental GAAP/GASB or Indian municipal fund accounting, not a real-world bond pricing engine, not a transport/land-use causal model, not a political forecast, not a public credit rating, and not a Monte Carlo simulator. Each limitation is disclosed in the interface.

Potential later work: full public balance-sheet and fund-accounting layer, debt covenants, repayment waterfalls, mature bond secondary markets, multi-year project lifecycles, climate loss distributions, genuine access/land-use models, household income deciles, exportable JSON play history and scenario reproducibility tests.
