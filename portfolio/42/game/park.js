
import {THREE} from '../../../engines/uue/releases/1.6.0-rc.1/runtime.js';
import {
    initial, options, commit, settle, restore
} from './park-state.mjs';

export function installPark(engine, L, props) {
    const $ = id => document.getElementById(id);
    const key = 'p42-park-v1';

    let state = initial();
    let selected = null;
    let opened = false;
    let storageOK = true;

    try {
        const saved = localStorage.getItem(key);
        if (saved) state = restore(JSON.parse(saved));
    } catch (e) {
        storageOK = false;
        console.warn('Park storage unavailable', e);
    }

    const root = new THREE.Group();
    root.name = 'P42 park interventions';
    engine.view.scene.add(root);

    const {x, z} = L.park.position;
    const {width: w, depth: d} = L.park.dimensions;

    const mats = new Map();

    function mat(c) {
        if (!mats.has(c))
            mats.set(c, new THREE.MeshStandardMaterial({
                color: c,
                roughness: .85
            }));

        return mats.get(c);
    }

    function mesh(g, c, x, y, z, p) {
        const m = new THREE.Mesh(g, mat(c));
        m.position.set(x, y, z);
        m.castShadow = true;
        m.receiveShadow = true;
        p.add(m);
        return m;
    }

    function box(c, x, y, z, w, h, d, p) {
        return mesh(
            new THREE.BoxGeometry(w, h, d),
            c, x, y, z, p
        );
    }

    const phases = [];

    for (let i = 0; i < 3; i++) {
        const g = new THREE.Group();
        const build = new THREE.Group();

        root.add(g, build);

        const sw = w / 3 - 2;
        const cx = x - w / 2 + w / 6 + i * w / 3;

        // Landscaped ground and walking paths
        box('#618954', cx, 4.28, z, sw, .25, d-4, g);
        box('#d9c7a4', cx, 4.48, z, 3, .14, d-8, g);
        box('#d9c7a4', cx, 4.48, z, sw-4, .14, 4, g);

        // Trees
        for (const dx of [-sw*.32, sw*.32]) {
            for (const dz of [-48, -28, 26, 48]) {
                mesh(
                    new THREE.CylinderGeometry(.45,.65,4,8),
                    '#75533a', cx+dx, 6.4, z+dz, g
                );

                mesh(
                    new THREE.SphereGeometry(3.6,10,8),
                    '#477b46', cx+dx, 10, z+dz, g
                );
            }
        }

        // Public seating
        for (const dz of [-18,18]) {
            box('#956a43',cx+6,5.5,z+dz,5,.5,1.5,g);

            for (const dx of [-1.6,1.6])
                box('#535a55',cx+6+dx,4.9,z+dz,
                    .35,1.2,1.2,g);
        }

        // Construction surface and barriers
        box('#c2a17c',cx,4.35,z,sw,.35,d-4,build);

        for (const dz of [-d/2+3,d/2-3]) {
            for (let j=0; j<5; j++) {
                box(
                    j%2 ? '#eee1be' : '#c77c34',
                    cx-sw/2+3+j*(sw-6)/4,
                    5.2,z+dz,4,1.4,.6,build
                );
            }
        }

        for (const dx of [-sw/2+1,sw/2-1])
            box('#bc8540',cx+dx,5,z,.5,1.3,d-8,build);

        phases.push({g,build});
    }

    const panel = document.createElement('aside');
    panel.id = 'parkPanel';
    panel.hidden = true;

    panel.innerHTML = `
        <div class="park-top">
            <small>PUBLIC GREEN SPACE</small>
            <button id="parkClose"
                aria-label="Close park panel">×</button>
        </div>
        <h2>Room to breathe</h2>
        <p id="parkNeed"></p>
        <div id="parkChoices"></div>
        <p id="parkPreview" aria-live="polite"></p>
        <button id="parkConfirm" disabled>
            Confirm decision
        </button>
        <button id="parkSettle" hidden>
            Advance year
        </button>
        <p id="parkFeedback" aria-live="polite"></p>
    `;

    document.body.append(panel);

    const treasury = document.createElement('span');
    treasury.id = 'parkTreasury';
    treasury.hidden = true;

    document.querySelector('header')
        .insertBefore(treasury,$('lighting'));

    function save() {
        try {
            localStorage.setItem(
                key, JSON.stringify(state.history)
            );
            storageOK = true;
        } catch (e) {
            storageOK = false;
        }
    }

    function renderGeometry() {
        const preview = selected?.phases || 0;

        phases.forEach(({g,build},i) => {
            g.visible =
                i < state.completed ||
                (
                    opened && !state.pending &&
                    i >= state.completed &&
                    i < state.completed + preview
                );

            build.visible =
                i >= state.completed &&
                i < state.completed + state.pending;
        });

        engine.view.renderer.shadowMap.needsUpdate = true;
        engine.invalidate();
    }

    function render() {
        treasury.textContent =
            `Year ${state.year} · Treasury $${state.cash}M`;

        treasury.hidden = false;

        $('parkNeed').textContent =
            `${state.completed*5} of 15 hectares delivered` +
            (state.pending
                ? ` · ${state.pending*5} ha under construction`
                : '') + '.';

        $('parkChoices').replaceChildren();

        for (const o of options(state)) {
            const b = document.createElement('button');
            b.type = 'button';

            b.textContent = o.id === 'full'
                ? `Develop remaining park · $${o.cost}M`
                : o.id === 'phase'
                    ? (state.completed
                        ? 'Next phase'
                        : 'First phase') + ' · $5M'
                    : 'Preserve land for later';

            b.setAttribute(
                'aria-pressed',
                String(selected?.id === o.id)
            );

            b.disabled = o.cost > state.cash;

            b.onclick = () => {
                selected = o;
                render();
            };

            $('parkChoices').append(b);
        }

        $('parkConfirm').hidden =
            !!state.pending || state.completed === 3;

        $('parkConfirm').disabled = !selected;
        $('parkSettle').hidden = !state.pending;

        $('parkPreview').textContent = selected
            ? `Preview: ${selected.phases*5} ha · ` +
              `$${state.cash-selected.cost}M treasury after commitment · ` +
              `$${((state.completed+selected.phases)*.5/3).toFixed(2)}M ` +
              `estimated annual maintenance after delivery.`
            : state.pending
                ? 'Construction is underway.'
                : state.completed === 3
                    ? 'The full park is now delivered.'
                    : 'Choose how you would like to develop this space.';

        renderGeometry();
    }

    function open() {
        opened = true;
        selected = null;
        panel.hidden = false;

        $('parkFeedback').textContent = '';

        render();
    }

    function close() {
        opened = false;
        selected = null;
        panel.hidden = true;
        renderGeometry();
    }

    $('parkClose').onclick = close;

    $('parkConfirm').onclick = () => {
        if (!selected) return;

        try {
            const id = selected.id;
            state = commit(state,id);
            selected = null;

            save();
            render();

            $('parkFeedback').textContent =
                (id === 'defer'
                    ? 'The land will remain available for future development.'
                    : 'Construction is underway. The park will open next year.')
                ;

        } catch (e) {
            $('parkFeedback').textContent = e.message;
        }
    };

    $('parkSettle').onclick = () => {
        try {
            state = settle(state);
            save();
            render();

            $('parkFeedback').textContent =
                'The new park is now open to the neighbourhood.';

        } catch (e) {
            $('parkFeedback').textContent = e.message;
        }
    };

    renderGeometry();

    return {
        open,
        close,
        showTreasury: render,

        briefing: () => state.completed === 3
            ? {
                text: 'The public park has been delivered. The neighbourhood now has new green space.',
                detail: '15 hectares delivered'
            }
            : state.pending
                ? {
                    text: 'The park is currently under construction.',
                    detail: `${state.pending*5} hectares under construction`
                }
                : state.completed
                    ? {
                        text: 'Part of the public park is now open. The remaining land can be developed in a later phase.',
                        detail: `${state.completed*5} hectares delivered`
                    }
                    : null
    };
}
