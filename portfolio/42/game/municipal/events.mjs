
import * as C from './municipal-engine.mjs';
import * as O from './operating.mjs';
import {TERMS} from './bonds.mjs';

const sum = a =>
    a.reduce((x,y)=>x+y,0);

const copy = x =>
    JSON.parse(JSON.stringify(x));

const money = (n,bp) =>
    Math.round(n*bp/10000);

// Revenue factor, expense factor,
// construction factor, new coupon basis points.

const event = (title,factors) =>
    Object.freeze({
        title,
        factors:Object.freeze(factors)
    });

export const EVENTS = Object.freeze({

    calm:event(
        'Stable conditions',
        [10000,10000,10000,600]
    ),

    inflation:event(
        'Construction inflation',
        [10000,10500,11000,700]
    ),

    recession:event(
        'Municipal revenue slowdown',
        [8500,10000,10000,650]
    ),

    rates:event(
        'Borrowing costs rise',
        [10000,10000,10000,850]
    ),

    pressure:event(
        'Operating costs rise',
        [10000,11500,10000,600]
    ),

    recovery:event(
        'Revenue recovery',
        [11000,10000,10000,550]
    )
});

// Reproducible ten-year economic scenarios.

export const SCENARIOS = Object.freeze(
    Object.fromEntries(
        Object.entries({

            stable:[
                'calm','calm','calm','calm',
                'calm','calm','calm','calm',
                'calm','calm'
            ],

            mixed:[
                'calm','inflation','recession',
                'rates','pressure','recovery',
                'calm','inflation','recovery',
                'calm'
            ],

            stressed:[
                'calm','recession','inflation',
                'pressure','rates','recession',
                'pressure','inflation',
                'recovery','calm'
            ],

            recovery:[
                'calm','recession','recovery',
                'recovery','calm','rates',
                'calm','recovery','calm','calm'
            ]

        }).map(
            ([id,years])=>[
                id,Object.freeze(years)
            ]
        )
    )
);

// Initial state.

export function initial(
    scenario='mixed',
    base=O.BASE
){

    if(!Object.hasOwn(SCENARIOS,scenario))
        throw Error('Unknown scenario');

    return {
        ...O.initial(base),
        version:4,
        scenario,
        bonds:[]
    };
}

// Determine this year's economic event.

export function currentEvent(s){

    const id=
        SCENARIOS[s.scenario][s.year-1];

    const {
        title,

        factors:[
            revenue,
            expense,
            construction,
            rate
        ]

    }=EVENTS[id];

    return {
        id,title,revenue,
        expense,construction,rate
    };
}

// Annual operating budget and existing debt.

export function debtBudget(s){

    const e=currentEvent(s);

    const operating=O.budget({

        ...s,

        base:{

            revenue:money(
                s.base.revenue,e.revenue
            ),

            expense:money(
                s.base.expense,e.expense
            )
        }
    });

    let cash=operating.capitalCash;

    const rows=s.bonds.map(b=>{

        const scheduled=Math.floor(

            b.original*

            Math.min(
                s.year-b.issued,
                TERMS.years
            )/

            TERMS.years
        );

        const principalDue=Math.max(

            0,

            scheduled-
            (b.original-b.balance)
        );

        // Existing bonds retain their coupon.

        const interestDue=

            b.interestArrears+

            money(b.balance,b.rate);

        const interestPaid=Math.min(
            cash,interestDue
        );

        cash-=interestPaid;

        const principalPaid=Math.min(
            cash,principalDue
        );

        cash-=principalPaid;

        return {

            ...b,

            balance:
                b.balance-principalPaid,

            interestArrears:
                interestDue-interestPaid,

            principalDue,
            interestDue,
            interestPaid,
            principalPaid,

            principalArrears:
                principalDue-principalPaid
        };
    });

    return {

        operating,
        rows,

        debt:sum(
            rows.map(b=>b.balance)
        ),

        debtArrears:sum(
            rows.map(
                b=>b.interestArrears+
                    b.principalArrears
            )
        ),

        paid:sum(
            rows.map(
                b=>b.interestPaid+
                    b.principalPaid
            )
        ),

        capitalCash:cash
    };
}

const committed=s=>sum(
    Object.values(s.decisions)
        .map(d=>d.cost)
);

// Quote financing under current conditions.

function quote(s,total){

    const b=debtBudget(s);

    const rate=currentEvent(s).rate;

    const explicit=Object.hasOwn(s,'bondPlan');
    const reserve=s.capitalReserve??0;
    const borrowing=explicit
        ?s.bondPlan
        :Math.max(0,total-b.capitalCash);

    const nextService=

        sum(
            b.rows.map(x=>

                Math.max(

                    0,

                    Math.floor(

                        x.original*

                        Math.min(
                            s.year+1-x.issued,
                            TERMS.years
                        )/

                        TERMS.years

                    )-(x.original-x.balance)

                )

                +x.interestArrears

                +money(x.balance,x.rate)
            )
        )

        +Math.floor(
            borrowing/TERMS.years
        )

        +money(borrowing,rate);

    const eligible=

        borrowing===0||

        (
            b.operating.arrears===0&&

            b.debtArrears===0&&

            b.debt+borrowing<=
                TERMS.maxDebt&&

            nextService<=Math.floor(

                b.operating.revenue*

                TERMS.maxServiceShare
            )
        );

    return {

        borrowing,
        allowed:eligible&&(
            !explicit||
            total<=b.capitalCash+reserve+borrowing
        ),
        nextService,
        ownCash:b.capitalCash,
        rate
    };
}

export const financing=s=>
    quote(s,committed(s));

export function bondCapacity(s){

    if(s.finished)return 0;

    let lo=0,hi=TERMS.maxDebt;

    while(lo<hi){

        const mid=Math.floor((lo+hi+1)/2);

        if(quote({...s,bondPlan:mid},0).allowed)
            lo=mid;
        else
            hi=mid-1;
    }

    return lo;
}

export function setFinancing(s,amount){

    if(
        s.finished||
        !Number.isSafeInteger(amount)||
        amount<0
    )
        throw Error('Invalid bond amount');

    if(amount>bondCapacity(s))
        throw Error(
            'Bond amount exceeds borrowing capacity'
        );

    const n={
        ...s,
        capitalReserve:s.capitalReserve??0,
        bondPlan:amount
    };

    if(!financing(n).allowed)
        throw Error(
            'Revise capital commitments before reducing bonds'
        );

    return n;
}

// Generate decisions at current-year prices.

export function options(s,id){

    const other=

        committed(s)-

        (s.decisions[id]?.cost??0);

    return C.options({

        ...s,

        cash:Number.MAX_SAFE_INTEGER

    },id).map(o=>{

        const cost=money(

            o.cost,

            currentEvent(s).construction
        );

        const q=quote(
            s,other+cost
        );

        return {

            ...o,
            cost,

            affordable:q.allowed,

            borrowing:q.borrowing,

            additionalBorrowing:Math.max(

                0,

                q.borrowing-
                financing(s).borrowing
            ),

            nextService:q.nextService,

            rate:q.rate
        };
    });
}

// Record decisions and explicit bond approval.

export function decide(
    s,id,action,approveBond=false
){

    const o=options(s,id)
        .find(x=>x.id===action);

    if(!o?.affordable)
        throw Error('Decision unavailable');

    if(
        o.additionalBorrowing&&
        approveBond!==true
    )
        throw Error('Bond approval required');

    const n=copy(s);

    n.decisions[id]={

        action,

        phases:o.phases,

        cost:o.cost
    };

    return n;
}

// Settle all five infrastructure decisions.

export function settle(s){

    const b=debtBudget(s);

    const q=financing(s);

    const e=currentEvent(s);

    if(!q.allowed)
        throw Error('Borrowing limit exceeded');

    const explicit=Object.hasOwn(s,'bondPlan');
    const reserve=s.capitalReserve??0;

    const n=C.settle({

        ...s,

        cash:
            b.capitalCash+reserve+
            q.borrowing,

        history:[]
    });

    const bonds=b.rows.map(

        ({
            issued,
            original,
            balance,
            interestArrears,
            rate

        })=>({

            issued,
            original,
            balance,
            interestArrears,
            rate
        })

    ).filter(
        x=>x.balance||
            x.interestArrears
    );

    const closingReserve=explicit
        ?Math.max(
            0,
            reserve+q.borrowing-
            n.history[0].expenditure
        )
        :0;

    // Lock the current interest rate at issuance.

    if(q.borrowing){

        bonds.push({

            issued:s.year,

            original:q.borrowing,

            balance:q.borrowing,

            interestArrears:0,

            rate:q.rate
        });
    }

    return {

        ...s,

        year:n.year,

        finished:n.finished,

        cash:n.cash-closingReserve,

        ...(explicit?{
            capitalReserve:closingReserve,
            bondPlan:0
        }:{}),

        completed:n.completed,

        decisions:{},

        arrears:b.operating.arrears,

        bonds,

        history:[

            ...s.history,

            {

                ...n.history[0],

                openingCash:s.cash,

                closingCash:n.cash-closingReserve,

                ...(explicit?{
                    openingCapitalReserve:reserve,
                    closingCapitalReserve:closingReserve
                }:{}),

                openingArrears:s.arrears,

                event:e,

                operating:b.operating,

                debtService:b.rows,

                debtPaid:b.paid,

                debtArrears:b.debtArrears,

                borrowing:q.borrowing,

                closingDebt:sum(
                    bonds.map(x=>x.balance)
                )
            }
        ]
    };
}

// Deterministic reconstruction.

export function restore(
    history,
    scenario='mixed',
    base=O.BASE
){

    if(
        !Array.isArray(history)||
        history.length>10
    )
        throw Error('Invalid history');

    let s=initial(scenario,base);

    for(const r of history){

        if(Object.hasOwn(r,'openingCapitalReserve'))
            s=setFinancing(s,r.borrowing);

        for(const [id,d] of
            Object.entries(r.decisions)){

            s=decide(
                s,id,d.action,true
            );
        }

        s=settle(s);

        if(

            JSON.stringify(
                s.history.at(-1)
            )!==JSON.stringify(r)

        )
            throw Error('Record mismatch');
    }

    return s;
}

// Generate state-dependent challenges.
// These messages do not independently change
// financial or physical state.

export function challenges(s){

    if(s.finished)return [];

    const e=currentEvent(s);

    const b=debtBudget(s);

    const out=[];

    if(e.id!=='calm'){

        out.push({

            id:e.id,

            site:null,

            text:e.title+'.'
        });
    }

    for(const id of C.IDS){

        const p=C.status(s,id);

        const remaining=
            p.target-p.delivered;

        if(remaining){

            out.push({

                id:'unmet-'+id,

                site:id,

                text:
                    `${remaining.toLocaleString('en-US')} ${p.unit} remain to be delivered.`
            });
        }
    }

    if(
        b.operating.arrears||
        b.debtArrears
    ){

        out.push({

            id:'arrears',

            site:null,

            text:
                'Some financial obligations cannot be paid from available resources.'
        });
    }

    if(
        b.capitalCash+
        (s.capitalReserve??0)+
        (s.bondPlan??0)<10000000
    ){

        out.push({

            id:'low-cash',

            site:null,

            text:
                'Less than $10M is available for new capital investment.'
        });
    }

    return out;
}
