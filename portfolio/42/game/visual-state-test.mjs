
import assert from 'node:assert/strict';

import {visualState} from './visual-state.mjs';

import {IDS} from './municipal/municipal-engine.mjs';

const empty=Object.fromEntries(
    IDS.map(id=>[id,0])
);

const expected={

    roads:[0,.25,.625,1],

    water:[0,2,5,8],

    park:[0,1,2,3],

    solar:[0,2,6,10],

    wastewater:[0,1,2,4]
};

let checks=0;

for(const id of IDS){

    for(let phase=0;phase<=3;phase++){

        const settled={
            ...empty,
            [id]:phase
        };

        const before=JSON.stringify(settled);

        assert.equal(
            visualState(settled)[id],
            expected[id][phase]
        );

        for(let preview=0;preview<=3-phase;preview++){

            const v=visualState(
                settled,id,preview
            );

            assert.equal(
                v[id],
                expected[id][phase+preview]
            );

            for(const other of IDS){

                if(other!==id){

                    assert.equal(v[other],0);
                }
            }

            assert.equal(
                JSON.stringify(settled),
                before
            );

            // Cancelling a preview restores
            // the exact settled condition.

            assert.equal(
                visualState(settled)[id],
                expected[id][phase]
            );

            checks++;
        }
    }
}

console.log(
    'PASS: '+checks+
    ' visual-state and preview cases'
);
