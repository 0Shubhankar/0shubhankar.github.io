
import assert from 'node:assert/strict';

import * as G from './game.mjs';

import * as E from './events.mjs';

import {
    IDS
} from './municipal-engine.mjs';

let years=0;
let decisions=0;

// Four economic scenarios.
// All first-year decision combinations.
// Subsequent deferral or service continuation.

for(const scenario of
    Object.keys(E.SCENARIOS)){

    for(let k=0;k<243;k++){

        let g=G.start(scenario);

        for(let y=1;y<=10;y++){

            for(const [i,id] of IDS.entries()){

                const wanted=y===1

                    ? [
                        'full','phase','defer'
                      ][Math.floor(k/3**i)%3]

                    : g.city.completed[id]===3

                        ? 'continue'

                        : 'defer';

                const before=JSON.stringify(g);

                g=G.choose(
                    g,id,wanted,true
                );

                decisions++;

                assert.equal(
                    g.log.length>0,true
                );

                assert.equal(

                    JSON.parse(before).city.year,

                    g.city.year
                );
            }

            const expected=E.settle(g.city);

            g=G.closeYear(g);

            assert.deepEqual(
                g.city,expected
            );

            assert.throws(
                ()=>G.closeYear(g)
            );

            const r=G.report(g);

            assert.equal(
                r.sites.length,5
            );

            assert.equal(

                r.finance.closingCash,

                g.city.cash
            );

            assert.equal(r.year,y);

            assert.equal(
                G.view(g).event,
                undefined
            );

            g=G.nextYear(g);

            years++;
        }

        assert.equal(
            g.mode,'finished'
        );

        assert.deepEqual(

            G.load(G.save(g)),

            g
        );
    }
}

// Incomplete annual decisions.

let g=G.start();

assert.throws(
    ()=>G.closeYear(g)
);

// Revise a previous decision.

g=G.choose(g,'park','full');

g=G.choose(g,'park','phase');

// Restore unfinished annual decisions.

assert.deepEqual(

    G.load(G.save(g)),

    g
);

assert.equal(

    G.view(g).available,

    98000000
);

// Borrowing requires explicit approval.

for(const id of IDS.filter(

    x=>x!=='park'&&x!=='wastewater'

))
    g=G.choose(g,id,'full',true);

assert.throws(

    ()=>G.choose(
        g,'wastewater','full'
    )
);

g=G.choose(

    g,'wastewater','full',true
);

// Invalid approval history must fail replay.

const bad=G.save(g);

bad.log.at(-1).approveBond=false;

assert.throws(
    ()=>G.load(bad)
);

console.log({

    years,

    decisions,

    replay:'PASS',

    revision:'PASS',

    approval:'PASS',

    outcomeGate:'PASS'
});
