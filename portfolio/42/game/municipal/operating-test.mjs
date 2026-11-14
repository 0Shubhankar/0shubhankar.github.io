
import assert from 'node:assert/strict';

import {
    IDS
} from './municipal-engine.mjs';

import * as O from './operating.mjs';

function finish(s,choices={}){

    for(const id of IDS){

        s=O.decide(

            s,id,

            choices[id]??(

                s.completed[id]===3

                    ? 'continue'

                    : 'defer'
            )
        );
    }

    return O.settle(s);
}

// Initial operating surplus.

let s=O.initial();

assert.equal(
    O.available(s),103000000
);

// Park construction and operating costs.

s=finish(s,{park:'full'});

assert.equal(s.cash,88000000);

assert.equal(
    s.history[0].operating.rows
        .find(r=>r.id==='park').cost,
    0
);

assert.equal(
    O.budget(s).rows
        .find(r=>r.id==='park').cost,
    500000
);

s=finish(s);

assert.equal(s.cash,90500000);

// Test all first-year decision combinations
// and subsequent annual operating budgets.

let cases=0;
let rejected=0;

for(let k=0;k<243;k++){

    let s=O.initial();
    let ok=true;

    for(const [i,id] of IDS.entries()){

        const a=[
            'full','phase','defer'
        ][Math.floor(k/3**i)%3];

        if(!O.options(s,id)
            .find(o=>o.id===a).affordable){

            ok=false;
            break;
        }

        s=O.decide(s,id,a);
    }

    if(!ok){

        rejected++;
        continue;
    }

    for(let y=1;y<=10;y++){

        s=y===1
            ? O.settle(s)
            : finish(s);

        const r=s.history.at(-1);
        const b=r.operating;

        assert.equal(
            s.cash,

            r.openingCash+
            b.revenue-
            b.paid-
            r.expenditure
        );

        assert.equal(
            s.arrears,

            r.openingArrears+
            b.expense-
            b.paid
        );

        assert.deepEqual(
            O.restore(s.history),s
        );

        assert.ok(s.cash>=0);

        cases++;
    }
}

// Financial distress without automatic borrowing.

let stress=O.initial({
    revenue:0,
    expense:120000000
});

assert.equal(
    O.available(stress),0
);

assert.throws(
    ()=>O.decide(stress,'park','phase')
);

stress=finish(stress);

assert.equal(stress.cash,0);

assert.equal(
    stress.arrears,20000000
);

stress=finish(stress);

assert.equal(
    stress.arrears,140000000
);

assert.deepEqual(
    O.restore(stress.history,stress.base),
    stress
);

console.log({

    annualRecords:cases,

    rejected,

    parkTiming:'PASS',

    arrears:'PASS',

    replay:'PASS'
});
