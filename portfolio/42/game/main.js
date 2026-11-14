
import {THREE} from '../../../engines/uue/releases/1.6.0-rc.1/runtime.js';

import {CityEngine} from '../../../engines/uue/releases/1.6.0-rc.1/runtime.js';

import {defaultCity as config} from '../../../engines/uue/releases/1.6.0-rc.1/runtime.js';

import {
    locations
} from './layout.mjs';

import {
    installDeficiencies
} from './scenery.js';

import {
    installVisuals
} from './annual-visuals.js';

import {
    installGame
} from './play.js';

const $=id=>document.getElementById(id);

const v=a=>new THREE.Vector3(...a);

const ease=t=>t*t*(3-2*t);

try{

    const engine=new CityEngine(

        $('viewport'),

        config,

        ()=>{}
    );

    const L=locations(engine.state);

    const props=installDeficiencies(
        engine,L
    );

    const visual=installVisuals(
        engine,L,props
    );

    const controls=engine.camera.controls;

    const camera=engine.view.camera;

    const min=controls.minDistance;

    let pacing='intro';
    let night=false;

    let raf=0;

    let playing=false;
    let paused=false;

    let seq=[];

    let index=0;
    let elapsed=0;
    let last=0;

    let from,aim,done;

    // Preserve UUE day/night controls.

    function light(){

        engine.view.setDayNight(night);

        engine.activity.setNight(night);

        engine.invalidate();

        $('lighting').textContent=

            night

                ? 'Day mode'

                : 'Night mode';

        $('lighting').setAttribute(

            'aria-pressed',

            String(night)
        );
    }

    light();

    $('lighting').onclick=()=>{

        night=!night;

        light();
    };

    engine.activity.setLevel('high');

    engine.view.renderer.setPixelRatio(

        Math.min(devicePixelRatio||1,1)
    );

    function pose(p,t){

        camera.position.copy(p);

        controls.target.copy(t);

        controls.update();

        engine.invalidate();
    }

    function snap(s){

        const t=v(s.target);

        pose(

            t.clone().add(v(s.offset)),

            t
        );
    }

    function startScene(){

        elapsed=0;
        last=0;

        from=camera.position.clone();

        aim=controls.target.clone();

        $('title').textContent=
            seq[index].title;

        $('words').textContent=
            pacing==='intro'
                ? ''
                : seq[index].text;

        $('detail').textContent=
            pacing==='intro'
                ? ''
                : (seq[index].detail||'');

        $('progress').style.setProperty(

            '--progress','0%'
        );
    }

    function finish(){

        playing=false;

        cancelAnimationFrame(raf);

        controls.enabled=true;

        controls.minDistance=Math.min(

            min,

            camera.position.distanceTo(
                controls.target
            )
        );

        controls.update();

        engine.invalidate();

        $('story').hidden=true;

        $('vignette').hidden=true;

        done();
    }

    function tick(now){

        if(!playing)return;

        if(last&&!paused){

            elapsed+=Math.min(

                (now-last)/1000,

                .08
            );
        }

        last=now;

        const s=seq[index];

        const travel=

            pacing==='intro'

                ? s.travel

                : pacing==='inspection'

                    ? 0.95

                    : 1.15;

        const t=v(s.target);

        const dest=t.clone().add(
            v(s.offset)
        );

        const k=ease(

            Math.min(
                1,elapsed/travel
            )
        );

        const p=from.clone().lerp(
            dest,k
        );

        p.y+=Math.sin(Math.PI*k)*

            Math.min(

                105,

                from.distanceTo(dest)*.18
            );

        pose(

            p,

            aim.clone().lerp(t,k)
        );

        if(pacing==='intro'){

            const reading=Math.max(
                0,elapsed-travel*.65
            );

            $('words').textContent=

                s.text.slice(
                    0,
                    Math.floor(reading*42)
                );

            if(reading*42>=s.text.length){

                $('detail').textContent=
                    s.detail||'';
            }
        }

        const total=travel+(

            pacing==='intro'

                ? Math.max(
                    s.hold,
                    s.text.length/42+1
                )

                : pacing==='inspection'

                    ? 0

                    : Math.max(
                        1.8,
                        s.text.length/55
                    )
        );

        $('progress').style.setProperty(

            '--progress',

            `${Math.min(100,elapsed/total*100)}%`
        );

        if(elapsed>=total){

            if(index===seq.length-1){

                finish();
                return;
            }

            index++;

            startScene();
        }

        raf=requestAnimationFrame(tick);
    }

    // Reusable cinematic player.
    // Used for introduction, inspection
    // and annual outcome reporting.

    function visit(scenes,callback,mode='inspection'){

        pacing=mode;

        if(mode==='inspection' && scenes.length>1)
            pacing='outcome';
    

        cancelAnimationFrame(raf);

        seq=scenes;

        done=callback;

        index=0;

        paused=false;
        playing=true;

        controls.enabled=false;

        controls.minDistance=12;

        $('story').hidden=pacing==='inspection';

        $('vignette').hidden=pacing==='inspection';

        $('free').hidden=true;

        $('chapter').textContent=
            'RIVERBEND';

        $('pause').textContent='Pause';

        $('skip').textContent='Skip';

        startScene();

        raf=requestAnimationFrame(tick);
    }

    $('pause').onclick=()=>{

        paused=!paused;

        $('pause').textContent=

            paused?'Resume':'Pause';
    };

    $('next').onclick=()=>{

        snap(seq[index]);

        if(index===seq.length-1){

            finish();

        }else{

            index++;

            paused=false;

            $('pause').textContent=
                'Pause';

            startScene();
        }
    };

    $('skip').onclick=()=>{

        snap(seq.at(-1));

        finish();
    };

    const game=installGame(

        engine,

        L,

        visual,

        visit
    );

    window.addEventListener(

        'pagehide',

        ()=>{

            cancelAnimationFrame(raf);

            engine.dispose();
        },

        {once:true}
    );

    // Show the original introduction only
    // for a new game. Resume existing progress.

    visual.sync({
        roads:0,
        water:0,
        park:0,
        solar:0,
        wastewater:0
    });

    visit(L.scenes,game.enter,'intro');

    }catch(e){

    $('error').hidden=false;

    $('error').textContent=

        'Project 42 could not start: '+

        e.message;

    console.error(e);
}
