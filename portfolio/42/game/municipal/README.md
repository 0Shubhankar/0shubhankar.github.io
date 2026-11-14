
# Project 42 Municipal Game Engine

## P42.4.1

Shared municipal state and annual decision controller.

Five infrastructure systems and fifteen phases.
Initial treasury: $100 million.
Ten annual decision cycles.

Decisions reserve available capital.
Annual settlement deducts expenditure once.
Completed infrastructure cannot be purchased again.
All five decisions must be resolved before settlement.
History supports deterministic reconstruction.

Run tests:

    node p42-cinematic/municipal/municipal-test.mjs

This module is not connected to the gameplay UI yet.

All parameters are illustrative.

Operating revenue, maintenance expenditure,
municipal borrowing, external events and
reaction generation remain pending.

No changes to shared UUE engine.

## P42.4.2 - Automatic reaction engine

Four reusable reaction categories:
deferred, expanded, completed, ongoing.

annualReactions(history) validates and replays
the authoritative annual settlement history.

Returns five infrastructure reactions,
financial summary, construction phase states,
and game completion status.

No mutation of municipal state.
No new gameplay controls.
No external event or operating budget model yet.

Tests:
    node p42-cinematic/municipal/reactions-test.mjs


## P42.4.3 - Municipal operating budget

Initial annual revenue: $25M.
Initial annual operating costs: $22M.

Completed infrastructure contributes recurring
revenue, savings and expenditure from the next year.

Operating obligations and prior arrears are paid
before capital investment.

Unpaid obligations become recorded arrears.
No automatic borrowing.

All financial values are integer dollars.
All parameters are illustrative.

Separate version-2 financial history.
Original capital-only engine remains unchanged.

Tests:
    node p42-cinematic/municipal/operating-test.mjs

No gameplay interface changes.
Bond financing and unified reaction integration
remain pending.


## P42.4.4 - Municipal bond financing

Fixed interest: 6%.
Maturity: 20 years.
Equal-principal repayment with dollar rounding.

Maximum outstanding principal: $50M.
Projected annual debt service limit:
25% of current annual revenue.

All terms are illustrative.

Explicit approval is required when a decision
increases the capital funding gap.

Bonds are issued at annual settlement.
First debt payment occurs in the following year.

Operating costs and existing debt obligations
are paid before capital expenditure.

Borrowing finances capital shortfalls only.
Unpaid principal remains outstanding.
Unpaid interest is recorded as arrears.
No automatic emergency borrowing.

Version-3 financial history supports replay.
Original engine modules remain unchanged.

Tests:
    node p42-cinematic/municipal/bonds-test.mjs

No gameplay interface changes.


## P42.4.5 - Economic events and challenges

Four reproducible ten-year scenarios.
Six annual economic event types.

Events modify baseline municipal revenue,
baseline operating expenditure, current
construction costs and new bond interest rates.

Existing fixed-rate bonds retain their coupons.

State-dependent challenges identify unmet
infrastructure targets, low capital availability
and unpaid financial obligations.

Version-4 annual records contain economic
event data and individual bond coupons.

Stable scenario preserves version-3
financial results.

All event assumptions are illustrative.
No permanent physical damage or cumulative
inflation model yet.

Tests:
    node p42-cinematic/municipal/events-test.mjs

No gameplay interface changes.
Unified annual reactions remain pending.


## P42.4.6 - Unified municipal game controller

Authoritative game state uses the event-aware
version-4 municipal financial engine.

Gameplay modes:
    planning
    outcome
    finished

Five annual infrastructure decisions.
Revisions permitted before annual settlement.
Explicit approval for additional borrowing.

Annual outcome review must be acknowledged
before the next planning round begins.

Reactions are generated directly from the
event-aware financial settlement records.

Internal action history records decisions,
revisions, approvals, annual settlements
and outcome acknowledgements.

Save/load reconstructs the game from its
action history, including unfinished decisions.

Tests:
    node p42-cinematic/municipal/game-test.mjs

No changes to existing financial engines.
No changes to shared UUE source.
No new player-facing research controls.

Browser persistence and UUE integration pending.

