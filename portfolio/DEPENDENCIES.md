# Shared dependency management

All changes apply to this publishing copy. Original project folders and the ADATA backup are unchanged.

## One place to manage versions

`dependencies.json` lists 62 top-level dependency URLs, their compatible version pins, aliases, and the pages using them. Multiple versions are deliberately retained where old projects use different APIs. The labels are stable identifiers; each entry's URL identifies its package/version.

`vendor/shared/` contains locally served scripts, styles, and their imported modules, fonts, and CSS images. `dependencies.lock.json` records source URLs and SHA-256 integrity hashes. Project 1's prior vendor folder is retained but its pages now use the shared copies.

## One command for all affected pages

Double-click **Update Dependencies.command**, or run from this folder:

```
python3 tools/dependencies.py sync
python3 tools/dependencies.py check
```

Requires Python 3, Node.js (script syntax validation), curl, and internet for downloads. No npm install required. `sync` stages downloads and checks JavaScript before changing pages. Repeat runs reuse intact locked files. Missing/corrupt assets cause a fresh download. A failed download leaves page references untouched and writes `dependency-errors.json`.

To change a version, edit its `url` in `dependencies.json`, retain its stable `id` and `local` path, then run the commands. This updates the shared asset for every listed page. Do not automatically move old projects to a new major release. Check affected visualizations before publishing. For an entirely new dependency, add its source alias and page paths to the manifest.

To recheck remote availability without changing website files:

```
python3 tools/dependencies.py audit
```

This writes `dependency-audit.json`. An HTTP success or a syntax check is not a guarantee of visualization/API compatibility.

## Changes and limits

- Heatmap library pinned to classic-script-compatible Leaflet.heat 0.2.0.
- Unversioned Leaflet, MapLibre, Chart.js, Highcharts, Tweakpane, and other libraries pinned centrally.
- RawGit globe assets moved to a pinned source and downloaded locally.
- Mixed Three.js 0.120.1 controls / 0.128.0 core aligned to 0.128.0; separate projects retain their own Three.js versions.
- Browser ES-module imports resolved recursively into local files, including `three` bare imports.
- Redundant Google Fonts requests for the system font Georgia removed.
- MathJax 3.2.0 intentionally remains external because it dynamically loads fonts/extensions. It is tracked and checked by the same manifest.
- Map tiles, remote map styles, external datasets, and other live services still require network access and any service-specific authorization. They are not JavaScript libraries and are not mirrored by this tool.
- The local missing files in old drafts (`6/template1.html`, `26/temp2.html`) and missing `37/style.css` are pre-existing project issues, not fixed by dependency synchronization. Continue project-by-project testing.
- Existing package copyright/license notices are retained. This manager does not change library licensing.
