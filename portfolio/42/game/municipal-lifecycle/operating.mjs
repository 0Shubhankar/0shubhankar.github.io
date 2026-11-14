import * as C from './municipal-engine.mjs';

export const BASE = Object.freeze({
    revenue:25000000,
    expense:22000000
});

// Full-scale annual amounts:
// [revenue, expenditure savings, operating costs]

export const RATES = Object.freeze({
    roads:      [0,0,800000],
    water:      [2400000,0,900000],
    park:       [0,0,500000],
    solar:      [0,1500000,300000],
    wastewater: [600000,0,1200000]
});

const copy=x=>JSON.parse(JSON.stringify(x));

const sum=a=>a.reduce((x,y)=>x+y,0);

// Calculate annual operating finances.

export function budget(s){

    const rows=C.IDS.map(id=>{

        const {delivered,target}=C.status(s,id);

        const [revenue,savings,cost]=
            RATES[id].map(
                v=>Math.round(v*delivered/C.originalTarget(id))
            );

        return {id,revenue,savings,cost};
    });

    const revenue=
        s.base.revenue+
        sum(rows.map(r=>r.revenue));

    const savings=
        sum(rows.map(r=>r.savings));

    const expense=
        s.base.expense+
        sum(rows.map(r=>r.cost))-
        savings;

    const due=s.arrears+expense;

    const resources=s.cash+revenue;

    const paid=Math.min(resources,due);

    return {
        rows,
        revenue,
        savings,
        expense,

        net:revenue-expense,

        paid,

        arrears:due-paid,

        capitalCash:resources-paid
    };
}

// Initial municipal state with operating budget.

export function initial(base=BASE){

    if(
        !Number.isSafeInteger(base.revenue)||
        !Number.isSafeInteger(base.expense)||
        base.revenue<0||
        base.expense<1500000||
        base.revenue>1e9||
        base.expense>1e9
    ){
        throw Error('Invalid base budget');
    }

    return {
        ...C.initial(),
        version:2,
        base:copy(base),
        arrears:0
    };
}

// Reuse the existing capital investment engine.

function capital(s){

    return {
        ...s,
        cash:budget(s).capitalCash,
        history:[]
    };
}

export function options(s,id){

    return C.options(capital(s),id);
}

export function available(s){

    return C.available(capital(s));
}

export function decide(s,id,action){

    return {
        ...s,
        decisions:C.decide(
            capital(s),id,action
        ).decisions
    };
}

// One collective annual settlement.

export function settle(s){

    const b=budget(s);

    const n=C.settle(capital(s));

    const r=n.history[0];

    return {

        ...s,

        year:n.year,

        finished:n.finished,

        cash:n.cash,

        arrears:b.arrears,

        completed:n.completed,

        decisions:{},

        history:[
            ...s.history,
            {
                ...r,

                openingCash:s.cash,

                operating:b,

                openingArrears:s.arrears
            }
        ]
    };
}

// Reconstruct financial history.

export function restore(history,base=BASE){

    if(
        !Array.isArray(history)||
        history.length>10
    ){
        throw Error('Invalid history');
    }

    let s=initial(base);

    for(const r of history){

        for(const [id,d] of
            Object.entries(r.decisions)){

            s=decide(s,id,d.action);
        }

        s=settle(s);

        if(
            JSON.stringify(s.history.at(-1))!==
            JSON.stringify(r)
        ){
            throw Error('Record mismatch');
        }
    }

    return s;
}
