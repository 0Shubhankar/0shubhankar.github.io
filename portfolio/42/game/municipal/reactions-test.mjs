
import assert from 'node:assert/strict';

import {
    IDS,initial,options,decide,settle
} from './municipal-engine.mjs';

import {
    annualReactions
} from './reactions.mjs';

let years=0;
let sites=0;

const kinds=new Set();

function check(s){

    const frozen=JSON.stringify(s);

    const r=annualReactions(s.history);

    // Reaction generation must not mutate the city.
    assert.equal(JSON.stringify(s),frozen);

    // The same history must produce the same reaction.
    assert.deepEqual(
        r,annualReactions(s.history)
    );

    const record=s.history.at(-1);

    assert.equal(r.year,record.year);
    assert.equal(r.finished,s.finished);

    assert.deepEqual(
        r.sites.map(x=>x.id),IDS
    );

    assert.equal(
        r.finance.closingCash,s.cash
    );

    assert.equal(
        r.finance.openingCash-
        r.finance.expenditure,
        s.cash
    );

    for(const x of r.sites){

        const o=record.outcomes
            .find(o=>o.id===x.id);

        assert.equal(x.total,o.total);
        assert.equal(x.delivered,o.delivered);
        assert.equal(x.remaining,o.remaining);

        assert.equal(
            x.before+x.delivered,x.total
        );

        assert.equal(
            x.total+x.remaining,x.target
        );

        assert.equal(
            x.visual.completedPhases,
            s.completed[x.id]
        );

        assert.equal(
            x.visual.previousPhases+
            record.decisions[x.id].phases,
            s.completed[x.id]
        );

        assert.equal(
            x.kind==='completed',
            o.delivered>0&&o.remaining===0
        );

        assert.equal(
            x.kind==='expanded',
            o.delivered>0&&o.remaining>0
        );

        assert.equal(
            x.kind==='ongoing',
            o.delivered===0&&o.remaining===0
        );

        assert.equal(
            x.kind==='deferred',
            o.delivered===0&&o.remaining>0
        );

        kinds.add(x.kind);
        sites++;
    }

    years++;
}

// Test all first-year combinations.
let affordable=0;

for(let k=0;k<243;k++){

    let s=initial();
    let valid=true;

    for(const [i,id] of IDS.entries()){

        const a=[
            'full','phase','defer'
        ][Math.floor(k/3**i)%3];

        if(!options(s,id)
            .find(o=>o.id===a)?.affordable){

            valid=false;
            break;
        }

        s=decide(s,id,a);
    }

    if(valid){
        check(settle(s));
        affordable++;
    }
}

// Test each infrastructure across ten years.
for(const focus of IDS){

    let s=initial();

    for(let y=1;y<=10;y++){

        for(const id of IDS){

            const a=s.completed[id]===3

                ? 'continue'

                : id===focus&&y<=3

                    ? 'phase'

                    : 'defer';

            s=decide(s,id,a);
        }

        s=settle(s);
        check(s);
    }
}

// All reaction categories must be covered.
assert.equal(kinds.size,4);

// Reject nonexistent or fabricated records.
assert.throws(()=>annualReactions([]));

let s=initial();

for(const id of IDS)
    s=decide(s,id,'defer');

s=settle(s);

s.history[0].outcomes[0].total=99;

assert.throws(
    ()=>annualReactions(s.history)
);

console.log(JSON.stringify({

    affordable,
    annualRecords:years,
    siteReactions:sites,
    kinds:[...kinds].sort(),
    replay:'PASS',
    tamperRejection:'PASS'

},null,2));
