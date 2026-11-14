import * as C from './municipal-engine.mjs';
import * as O from './operating.mjs';

export const TERMS = Object.freeze({
    years:20,
    rate:0.06,
    maxDebt:50000000,
    maxServiceShare:0.25
});

const sum = a => a.reduce((x,y)=>x+y,0);

const copy = x => JSON.parse(JSON.stringify(x));

// Municipal state with bond financing.

export function initial(base=O.BASE){

    return {
        ...O.initial(base),
        version:3,
        bonds:[]
    };
}

// Calculate existing debt obligations.

export function debtBudget(s){

    const operating=O.budget(s);

    let cash=operating.capitalCash;

    const rows=s.bonds.map(b=>{

        const age=s.year-b.issued;

        const scheduled=Math.floor(
            b.original*
            Math.min(age,TERMS.years)/
            TERMS.years
        );

        const principalDue=Math.max(
            0,
            scheduled-(b.original-b.balance)
        );

        const interestDue=
            b.interestArrears+
            Math.round(
                b.balance*TERMS.rate
            );

        // Operating obligations have already
        // been paid. Pay existing bond obligations.

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
            principalPaid,
            interestPaid,

            principalArrears:
                principalDue-principalPaid
        };
    });

    const debt=sum(
        rows.map(b=>b.balance)
    );

    const debtArrears=sum(
        rows.map(
            b=>b.interestArrears+
                b.principalArrears
        )
    );

    const paid=sum(
        rows.map(
            b=>b.interestPaid+
                b.principalPaid
        )
    );

    return {
        operating,
        rows,
        debt,
        debtArrears,
        paid,
        capitalCash:cash
    };
}

// Project the next year's scheduled payment.

function projected(b,year){

    const scheduled=Math.floor(
        b.original*
        Math.min(
            year-b.issued,
            TERMS.years
        )/TERMS.years
    );

    return Math.max(
        0,
        scheduled-(b.original-b.balance)
    )
    +b.interestArrears
    +Math.round(
        b.balance*TERMS.rate
    );
}

// Determine required borrowing and affordability.

function quote(s,total){

    const b=debtBudget(s);

    const borrowing=Math.max(
        0,total-b.capitalCash
    );

    const nextService=

        sum(
            b.rows.map(
                x=>projected(x,s.year+1)
            )
        )

        +Math.floor(
            borrowing/TERMS.years
        )

        +Math.round(
            borrowing*TERMS.rate
        );

    const allowed=

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
        allowed,
        nextService,
        ownCash:b.capitalCash
    };
}

const committed=s=>sum(
    Object.values(s.decisions)
    .map(d=>d.cost)
);

export function financing(s){

    return quote(s,committed(s));
}

// Generate infrastructure options with financing.

export function options(s,id){

    const other=
        committed(s)-
        (s.decisions[id]?.cost??0);

    return C.options(
        {
            ...s,
            cash:Number.MAX_SAFE_INTEGER
        },
        id

    ).map(o=>{

        const q=quote(
            s,other+o.cost
        );

        return {
            ...o,

            affordable:q.allowed,

            borrowing:q.borrowing,

            additionalBorrowing:Math.max(
                0,

                q.borrowing-
                financing(s).borrowing
            ),

            nextService:q.nextService
        };
    });
}

// Borrowing requires explicit approval.

export function decide(
    s,id,action,approveBond=false
){

    const o=options(s,id)
        .find(x=>x.id===action);

    if(!o?.affordable){

        throw Error(
            'Decision unavailable or borrowing limit exceeded'
        );
    }

    if(
        o.additionalBorrowing>0&&
        approveBond!==true
    ){

        throw Error(
            'Bond approval required'
        );
    }

    const next=copy(s);

    next.decisions[id]={
        action,
        phases:o.phases,
        cost:o.cost
    };

    return next;
}

// Collective annual financial settlement.

export function settle(s){

    const b=debtBudget(s);

    const q=financing(s);

    if(!q.allowed){

        throw Error(
            'Borrowing limit exceeded'
        );
    }

    const n=C.settle({
        ...s,

        cash:
            b.capitalCash+
            q.borrowing,

        history:[]
    });

    const bonds=b.rows.map(
        ({
            issued,
            original,
            balance,
            interestArrears
        })=>({
            issued,
            original,
            balance,
            interestArrears
        })
    ).filter(
        x=>x.balance||
        x.interestArrears
    );

    // Issue only the exact remaining capital gap.

    if(q.borrowing){

        bonds.push({

            issued:s.year,

            original:q.borrowing,

            balance:q.borrowing,

            interestArrears:0
        });
    }

    const r=n.history[0];

    return {

        ...s,

        year:n.year,

        finished:n.finished,

        cash:n.cash,

        arrears:b.operating.arrears,

        bonds,

        completed:n.completed,

        decisions:{},

        history:[

            ...s.history,

            {
                ...r,

                openingCash:s.cash,

                openingArrears:s.arrears,

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

// Reconstruct authoritative financial history.

export function restore(
    history,base=O.BASE
){

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

            s=decide(
                s,id,d.action,true
            );
        }

        s=settle(s);

        if(
            JSON.stringify(
                s.history.at(-1)
            )!==JSON.stringify(r)
        ){

            throw Error('Record mismatch');
        }
    }

    return s;
}
