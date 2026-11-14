import * as C from './municipal-engine.mjs';
import * as E from './events.mjs';

const clone=x=>JSON.parse(JSON.stringify(x));

const money=x=>
    `$${(x/1e6).toLocaleString(
        'en-US',
        {maximumFractionDigits:3}
    )}M`;

const units={

    roads:'km of roads',

    water:'household connections',

    park:'hectares of parkland',

    solar:'MW of rooftop solar',

    wastewater:'MLD of treatment capacity'
};

// Start a new municipal game.

export function start(
    scenario='mixed',
    base,
    growth, lifecycle={rate:0,policy:"none"}
){

    if(!Number.isFinite(lifecycle.rate)||lifecycle.rate<0||lifecycle.rate>1||!["none","half","full","buffer5"].includes(lifecycle.policy))throw Error("Invalid lifecycle");
    return {

        schema:1,

        city:{...E.initial(scenario,base),lifecycle,maintenancePlan:lifecycle.policy,...(growth?{growth,expansion:{}}:{})},

        mode:'planning',

        log:[]
    };
}

export function finance(g,amount,source='player'){

    if(!['player','activation'].includes(source))
        throw Error('Invalid financing source');

    if(g.mode!=='planning')
        throw Error('Financing is closed for this year');

    const city=E.setFinancing(g.city,amount);

    return {

        ...g,
        city,

        log:[
            ...g.log,
            {
                type:'finance',
                year:g.city.year,
                amount,
                source,
                maximum:E.bondCapacity(g.city),
                rate:E.currentEvent(g.city).rate
            }
        ]
    };
}

// Record or revise an infrastructure decision.

export function choose(
    g,id,action,approveBond=false
){

    if(g.mode!=='planning')
        throw Error(
            'Finish reviewing the year first'
        );

    const city=E.decide(
        g.city,id,action,approveBond
    );

    return {

        ...g,
        city,

        log:[

            ...g.log,

            {

                type:'choose',

                year:g.city.year,

                id,
                action,

                approveBond:approveBond===true
            }
        ]
    };
}

// Calculate one collective annual outcome.

export function closeYear(g){

    if(g.mode!=='planning')
        throw Error(
            'Year cannot be closed now'
        );

    const city=E.settle(g.city);

    return {

        ...g,

        city,

        mode:'outcome',

        log:[

            ...g.log,

            {

                type:'close',

                year:g.city.year
            }
        ]
    };
}

// Generate reactions from authoritative
// event-aware financial settlement records.

export function report(g){

    if(
        g.mode!=='outcome'&&
        g.mode!=='finished'
    )
        throw Error('No outcome to review');

    const r=g.city.history.at(-1);

    const sites=r.outcomes.map(o=>{

        const kind=o.delivered

            ? (
                o.remaining
                    ? 'expanded'
                    : 'completed'
            )

            : (
                o.remaining
                    ? 'deferred'
                    : 'ongoing'
            );

        const measure=n=>
            `${n.toLocaleString('en-US')} ${units[o.id]}`;

        const text=kind==='completed'

            ? `${measure(o.delivered)} delivered. The original target is now met.`

            : kind==='expanded'

                ? `${measure(o.delivered)} delivered. ${measure(o.remaining)} still needed.`

                : kind==='deferred'

                    ? `No new construction. ${measure(o.remaining)} still needed.`

                    : 'The original target remains met.';

        return {

            ...o,
            kind,
            text,

            visual:{

                completedPhases:
                    g.city.completed[o.id],

                previousPhases:
                    g.city.completed[o.id]-
                    r.decisions[o.id].phases
            }
        };
    });

    return {

        year:r.year,

        sites,

        finance:{

            openingCash:r.openingCash,

            capital:r.expenditure,

            revenue:r.operating.revenue,

            operatingPaid:r.operating.paid,

            debtPaid:r.debtPaid,

            borrowing:r.borrowing,

            closingCash:r.closingCash,
            capitalReserve:r.closingCapitalReserve??0,

            closingDebt:r.closingDebt,

            operatingArrears:
                r.operating.arrears,

            debtArrears:r.debtArrears,

            text:
                `The city invested ${money(r.expenditure)}. Treasury: ${money(r.closingCash)}. Outstanding debt: ${money(r.closingDebt)}.`
        },

        finished:g.city.finished
    };
}

// Advance only after outcome review.

export function nextYear(g){

    if(g.mode!=='outcome')
        throw Error(
            'No annual outcome to finish'
        );

    return {

        ...g,

        mode:g.city.finished

            ? 'finished'

            : 'planning',

        log:[

            ...g.log,

            {

                type:'next',

                year:g.city.history.at(-1).year
            }
        ]
    };
}

// Provide the current gameplay information.

export function view(g){

    const s=g.city;

    if(g.mode!=='planning'){

        return {

            mode:g.mode,

            report:report(g)
        };
    }

    const q=E.financing(s);

    return {

        mode:g.mode,

        year:s.year,

        treasury:s.cash,

        available:Math.max(

            0,

            q.ownCash+
            (s.capitalReserve??0)+
            (s.bondPlan??0)-

            Object.values(s.decisions)
                .reduce(
                    (a,d)=>a+d.cost,0
                )
        ),

        plannedBorrowing:q.borrowing,

        event:E.currentEvent(s),

        challenges:E.challenges(s),

        unresolved:C.unresolved(s),

        sites:C.IDS.map(id=>({

            id,

            ...C.status(s,id),

            decision:clone(
                s.decisions[id]??null
            ),

            options:E.options(s,id)
        }))
    };
}

// Internal game record.
// No player-facing export controls.

export function save(g){

    return clone({

        schema:1,

        scenario:g.city.scenario,

        base:g.city.base,
        ...(g.city.growth?{growth:g.city.growth}:{}),
        lifecycle:g.city.lifecycle,
        log:g.log
    });
}

// Reconstruct settled years and unfinished
// decisions from the original action history.

export function load(record){

    if(

        record?.schema!==1||

        !Array.isArray(record.log)||

        record.log.length>10000

    )
        throw Error('Invalid game record');

    let g=start(
        record.scenario,
        record.base,
        record.growth, record.lifecycle
    );

    for(const a of record.log){

        if(a.type==='choose')

            g=choose(

                g,

                a.id,

                a.action,

                a.approveBond
            );

        else if(a.type==='finance')

            g=finance(g,a.amount,a.source);

        else if(a.type==='close')

            g=closeYear(g);

        else if(a.type==='next')

            g=nextYear(g);

        else

            throw Error('Unknown action');

        if(

            JSON.stringify(g.log.at(-1))!==

            JSON.stringify(a)

        )
            throw Error(
                'Action record mismatch'
            );
    }

    return g;
}
