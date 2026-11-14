
import assert from 'node:assert/strict';
import * as G from './game.mjs';
import * as E from './events.mjs';
import {IDS} from './municipal-engine.mjs';

function close(g){

    for(const id of IDS){

        if(!g.city.decisions[id]){

            g=G.choose(
                g,id,
                g.city.completed[id]===3
                    ?'continue':'defer'
            );
        }
    }

    return G.closeYear(g);
}

let g=G.start('stable');

const legacy=G.choose(g,'roads','full');

assert.deepEqual(
    G.load(G.save(legacy)),legacy
);

g=G.finance(g,20000000);

assert.equal(G.view(g).available,123000000);
assert.equal(g.city.bonds.length,0);

g=G.choose(g,'park','phase');

assert.equal(G.view(g).available,118000000);

g=close(g);

assert.equal(g.city.cash,103000000);
assert.equal(g.city.capitalReserve,15000000);
assert.equal(g.city.bonds[0].balance,20000000);
assert.equal(g.city.history[0].debtPaid,0);

assert.deepEqual(
    E.restore(g.city.history,'stable'),
    g.city
);

assert.deepEqual(G.load(G.save(g)),g);

g=G.nextYear(g);

assert.equal(g.city.bondPlan,0);
assert.equal(E.debtBudget(g.city).paid,2200000);
assert.equal(E.bondCapacity(g.city),31000000);

assert.throws(()=>G.finance(g,50000000));
assert.throws(()=>G.finance(g,-1));
assert.throws(()=>G.finance(g,1.5));

g=close(g);

assert.equal(g.city.capitalReserve,15000000);
assert.equal(g.city.bonds[0].balance,19000000);
assert.deepEqual(G.load(G.save(g)),g);

let h=G.finance(G.start(),0);

for(const id of ['roads','water','park'])
    h=G.choose(h,id,'full');

assert.throws(
    ()=>G.choose(h,'solar','full',true)
);

h=G.finance(h,47000000);

h=G.choose(h,'solar','full');
h=G.choose(h,'wastewater','full');

assert.throws(()=>G.finance(h,46000000));

h=close(h);

assert.equal(h.city.cash,0);
assert.equal(h.city.capitalReserve,0);
assert.equal(h.city.bonds[0].balance,47000000);

assert.deepEqual(G.load(G.save(h)),h);

let stress=G.finance(G.start('stable'),10000000);

stress=G.nextYear(close(stress));

let state={
    ...stress.city,
    cash:0,
    base:{
        revenue:0,
        expense:120000000
    }
};

assert.equal(E.bondCapacity(state),0);

for(const id of IDS)
    state=E.decide(state,id,'defer');

state=E.settle(state);

assert.equal(state.capitalReserve,10000000);
assert.equal(state.arrears,120000000);

assert.equal(
    state.bonds[0].interestArrears,
    600000
);

let old=G.start();

for(const id of IDS)
    old=G.choose(old,id,'full',true);

old=G.finance(
    old,
    E.financing(old.city).borrowing
);

assert.deepEqual(G.load(G.save(old)),old);
assert.equal(close(old).city.cash,0);

let zero={
    ...E.initial('stable'),
    cash:0
};

zero=E.setFinancing(zero,10000000);

assert.equal(
    E.options(zero,'roads')
        .find(o=>o.id==='phase').affordable,
    true
);

let years=0;

for(const scenario of Object.keys(E.SCENARIOS)){

    for(const strategy of [
        'cash-only','moderate','maximum'
    ]){

        let x=G.start(scenario);

        for(let y=1;y<=10;y++){

            const limit=E.bondCapacity(x.city);

            const plan=
                strategy==='cash-only'
                    ?0
                    :strategy==='moderate'
                        ?Math.min(10000000,limit)
                        :limit;

            x=G.finance(x,plan);

            const before=x.city;

            for(const id of IDS){

                const opts=E.options(x.city,id);

                const o=

                    opts.find(
                        o=>o.affordable&&o.id==='full'
                    )??

                    opts.find(
                        o=>o.affordable&&o.id==='phase'
                    )??

                    opts.find(o=>o.affordable);

                x=G.choose(x,id,o.id);
            }

            x=G.closeYear(x);

            const r=x.city.history.at(-1);

            assert.equal(

                x.city.cash+x.city.capitalReserve,

                r.openingCash+
                r.openingCapitalReserve+
                r.operating.revenue-
                r.operating.paid-
                r.debtPaid+
                r.borrowing-
                r.expenditure
            );

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

            assert.ok(
                x.city.cash>=0&&
                x.city.capitalReserve>=0
            );

            x=G.nextYear(x);

            years++;
        }

        assert.deepEqual(
            G.load(G.save(x)),x
        );

        assert.deepEqual(
            E.restore(x.city.history,scenario),
            x.city
        );
    }
}

console.log(
    'PASS: independent bonds, restricted reserve, borrowing limits, legacy replay; '+
    years+' annual cycles'
);
