
import assert from 'node:assert/strict';

import * as C from './municipal-engine.mjs';
import * as B from './bonds.mjs';
import * as E from './events.mjs';

function finish(api,s){

    for(const id of C.unresolved(s)){

        s=api.decide(

            s,id,

            s.completed[id]===3

                ? 'continue'

                : 'defer',

            true
        );
    }

    return api.settle(s);
}

let years=0;

// Four scenarios and all 243
// initial decision combinations.

for(const scenario of Object.keys(E.SCENARIOS)){

    for(let k=0;k<243;k++){

        let s=E.initial(scenario);

        let old=B.initial();

        for(const [i,id] of C.IDS.entries()){

            const a=[
                'full','phase','defer'
            ][Math.floor(k/3**i)%3];

            s=E.decide(s,id,a,true);

            old=B.decide(old,id,a,true);
        }

        for(let y=1;y<=10;y++){

            const before=s;

            s=finish(E,s);

            old=finish(B,old);

            const r=s.history.at(-1);

            // Cash reconciliation.

            assert.equal(

                s.cash,

                r.openingCash+

                r.operating.revenue-

                r.operating.paid-

                r.debtPaid+

                r.borrowing-

                r.expenditure
            );

            // Principal reconciliation.

            assert.equal(

                r.closingDebt,

                before.bonds.reduce(
                    (a,b)=>a+b.balance,0
                )-

                r.debtService.reduce(
                    (a,b)=>a+b.principalPaid,0
                )+

                r.borrowing
            );

            assert.deepEqual(

                E.restore(
                    s.history,scenario
                ),

                s
            );

            assert.ok(s.cash>=0);

            // Neutral scenario must preserve
            // the previous financial results.

            if(scenario==='stable'){

                assert.equal(
                    s.cash,old.cash
                );

                assert.deepEqual(
                    s.completed,
                    old.completed
                );

                assert.equal(

                    r.closingDebt,

                    old.history.at(-1)
                        .closingDebt
                );
            }

            years++;
        }
    }
}

// Inflation increases unbuilt project costs.

let s=finish(E,E.initial());

assert.equal(

    E.options(s,'park')
        .find(x=>x.id==='full').cost,

    16500000
);

assert.equal(

    E.debtBudget(s).operating.expense,

    23100000
);

assert.equal(
    E.currentEvent(s).rate,700
);

// Existing bonds retain their coupon.

let p=E.initial();

for(const id of C.IDS)
    p=E.decide(p,id,'full',true);

p=E.settle(p);

assert.equal(
    p.bonds[0].rate,600
);

assert.equal(

    E.debtBudget(p).rows[0]
        .interestDue,

    2820000
);

// Completed park no longer creates
// an unmet infrastructure warning.

assert.equal(

    E.challenges(p)
        .some(x=>x.site==='park'),

    false
);

// Test issuance during inflation.

let n=E.initial();

for(const id of [
    'roads','water','solar'
])
    n=E.decide(n,id,'full',true);

n=finish(E,n);

for(const id of [
    'park','wastewater'
])
    n=E.decide(n,id,'full',true);

n=finish(E,n);

assert.equal(
    n.bonds[0].rate,700
);

// Coupon remains 7% in next year's
// different economic environment.

assert.equal(

    E.debtBudget(n).rows[0]
        .interestDue,

    Math.round(
        n.bonds[0].balance*.07
    )
);

// Altered event records must fail replay.

const bad=structuredClone(n.history);

bad[0].event.rate=1;

assert.throws(
    ()=>E.restore(bad)
);

console.log({

    annualRecords:years,

    stableParity:'PASS',

    eventPricing:'PASS',

    fixedCoupon:'PASS',

    replay:'PASS',

    challenges:'PASS'
});
