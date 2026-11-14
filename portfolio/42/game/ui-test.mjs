
import assert from 'node:assert/strict';

import {
    installGame
} from './play.js';

import * as G from './municipal/game.mjs';

// Minimal test DOM.

class El{

    constructor(){

        this.children=[];
        this.hidden=false;
        this.textContent='';
        this.disabled=false;
    }

    append(...x){

        this.children.push(...x);
    }

    replaceChildren(){

        this.children=[];
    }

    insertBefore(x){

        this.append(x);
    }

    setAttribute(k,v){(this.attrs??={})[k]=v;}
}

const body=new El();

const header=new El();

const lighting=new El();

let record=null;

globalThis.document={

    createElement:()=>new El(),

    body,

    querySelector:()=>header,

    getElementById:()=>lighting
};

globalThis.localStorage={

    getItem:()=>record,

    setItem:(k,v)=>{

        record=v;
    }
};

const L={

    scenes:[

        'overview',

        'roads',

        'water',

        'park',

        'solar',

        'wastewater',

        'mandate'

    ].map(id=>({

        id,title:id,text:id
    }))
};

let visits=[];

let snapshots=[];

const visual={

    sync:(...a)=>snapshots.push(a)
};

const visit=(s,cb)=>{

    visits.push(s);

    cb();
};

let api=installGame(

    {},L,visual,visit
);

assert.ok(body.children.at(-1).hidden);
assert.ok(body.children.at(-2).hidden);

api.enter();

assert.ok(!body.children.at(-2).hidden);

assert.ok(
    body.children.at(-2).children.some(
        x=>x.textContent==='$103M'
    )
);

assert.ok(
    body.children.at(-2).children.find(
        x=>x.textContent.startsWith('Review year')
    ).disabled
);

let panel=body.children.at(-1);

function click(text){

    const b=[...panel.children,...body.children.at(-2).children].find(

        x=>x.textContent.startsWith(text)

            &&x.onclick
    );

    assert.ok(b,text);

    assert.equal(b.disabled,false);

    b.onclick();
}

// Cannot settle before all five decisions.

assert.ok(

    !panel.children.some(

        x=>x.textContent==='Review year'
    )
);

// Full park preview and confirmation.

click('Public park');

click('Develop remaining park');

assert.equal(record,null);

click('Confirm decision');

let game=G.load(JSON.parse(record));

assert.equal(

    game.city.decisions.park.cost,

    15000000
);

assert.equal(game.city.completed.park,0);

assert.equal(
    panel.children.find(
        x=>x.textContent==='Public park'
    ).attrs['data-decided'],
    'true'
);

assert.ok(
    body.children.at(-2).children.some(
        x=>x.textContent==='$88M'
    )
);

// Revise the decision before settlement.

click('Public park');

click('Develop next park section');

click('Confirm decision');

assert.equal(

    G.load(JSON.parse(record))
        .city.decisions.park.cost,

    5000000
);

// Reload unfinished decisions.

api=installGame({},L,visual,visit);

panel=body.children.at(-1);

assert.ok(api.restored);

api.enter();

// Complete remaining infrastructure decisions.

for(const name of [

    'Roads',

    'Water supply',

    'Rooftop solar',

    'Wastewater'
]){

    click(name);

    click('Defer investment');

    click('Confirm decision');
}

click('Review year');

game=G.load(JSON.parse(record));

assert.equal(game.mode,'outcome');

assert.equal(game.city.cash,98000000);

assert.equal(game.city.completed.park,1);

assert.equal(visits.at(-1).length,6);

// Reload during outcome review.

api=installGame({},L,visual,visit);

panel=body.children.at(-1);

api.enter();

click('Begin next year');

game=G.load(JSON.parse(record));

assert.equal(game.city.year,2);

assert.equal(game.city.history.length,1);

// Complete ten annual gameplay rounds.

for(let y=2;y<=10;y++){

    for(const name of [

        'Roads',

        'Water supply',

        'Public park',

        'Rooftop solar',

        'Wastewater'

    ]){

        click(name);

        click('Defer investment');

        click('Confirm decision');
    }

    click('Review year');

    click(

        y===10

            ? 'View final outcome'

            : 'Begin next year'
    );
}

game=G.load(JSON.parse(record));

assert.equal(game.mode,'finished');

assert.equal(game.city.history.length,10);

assert.equal(game.city.completed.park,1);

console.log(

    'PASS: five-site UI, revisions, draft and outcome reload, ten-year flow'
);
