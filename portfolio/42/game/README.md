# Project 42 — P42.1 cinematic development preview

Uses the shared UUE source via Vite (no engine copy). This is a local-only development entry because the frozen 1.2.0-rc.1 iframe project client has no camera/scene API. No changes to the frozen release, original Project 42 starter or financial engine. The preview is not a production integration or research data source.

From UUE root: `npm run dev -- --port 5180 --strictPort` then open `http://localhost:5180/p42-cinematic/`.

Seven camera scenes, actual Riverbend objects, project-owned procedural meshes, typewriter text, pause/next/skip/replay, daylight during briefing for legibility. The park is visually masked, not an exported city-state edit. Road damage and pollution are stylized visual cues, not physical simulations; props are not persistent editor objects. Financial/service targets are illustrative citywide needs rather than measurements of the 3D map. No audio or images. After briefing, use normal OrbitControls to explore; location buttons restart the tour at that location. Before production, expose a reviewed generic camera/scene extension in a new version of UUE and integrate using the project client. No Git operations needed.

## P42.2
Unnumbered issue titles; day/night toggle uses native UUE lighting and activity methods. Wastewater target reframed toward the river/outlet and tanks, pending local visual confirmation. Location buttons revisit only one issue, then return to free exploration. No priority scoring or financial gameplay added.


## P42.3 — Public park intervention

Select Room to breathe or click the vacant plot.

Preview full development, phased development or deferral.
Confirm to commit capital. Advance the prototype year to
complete construction.

Three phases at $5M each. Initial treasury $100M.
Maintenance estimates are displayed but not yet charged.
Browser-local decision history, JSON export and reset.

No changes to shared UUE source or frozen releases.
No municipal financing or citywide settlement yet.

## P42.3.1 - Player interface cleanup

Removed reset and export controls from park gameplay.
Replaced technical accounting messages with natural feedback.
Decision history remains automatically recorded in local storage.
Research and developer controls belong outside gameplay.


## P42.5 - Five-site gameplay

The unified municipal engine now drives
the actual gameplay.

Five independently selectable locations.
Contextual camera visits and investment decisions.
Decision previews and revisions.
Explicit borrowing approval.
Collective annual settlement.
Cinematic annual outcome tour.
Ten annual gameplay rounds.

Browser-local persistence:
    p42-municipal-v1

Previous park-only records are preserved
but not imported.

No player-facing reset or export controls.

The park geometry is reused without its
independent treasury or year counter.

Other infrastructure changes are representative
visual cues, not physical engineering simulations.

Tests:
    node p42-cinematic/ui-test.mjs

Shared UUE source and financial engines unchanged.

## P42.5.1 - Gameplay pacing

Opening cinematic remains unchanged.

Infrastructure selection:
    0.95-second target camera transition.
    No typewriter animation.
    No additional reading delay.
    Contextual decisions appear on arrival.

Annual outcomes:
    1.15-second target camera transitions.
    Complete text displayed immediately.
    Short reading hold.

Financial engine and saved decisions unchanged.
Shared UUE engine unchanged.

## P42.5.2 - Corrected interface update

Opening first, green decisions,
left annual finances and review.

Existing records and shared UUE unchanged.

## P42.6.0 - Shared runtime migration

Migrated from the locally verified P42.5.2 baseline.

Shared UUE runtime:
    ../../../engines/uue/releases/1.6.0-rc.1/runtime.js

Editable Project 42 source now lives here.

The municipal computational engine is unchanged.
The original UUE development source is preserved.

Local development:
    python3 -m http.server 5190

Browser:
    http://localhost:5190/portfolio/42/game/

Browser verification and saved-state transfer pending.

No Git commit or deployment performed.

## P42.6.1 - Visual consistency

Transparent, compact gameplay overlays.

Visual quantities derived directly from
municipal-engine infrastructure delivery.

Water: 2, 5, 8 representative service points.
Solar: 2, 6, 10 representative panels.
Wastewater: 1, 2, 4 representative modules.
Road damage: proportional removal.
Park: three existing landscaping phases.

Preview, settlement and reload use
the same visual mapping.

Visual tests:
    node portfolio/42/game/visual-state-test.mjs

Shared UUE and municipal finances unchanged.
Browser verification required.

## P42.7.1 - Independent municipal financing

Explicit annual bond authorization.
Restricted capital reserve.
Unspent proceeds carry forward.
Existing bond terms preserved.
Legacy game history remains replayable.
Capital proceeds cannot pay operating
expenses or debt service.
Financing decisions recorded internally.
Shared UUE unchanged.
