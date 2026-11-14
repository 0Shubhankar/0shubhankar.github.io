
import assert from 'node:assert/strict';

import {
    IDS,
    PROJECTS,
    initial,
    available,
    status,
    options,
    decide,
    unresolved,
    settle,
    restore
} from './municipal-engine.mjs';

let cases=0;
let rejected=0;

// Test all first-year decision combinations

for(let k=0;k<243;k++){

    let s=initial();

    const original=JSON.stringify(s);

    let valid=true;

    for(const [i,id] of IDS.entries()){

        const action=[
            'full','phase','defer'
        ][Math.floor(k/3**i)%3];

        const o=options(s,id)
            .find(o=>o.id===action);

        if(!o.affordable){

            assert.throws(
                ()=>decide(s,id,action)
            );

            valid=false;
            break;
        }

        const old=JSON.stringify(s);
        const next=decide(s,id,action);

        assert.equal(
            JSON.stringify(s),old
        );

        s=next;
    }

    if(!valid){
        rejected++;
        continue;
    }

    assert.equal(
        original,JSON.stringify(initial())
    );

    assert.equal(unresolved(s).length,0);

    const cash=available(s);
    const n=settle(s);

    assert.equal(n.cash,cash);
    assert.equal(n.year,2);

    assert.deepEqual(
        restore(n.history),n
    );

    assert.equal(
        Object.keys(n.decisions).length,0
    );

    for(const id of IDS)
        assert.ok(
            status(n,id).delivered<=
            status(n,id).target
        );

    cases++;
}

// Incomplete annual cycle and invalid project

let s=initial();

assert.throws(()=>settle(s));

assert.throws(
    ()=>decide(s,'unknown','full')
);

// Decision revision releases reserved funds

s=decide(s,'park','full');

assert.equal(
    available(s),85000000
);

s=decide(s,'park','phase');

assert.equal(
    available(s),95000000
);

for(const id of unresolved(s))
    s=decide(s,id,'defer');

s=settle(s);

assert.equal(
    status(s,'park').delivered,5
);

// Complete ten-year simulation

for(let y=2;y<=10;y++){

    for(const id of IDS)
        s=decide(
            s,id,

            id==='park'&&s.completed.park<3
            ? 'phase'

            : s.completed[id]===3
            ? 'continue'

            : 'defer'
        );

    s=settle(s);
}

assert.equal(s.cash,85000000);
assert.equal(s.completed.park,3);
assert.equal(s.history.length,10);

assert.ok(s.finished);

assert.deepEqual(
    restore(s.history),s
);

assert.throws(()=>settle(s));

assert.throws(
    ()=>decide(s,'park','phase')
);

console.log(JSON.stringify({
    combinations:243,
    affordable:cases,
    rejected,
    tenYearReplay:'PASS',
    revision:'PASS'
},null,2));
