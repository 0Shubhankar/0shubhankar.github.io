const project = (name,unit,phases,costs) =>
    Object.freeze({
        name,
        unit,
        phases:Object.freeze(phases),
        costs:Object.freeze(costs)
    });

export const PROJECTS = Object.freeze({
    roads: project(
        'Road rehabilitation',
        'km',
        [10,15,15],
        [10000000,15000000,15000000]
    ),

    water: project(
        'Water supply',
        'connections',
        [5000,7500,7500],
        [8750000,13125000,13125000]
    ),

    park: project(
        'Public park',
        'hectares',
        [5,5,5],
        [5000000,5000000,5000000]
    ),

    solar: project(
        'Rooftop solar',
        'MW',
        [2,4,4],
        [4000000,8000000,8000000]
    ),

    wastewater: project(
        'Wastewater treatment',
        'MLD',
        [5,5,10],
        [10000000,10000000,20000000]
    )
});

export const IDS =
    Object.freeze(Object.keys(PROJECTS));

const sum = a => a.reduce((x,y)=>x+y,0);
const copy = s => JSON.parse(JSON.stringify(s));
const own = (o,k) => Object.hasOwn(o,k);

// Initial municipal state

export function initial(){
    return {
        version:1,
        year:1,
        cash:100000000,

        completed:Object.fromEntries(
            IDS.map(id=>[id,0])
        ),

        decisions:{},
        history:[],
        finished:false
    };
}

// Available treasury after reservations

export function available(s){
    return s.cash-sum(
        Object.values(s.decisions)
        .map(d=>d.cost)
    );
}

// E02B: incremental service-equivalent demand, not total city stock.
export const originalTarget=id=>sum(PROJECTS[id].phases);
const quantize=x=>Math.round(x*1e6)/1e6;
export function demand(s,id){
    return quantize(originalTarget(id)*(1+(s.growth?.[id]??0))**(s.year-1));
}
// Infrastructure delivery status

export function status(s,id){

    if(!own(PROJECTS,id))
        throw Error('Unknown infrastructure');

    const p=PROJECTS[id];

    return {
        delivered:quantize(sum(p.phases.slice(0,s.completed[id]))+(s.expansion?.[id]??0)),
        target:demand(s,id),
        unit:p.unit
    };
}

// Automatically generate available decisions

export function options(s,id){

    if(!own(PROJECTS,id))
        throw Error('Unknown infrastructure');

    if(s.finished)return [];

    const p=PROJECTS[id];
    const n=s.completed[id];
    const left=3-n;

    const gap=quantize(Math.max(0,demand(s,id)-status(s,id).delivered));
    const expansionOptions=[];
    if(left===0&&gap>0){
        const unitCost=sum(p.costs)/originalTarget(id);
        const increment=Math.min(gap,originalTarget(id)/4);
        expansionOptions.push({id:'expand',label:'Meet current demand',phases:0,quantity:gap,cost:Math.round(gap*unitCost)});
        if(increment<gap)expansionOptions.push({id:'expand-phase',label:'Partial expansion',phases:0,quantity:increment,cost:Math.round(increment*unitCost)});
    }
    const choices=left===0 ? [
        ...expansionOptions,

        {
            id:'continue',
            label:'Continue existing service',
            phases:0,
            cost:0
        }

    ] : [

        ...(left>1 ? [{
            id:'full',
            label:'Complete remaining development',
            phases:left,
            cost:sum(p.costs.slice(n))
        }] : []),

        {
            id:'phase',
            label:'Develop next phase',
            phases:1,
            cost:p.costs[n]
        },

        {
            id:'defer',
            label:'Defer investment',
            phases:0,
            cost:0
        }
    ];

    const budget =
        available(s)+(s.decisions[id]?.cost??0);

    return choices.map(o=>({
        ...o,
        affordable:o.cost<=budget
    }));
}

// Record or revise a decision

export function decide(s,id,action){

    const o=options(s,id)
        .find(x=>x.id===action);

    if(!o||!o.affordable)
        throw Error(
            'Decision unavailable or unaffordable'
        );

    const next=copy(s);

    next.decisions[id]={
        action,
        phases:o.phases,
        cost:o.cost
    };

    return next;
}

// Remaining unresolved infrastructure decisions

export function unresolved(s){

    return s.finished ? [] :

        IDS.filter(
            id=>!own(s.decisions,id)
        );
}

// Calculate collective annual outcomes

export function settle(s){

    if(s.finished||unresolved(s).length)
        throw Error(
            'Annual decisions incomplete or game finished'
        );

    const next=copy(s);
    const openingCash=s.cash;

    const expenditure=
        openingCash-available(s);

    if(expenditure>openingCash)
        throw Error('Insufficient treasury');

    const outcomes=IDS.map(id=>{

        const before=status(s,id);

        next.completed[id]+=s.decisions[id].phases;
        if(s.growth){
            next.expansion??={};
            next.expansion[id]=quantize((s.expansion?.[id]??0)+(s.decisions[id].quantity??0));
        }

        const after=status(next,id);

        return {
            id,
            action:s.decisions[id].action,
            cost:s.decisions[id].cost,

            delivered:
                after.delivered-before.delivered,

            total:after.delivered,

            remaining:Math.max(0,quantize(after.target-after.delivered)),

            unit:after.unit
        };
    });

    next.cash-=expenditure;

    next.history.push({
        year:s.year,
        openingCash,
        expenditure,
        closingCash:next.cash,
        decisions:copy(s.decisions),
        outcomes
    });

    next.decisions={};

    next.finished=s.year===10;

    next.year=
        s.year+Number(!next.finished);

    return next;
}

// Reconstruct recorded financial history

export function restore(history,decisions={}){

    if(!Array.isArray(history)||
        history.length>10)
        throw Error('Invalid history');

    let s=initial();

    for(const record of history){

        for(const [id,d] of
            Object.entries(record.decisions))
            s=decide(s,id,d.action);

        s=settle(s);

        if(JSON.stringify(s.history.at(-1))!==
            JSON.stringify(record))
            throw Error('Record mismatch');
    }

    for(const [id,d] of
        Object.entries(decisions))
        s=decide(s,id,d.action);

    return s;
}
