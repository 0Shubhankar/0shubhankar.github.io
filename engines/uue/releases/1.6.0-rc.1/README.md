# UUE open runtime — 1.6.0-rc.1

Release candidate, not UUE 2.0. One versioned browser ES module exports `CityEngine`, the exact bundled `THREE` namespace, `defaultCity`, and `createProjectAPI(engine)`. No iframe or project whitelist in this integration mode. Project code can directly use the existing CityEngine surface, camera, renderer, scene and activity, or use the opt-in convenience API. Direct access is trusted project code, not a security sandbox; do not load untrusted scripts. Browser modules use the same Three.js instance, avoiding duplicate constructors.

## Project location and development

`website/engines/uue/releases/1.6.0-rc.1/runtime.js` is the shared build. Each `website/portfolio/<id>/game/` has its editable HTML/CSS/JS, its own computational engine and tests. Launch `python3 -m http.server 5181` from website root and visit `http://localhost:5181/portfolio/19/game/` (or 20, 21, 23). No Vite or npm required for the browser games; Node is required for tests. Use a modern browser with ES-module and WebGL support. The original UUE development directories remain as migration backups, not the ongoing game source of truth.

## Example (from portfolio/<id>/game/main.js)

```js
import {CityEngine, THREE, defaultCity, createProjectAPI} from '../../../engines/uue/releases/1.6.0-rc.1/runtime.js';
const engine = new CityEngine(document.getElementById('viewport'), structuredClone(defaultCity), () => {});
const api = createProjectAPI(engine);
api.lighting.setNight(true);
api.activity.setLevel('high');
api.assets.register('marker', ({color}) => new THREE.Mesh(new THREE.BoxGeometry(2, 2, 2), new THREE.MeshStandardMaterial({color})));
const marker = api.assets.create('marker', {color: '#00aa88'});
api.scene.add('marker-1', marker, mesh => {mesh.geometry.dispose(); mesh.material.dispose();});
await api.camera.move({target:[0,0,0], position:[100,70,100], seconds:1.2});
api.events.on('simulation:step', ({state}) => { /* update project visuals */ });
let year = 0;
api.simulation.connect({step(){return ++year;}, snapshot(){return {year};}});
await api.simulation.step({policy:'example'});
api.extensions.install('custom', a => a.events.on('custom:event', data => console.log(data)));
const stop = api.behaviours.register('rotate', dt => {marker.rotation.y += dt; api.invalidate();});
// Call api.behaviours.tick(dtSeconds) from YOUR project's render/update loop.
// Direct access stays available: api.raw, api.THREE, api.world, api.renderer, api.state.
// On exit: stop(); api.dispose({disposeEngine:true});
```

## API contracts

- `camera.move({target,position,seconds,minDistance})`: world coordinates, absolute camera position; Promise resolves true on completion, false on cancellation; restores controls. `camera.cancel()`.
- `scene.add(id, object, cleanup?)`, `get(id)`, `remove(id)`: detached Object3D owned by project group. Custom cleanup is opt-in to avoid disposing shared materials. Directly added raw scene objects must be cleaned up by project. Core scene rebuilds may require the project to restore its group; verify with the actual UUE release.
- `assets.register(id,factory)` and `create(id,options)`: per-project factories, arbitrary Three.js geometry. No prescribed asset list. Asset factory manages its own resources unless registered with scene cleanup.
- `behaviours.register(id,fn)` returns unsubscribe; `tick(dtSeconds)` is manually called by the game. No hidden render loop.
- `extensions.install(id,setup)` returns removal; setup may return cleanup. Extensions are responsible for cleaning up side effects including partial setup failure.
- `events.on(type,fn)` returns unsubscribe; `emit(type,payload)` dispatches synchronously. Listener errors aggregate and propagate; a listener failure does not roll back an already committed simulation step.
- `simulation.connect({step,snapshot})` returns disconnect; `step(input)` supports async and rejects overlapping steps. Adapter owns its state and validation; snapshot must be safely copied if isolation matters. Event `simulation:step` includes result and snapshot.
- `dispose({disposeEngine:false})` cancels camera, tears down registered resources and listeners; optional raw engine disposal. Direct modifications are not sandboxed.
- All native UUE building/landscape/editor methods remain available through `api.raw`; their existing validation and physical rules remain in effect. Projects may add custom visual objects without editing shared engine source. Scene/renderer internals are compatibility access, not a promise that every internal field remains stable in future releases.

## Versioning and deployment

The migration installer builds from the exact local UUE `src/` and default scenario; it runs the existing UUE suite and four game engine suites. It installs the runtime once, copies game sources (rewrites only imports), and does not promote gallery links until explicit browser acceptance. It preserves previous game directories and originals. The runtime version is immutable: if the version already exists with different contents, stop and choose a new release version. Release manifests record source and bundle hashes. Do not edit the versioned runtime directly. Continue UUE development in its own repository, increment version and explicitly upgrade game imports after testing. Do not change current games automatically when UUE evolves.

The source wrapper lives in UUE `shared-runtime/`. It is generic; domain policy logic stays with games. New projects may use the convenience API or raw CityEngine/Three.js. No need to put new project-specific files inside the UUE repository.

## Limits

The four migrated games intentionally retain their existing raw access and custom camera/scenery logic to minimize regressions; using the new convenience API is optional. The full local Vite build and WebGL browser tests are required before public promotion. The generic API was tested against mock engine objects; that is not a browser integration test. This is not a comprehensive UUE 2.0 release or a guarantee of unrestricted changes to every core invariant. A custom city generator, asset library, traffic model or GIS layer can be added by projects; the engine does not implement all such systems automatically.
