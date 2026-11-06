# Project 41 — The Mayor Is Broke!

**Urban Capital Playground · Treasury Edition v0.2 · 6 November 2026**

A fictional four-year mayoral finance game with an interactive isometric SVG city. Users make decisions on bridge financing, private development, storm response, and election-year spending. Their choices change the city, cash reserves, debt, services, approval, resilience, and the final narrative ending.

## Folder layout

- `index.html` — semantic app shell, game interface, help dialog and contextual explanation
- `styles.css` — dark editorial styling and responsive layout
- `game.js` — local no-framework simulation engine, game state and SVG city visualization

## Running locally

From the **repository root**:

```bash
python3 -m http.server 8001
```

Then visit `http://localhost:8001/portfolio/41/`.

No build step or package manager required. Font imports require network; local fallback fonts are provided. No external JavaScript libraries, databases, wallet connections, or API keys.

## Simplified finances (millions of USD, hypothetical)

- Start: cash $8m, existing debt $40m, baseline annual revenue $18m, annual operating expense $14m.
- Existing debt pays 5% annual interest on the outstanding balance and $1m principal annually.
- New ordinary bonds are issued at face value, earn 6% annual interest (coupon), and are **interest-only within the four-year term**. Their principal remains outstanding.
- Emergency notes and automatic cash-deficit loans earn 9% interest annually and remain outstanding during the term.
- Year-end cash = cash after each decision's immediate borrowing/capital spending + annual revenue − annual operating costs − scheduled interest and existing principal repayment.
- Development-related recurring tax revenue starts the year after project approval. Year-four tax policy also changes the current year's revenue for simplicity; this is stated in the game mechanics.
- If cash goes negative at year-end, the game explicitly adds a 9% emergency loan sufficient to restore a nonnegative cash balance (and lowers approval). This prevents hiding a deficit behind a misleading negative-cash accounting treatment.
- The municipal balance sheet is simplified: no accrual accounting, capital asset values, depreciation, restricted funds, pension liabilities, credit ratings, yield curves, default or investor tax treatment.
- Flood costs and political effects are hypothetical scenario rules, not estimated risk probabilities or real-world forecasts.

## Critical first-draft limitations

- Outcomes are deterministic and limited to four rounds; no difficulty levels, randomness, or saving progress.
- SVG represents a stylized city, not real geodata or a high-fidelity physical simulation.
- This is not a real municipal finance advisory application, actual issuance workflow, or investment advice.
- Branching is via state changes; event order is fixed.
- Some stylized reactions and cash-flow rules are deliberately simplified for first-time visitors.

## Next iteration wishlist (after local review)

1. Local save/resume and expanded 8–10-year mode.
2. More physically responsive city (bridge construction animation, flooding, development phases).
3. Explicit cash-flow chart and public-budget breakdown panel.
4. More nuanced municipal bond structures and fiscal constraints.
5. Better sound/design flourishes respecting reduced-motion preferences.
6. Accessibility and cross-browser tests.
7. Portfolio gallery integration into `portfolio/script.js` as Project 41 **only after user approval**.

## Safety / repository workflow

This project is a self-contained prototype. Do not replace any shared vendor libraries. Do not change existing projects 1–40. Do not add it to the gallery, stage it or push it without local testing and explicit approval.

## Treasury Edition v0.2 additions

- Two independent annual fiscal controls, property-tax policy (−$1.5M / hold / +$1.5M vs baseline) and service budget (−$1.5M / hold / +$1.5M). Tax-policy choice is a *level* each year, not a compounding percentage; the baseline is reset by changing the selection next year. Development adds recurring tax revenue from Year 3.
- Annual revenue components: property taxes, sales/activity taxes, service fees and intergovernmental transfers; developer-driven activity changes sales taxes by a small deterministic amount.
- Budget schedule: gross revenue, operating expenses, legacy interest/principal, new bond interest, emergency-note interest and net annual cash generation.
- Debt-service coverage = operating margin divided by scheduled interest plus principal; cash reserves measured in months of operating expenditure; debt/revenue; indicative coupon.
- Capital bond coupon assigned on issuance using a simple model spread from 4.3% base rate plus debt, liquidity and bridge-risk adjustments; held constant for existing capital bonds in this prototype. This is not an actual market quote, credit rating, or full term structure.
- Capital bonds have a 10-year *bullet* principal maturity after the four-year game. Legacy debt amortizes $1M per year. Emergency notes remain interest-only within the term. 0.35M issuance fees for the $25M bridge bonds.
- Cash reconciliation displays opening balance *after immediate story decision*, operating inflows/outflows, scheduled debt service and automatic liquidity borrowing.

### Known gaps in v0.2

- Policies are annual selections with a persistent tax-policy *level* only while retained; no statutory tax rate or tax-base model. This is a narrative simulator, not municipal-budget forecasting.
- Simulated bond pricing is illustrative and lacks underwriting, credit ratings, market curves, capital structure covenants, legal borrowing limits, default and investor settlement flows.
- The tax-option effects on approval apply once per year. Different revenue assumptions, affordability constraints, transfers and property market changes remain simplified.
- Cash reconciliation shows cash after the story project transaction; it does not separately break out the project capex, issuance proceeds or fees into the current-year table. These are reflected in the cash balance and option narratives.
- Do not modify previous 41 draft in place without backing it up and validating local behavior. Do not commit without explicit approval.
