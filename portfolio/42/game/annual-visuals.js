import {visualState} from './visual-state.mjs';

import {THREE} from '../../../engines/uue/releases/1.6.0-rc.1/runtime.js';

export function installVisuals(
    engine,L,props
){
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

    

    

    const extra=new THREE.Group();

    extra.name='Municipal infrastructure';

    engine.view.scene.add(extra);

    // Roads: retain existing lane markings.
    // Remove damage progressively.

    const damage=props.groups.roads.children.filter(
        m=>m.geometry?.type==='ShapeGeometry'||
        (
            m.geometry?.type==='BoxGeometry'&&
            m.geometry.parameters.width<.3
        )
    );

    // Water: eight representative service points.
    // Each represents 2,500 household connections.

    const water=[];

    const homes=engine.state.buildings

        .filter(b=>

            b.type==='house'&&

            b.position.x<0&&

            b.id!==L.house.id
        )

        .sort((a,b)=>

            Math.hypot(
                a.position.x-L.tap.x,
                a.position.z-L.tap.z
            )-

            Math.hypot(
                b.position.x-L.tap.x,
                b.position.z-L.tap.z
            )
        );

    const taps=[L.tap,...homes.slice(0,7).map(

        h=>({

            x:h.position.x+8,

            z:h.position.z+
                h.dimensions.depth/2+5
        })
    )];

    if(taps.length!==8)
        throw Error(
            'Expected eight water service locations'
        );

    taps.forEach((t,i)=>{

        const g=new THREE.Group();

        extra.add(g);

        water.push(g);

        if(i>0){

            box(
                '#adb9b8',
                t.x,4.9,t.z,
                .55,3.6,.55,g
            );

            box(
                '#bfc6c3',
                t.x+.65,6.6,t.z,
                1.8,.42,.42,g
            );
        }

        mesh(

            new THREE.CylinderGeometry(
                .16,.25,2.6,12
            ),

            '#76c9e7',

            t.x+1.4,
            4.85,
            t.z,

            g
        );

        box(
            '#468ca6',
            t.x+1.4,3.5,t.z,
            1.8,.35,1.8,g
        );
    });

    // Solar: ten representative panels.
    // Two, four and four are added by phase.

    const solar=[];

    const c=L.civic;

    const wRoof=c.dimensions.width;
    const dRoof=c.dimensions.depth;

    for(let i=0;i<10;i++){

        const g=new THREE.Group();

        extra.add(g);

        solar.push(g);

        const column=i%5;

        const row=Math.floor(i/5);

        const x=

            c.position.x+

            (column-2)*wRoof*.16;

        const z=

            c.position.z+

            (row-.5)*dRoof*.42;

        const y=4+c.dimensions.height+2;

        const m=box(
            '#244f83',
            x,y,z,
            wRoof*.13,.35,dRoof*.34,g
        );

        m.rotation.x=-.08;

        // Panel frames and support structure.

        box(
            '#a0a9ae',
            x,y-.42,z,
            wRoof*.12,.45,.65,g
        );
    }

    // Wastewater: four representative
    // additional treatment modules.
    // Each represents 5 MLD.

    const treatment=[];

    const f=L.wastewater;

    for(let i=0;i<4;i++){

        const g=new THREE.Group();

        extra.add(g);

        treatment.push(g);

        const x=f.x-13.5;

        const z=f.z-19+i*12;

        mesh(

            new THREE.CylinderGeometry(
                3,3,3.2,20
            ),

            '#aab9b4',

            x,5.1,z,g
        );

        mesh(

            new THREE.CylinderGeometry(
                2.65,2.65,.22,20
            ),

            '#468e99',

            x,6.83,z,g
        );

        box(
            '#c3c9c1',
            x,7,z,
            6,.35,.7,g
        );
    }

    // Existing pollution cues.

    const pollution=
        props.groups.wastewater.children.filter(

            m=>m.geometry?.type===
                'ShapeGeometry'
        );

    // Convert infrastructure state into geometry.
    // No independent visual state is maintained.

    function sync(
        completed,
        previewId=null,
        previewPhases=0
    ){

        const v=visualState(
            completed,
            previewId,
            previewPhases
        );

        // Public park.

        phases.forEach(({g,build},i)=>{

            g.visible=i<v.park;

            build.visible=false;
        });

        // Road damage decreases with delivery.

        damage.forEach(m=>{

            const z=m.position.z;

            const progress=

                Math.max(
                    0,
                    Math.min(1,(z+150)/120)
                );

            m.visible=

                v.roads<1&&

                progress>=v.roads;
        });

        // Water connections.

        water.forEach((g,i)=>{

            g.visible=i<v.water;
        });

        // Solar installations.

        solar.forEach((g,i)=>{

            g.visible=i<v.solar;
        });

        // Treatment capacity.

        treatment.forEach((g,i)=>{

            g.visible=i<v.wastewater;
        });

        // Pollution gradually disappears.

        pollution.forEach((m,i)=>{

            m.visible=

                i>=Math.floor(

                    pollution.length*

                    v.wastewater/4
                );
        });

        engine.view.renderer.shadowMap
            .needsUpdate=true;

        engine.invalidate();
    }

    return {sync};
}
