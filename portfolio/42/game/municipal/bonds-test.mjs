
import assert from 'node:assert/strict';

import {
    IDS
} from './municipal-engine.mjs';

import * as B from './bonds.mjs';

function finish(s){

    for(const id of IDS){

        if(!Object.hasOwn(s.decisions,id)){

            s=B.decide(

                s,id,

                s.completed[id]===3

                    ? 'continue'

                    : 'defer'
            );
        }
    }

    return B.settle(s);
}

let cases=0;
let rejected=0;
let issued=0;

// Verify all first-year combinations.

for(let k=0;k<243;k++){

    let s=B.initial();

    let ok=true;

    for(const [i,id] of IDS.entries()){

        const a=[
            'full','phase','defer'
        ][Math.floor(k/3**i)%3];

        const o=B.options(s,id)
            .find(x=>x.id===a);

        if(!o.affordable){

            assert.throws(
                ()=>B.decide(s,id,a,true)
            );

            ok=false;
            break;
        }

        if(o.additionalBorrowing){

            assert.throws(
                ()=>B.decide(s,id,a)
            );
        }

        s=B.decide(
            s,id,a,true
        );
    }

    if(!ok){

        rejected++;
        continue;
    }

    for(let y=1;y<=10;y++){

        const openingDebt=
            s.bonds.reduce(
                (a,b)=>a+b.balance,0
            );

        s=finish(s);

        const r=s.history.at(-1);

        const b=r.operating;

        // Cash reconciliation.

        assert.equal(

            s.cash,

            r.openingCash+
            b.revenue-
            b.paid-
            r.debtPaid+
            r.borrowing-
            r.expenditure
        );

        // Outstanding principal reconciliation.

        assert.equal(

            r.closingDebt,

            openingDebt-

            r.debtService.reduce(
                (a,b)=>a+b.principalPaid,0
            )

            +r.borrowing
        );

        assert.ok(s.cash>=0);

        assert.deepEqual(
            B.restore(s.history),s
        );

        if(r.borrowing)issued++;

        cases++;
    }
}

// Full development of all five projects.

let s=B.initial();

for(const id of IDS){

    s=B.decide(
        s,id,'full',true
    );
}

assert.equal(
    B.financing(s).borrowing,
    47000000
);

assert.equal(
    B.financing(s).nextService,
    5170000
);

// Revising a decision reduces planned issuance.

let revised=B.decide(
    s,'wastewater','defer'
);

assert.equal(
    B.financing(revised).borrowing,
    7000000
);

s=finish(s);

assert.equal(s.cash,0);

assert.equal(
    s.history[0].debtPaid,0
);

assert.equal(
    s.bonds[0].balance,
    47000000
);

// Stress test: preserve unpaid obligations.

let stress={

    ...s,

    base:{
        revenue:0,
        expense:120000000
    }
};

stress=finish(stress);

assert.equal(
    stress.bonds[0].balance,
    47000000
);

assert.equal(
    stress.bonds[0].interestArrears,
    2820000
);

assert.equal(
    stress.history.at(-1).debtArrears,
    5170000
);

assert.equal(
    B.options(stress,'roads')[0].borrowing,
    0
);

assert.throws(
    ()=>B.settle(B.initial())
);

// Test borrowing restriction under lower revenue.

let low=B.initial({

    revenue:20000000,

    expense:22000000
});

for(const id of IDS.slice(0,4)){

    low=B.decide(
        low,id,'full',true
    );
}

assert.throws(

    ()=>B.decide(
        low,'wastewater','full',true
    )
);

console.log({

    annualRecords:cases,

    rejected,

    issuanceYears:issued,

    approval:'PASS',

    revision:'PASS',

    arrears:'PASS',

    replay:'PASS'
});
