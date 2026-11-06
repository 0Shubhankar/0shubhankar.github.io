# The Secret Life of a Brick

An interactive material autopsy, designed as an independent GitHub Pages exhibit. Public pages have no project number, date, or edition label; the `52` folder is only an internal portfolio identifier.

## What is included

- `index.html` — a museum-style editorial page, semantic controls, methodology dialog
- `styles.css` — charcoal, terracotta, copper and ivory identity; responsive layouts
- `script.js` — original dependency-free Canvas drawings, five-piece animated brick, interactive lifecycle, material comparisons, scale-up views and material afterlife
- `data/materials.json` — **FICTIONAL** example assumptions, with a common functional unit
- `../images/previews/52.webp` — screen capture of the actual local exhibit

## Running locally

Serve from the repository root, rather than opening with `file://` (the browser needs to load `data/materials.json`):

```bash
cd ~/Documents/WebDev/0shubhankar.github.io
python -m http.server 8001
```

Visit `http://127.0.0.1:8001/portfolio/52/`. The preview card appears on `http://127.0.0.1:8001/portfolio/` after running the local installer. The installer **never commits or pushes**.

## Controls

1. Drag **Open the Object** to separate an interpretive brick into five conceptual slices. These are **not literal internal material layers**.
2. Select a chapter of the material journey to inspect the process and its assumed relative carbon contribution.
3. Switch among four masonry systems. All displayed comparative data are for **1 m² of a notional finished wall**, NOT for one item of equal physical dimensions.
4. Move **Choose Your Scale** from one unit to a district. The illustrated architectural quantity and outputs are *not actual construction takeoffs*. The one-unit state uses `1 / unitsPerM2` square metres.
5. Choose an end-of-life pathway to examine its qualitative trade-offs. No unverified savings are claimed.

## Important science and accounting limitations

**All numeric material values are fictional placeholders.** They are examples for the user interface and calculations, not measured embodied emissions, economic prices, water footprints, manufacturer EPDs, lifecycle inventories or verified lifespan. They must never be presented as building procurement recommendations. Change or replace them before any evidence-based external research use.

The comparison's functional unit is one hypothetical square metre of finished masonry wall. Real research must constrain strength, thickness, assembly, insulation / thermal and acoustic performance, local climate, expected life, mortar and reinforcement, construction losses, sourcing, fuel mix, transport mode, allocation of reused materials, maintenance, and end-of-life treatment.

`carbon`, `water`, and `cost` are illustrative per square metre; `serviceLife` is a hypothetical scenario in years; `transportKm` is a hypothetical procurement scenario; `unitsPerM2` is an illustrative quantity coefficient. Each `stages` array contains five shares that add to 100% and is assigned separately for each material. Stage shares apportion illustrative carbon but do not establish empirically measured stage contributions.

- Total carbon = wall area × sample kg CO₂e/m².
- Total water = wall area × sample L/m².
- Total cost = wall area × sample INR/m².
- Unit count ≈ wall area × sample units/m².

In the standalone "one unit" state, area = 1 / selected material's units per m². All larger stages use fixed hypothetical wall areas: 12, 160, 3,000 and 20,000 m². Canvas city drawings are *symbolic* rather than physically measured models.

## Enhancement ideas

- Replace sample assumptions with sourced, geographic, reproducible inventories and uncertainty ranges.
- Include mortar, structural performance, and whole-wall equivalency constraints.
- Show stage-specific carbon in stacked bars with uncertainty and credible source notes.
- Add original captured photogrammetry or custom 3D geometry for true brick perforations or saw-cut views.
- Add downloadable scenario calculation records; compare interventions with system boundary controls.
- Add keyboard-controlled spin, user-adjustable freight, and reuse recovery yields.

## Privacy, dependencies and maintenance

No external dependencies, analytics, remote APIs, trackers, or external fonts. Runs entirely on static HTML/CSS/JS once files are hosted. `data/materials.json` is loaded from the same folder. No user data is collected or stored.

The local-only installer backs up the portfolio gallery script to `~/portfolio-audit` and modifies only the new `portfolio/52` folder, its thumbnail, and the card entry in `portfolio/script.js`.
