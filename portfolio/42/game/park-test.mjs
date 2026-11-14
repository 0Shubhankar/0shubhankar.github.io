
import assert from 'node:assert/strict';

import {
    initial, options, commit, settle, restore
} from './park-state.mjs';

for (const first of ['full','phase','defer']) {
    const s = initial();
    const a = commit(s,first);

    assert.equal(s.cash,100);

    assert.equal(
        a.cash,
        100-(first==='full'?15:first==='phase'?5:0)
    );

    assert.equal(a.completed,0);
    assert.deepEqual(restore(a.history),a);

    if (a.pending) {
        assert.throws(()=>commit(a,'phase'));

        const b = settle(a);

        assert.equal(b.completed,a.pending);
        assert.equal(b.cash,a.cash);

        assert.deepEqual(restore(b.history),b);
    }
}

let s = initial();

for (let i=0;i<3;i++)
    s = settle(commit(s,'phase'));

assert.equal(s.completed,3);
assert.equal(s.cash,85);
assert.equal(s.year,4);
assert.equal(options(s).length,0);

assert.throws(()=>commit(s,'phase'));
assert.throws(()=>settle(s));

assert.deepEqual(restore(s.history),s);

assert.equal(
    settle(commit(initial(),'full')).cash,s.cash
);

assert.throws(()=>restore([
    {year:1,action:'phase',cost:0,phases:1}
]));

console.log(
    'PASS: park decisions, construction, cost parity, history replay'
);
