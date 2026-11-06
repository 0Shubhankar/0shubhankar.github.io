# Buy a Piece of the City

A playful, self-contained, **fictional** municipal bond / digital-ownership market game. Project folder number `43` is internal only; it is not shown in the public game.

## Open locally

From the repository root, run `python -m http.server 8001` and open `http://127.0.0.1:8001/portfolio/43/`. No packages, external fonts, remote scripts, wallet connection, backend, blockchain, API or personal data are required.

## The experience

1. Choose conventional issuance or tokenized ownership records. Both issue **exactly the same eight-year, $20,000,000, 5.2% fixed-coupon bond**.
2. Invest a fictional $25,000 starting balance, in denominations of $1,000 for conventional or $100 for tokenized.
3. Trade holdings, select one of five deterministic macro events each year, and advance eight years.
4. Inspect coupon receipts, market value, yield, duration, transaction log, municipal operating coverage, and repayment fund.
5. Replay with a different issuance route or market path.

## Explicit simplifying assumptions

- All dollar amounts and the entire city are fictional. No real municipal bonds are being offered. Neither route contains a working blockchain; “hash” values are deliberately **non-cryptographic toy identifiers**.
- All bonds have identical coupon, maturity and seniority. Differences in access, transaction costs and recording do **not** imply reduced default or interest-rate risk.
- Issuer fees: traditional = $250,000 fixed + 1.2% of face ($490,000); tokenized = $400,000 fixed + 0.65% of face ($530,000). Tokenized issuance costs **$40,000 more** in this deliberately counterintuitive case. Annual administration expenses are $80,000 vs $105,000. Costs are fictional, not market quotes.
- Coupon each year = 5.2% × face; $1.04M is due annually across the entire issue. No interim principal amortization: **bullet principal at Year 8**.
- Market yield = fictional benchmark yield + issuer credit spread. Bond full price per $100 face = discounted annual coupons plus discounted $100 maturity principal, at that yield. Modified duration is calculated from the weighted present value of cash flows, divided by (1+yield).
- Opening $25,000 of investor cash. Initial purchases at $100 per $100 face. No fractional currency or real transactions. Secondary prices use a bid–ask half-spread, a capped size-impact component, and route-specific investor commissions. The resulting “bid” and “ask” are modeled, not live market quotes.
- Market benchmark yields react to chosen headline shocks. The credit spread also responds mechanically to financial stress; it is **not a credit-rating model**. Scenarios are deterministic and can be repeated.
- Municipal opening annual revenue = $10.5M, annual operating + bridge costs = $6.4M, opening reserve cash = $2.0M less issuance fees. Annual revenues evolve by 2.2% growth multiplied by scenario demand. Operating costs evolve by 2.4% inflation multiplied by scenario cost shock. The city pays all-issue coupons from current surplus and cash reserve (subject to available funds), then earmarks up to $2.5M annually for a principal repayment fund.
- Debt-service coverage displayed = (revenue − operating & bridge costs) / $1.04M annual coupon. It excludes any required deposit to principal repayment fund, so it is **coupon coverage**, not a formal covenant ratio.
- At maturity, the city repays principal up to the balance of the fund plus unrestricted cash. In an extreme shortfall, the game applies a proportional final repayment **for educational illustration**, not a modeled bankruptcy proceeding or legal recovery waterfall.
- Investor portfolio value is cash + mark-to-market bonds. Coupon payments are added to cash, and at maturity principal repayment is added to cash **and holdings are removed**, avoiding double counting.
- At most 14 recent entries are displayed. No persistence; refreshing resets the game.

## Files

- `index.html`: markup, illustration, sections and accessible text.
- `styles.css`: unique warm-paper / cobalt / coral visual system (not shared with other games).
- `game.js`: financial model, user trades, city simulation and rendering.
- `../images/previews/43.webp`: ready-to-use locally staged portfolio gallery thumbnail.

## Testing before publication

- Review desktop/mobile layout, responsive image, controls and aria labels.
- Switch between routes before trading; attempt to switch afterward and confirm warning.
- Buy and sell $100 of tokenized bonds; $100 should be rejected in traditional route.
- Verify larger buys cannot exceed cash, and sells cannot exceed holdings.
- Advance 8 years with calm and distress scenarios; confirm ending account and no NaN values.
- Review the ledger's toy-hash disclaimer and absence of claims that tokenization guarantees better finance.
- Publish only after local visual and gameplay review. Gallery card addition is intentionally not embedded in the ZIP to avoid overwriting `portfolio/script.js`.
