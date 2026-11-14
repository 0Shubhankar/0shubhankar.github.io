
import * as G from './municipal-lifecycle/player.mjs';
import * as E from './municipal-lifecycle/events.mjs';

import {
    PROJECTS
} from './municipal/municipal-engine.mjs';

export function installGame(
    engine,L,visual,visit
){

    const $=id=>document.getElementById(id);

    const key='p42-municipal-e05b-v1';

    const money=n=>'$'+
        (n/1e6).toLocaleString(
            'en-US',
            {maximumFractionDigits:3}
        )+'M';

    const names={
        roads:'Roads',
        water:'Water supply',
        park:'Public park',
        solar:'Rooftop solar',
        wastewater:'Wastewater'
    };

    let game=G.start();
    let selected=null;

    // Recover the actual municipal game.
    // Previous park-only records are untouched.

    try{

        const s=localStorage.getItem(key);

        if(s)game=G.load(JSON.parse(s));

    }catch(e){

        console.warn(
            'Municipal save unavailable',e
        );
    }

    const restored=game.log.length>0;

    function store(g){

        game=g;

        try{

            localStorage.setItem(
                key,
                JSON.stringify(G.save(g))
            );

        }catch(e){

            console.warn(
                'Municipal save failed',e
            );
        }
    }

    const finance=document.createElement('aside');
    finance.id='financePanel';
    finance.hidden=true;
    document.body.append(finance);

    const panel=document.createElement('aside');

    panel.id='annualPanel';
    panel.hidden=true;

    document.body.append(panel);

    const hud=document.createElement('span');

    hud.id='annualHUD';
    hud.hidden=true;

    document.querySelector('header')
        .insertBefore(hud,$('lighting'));

    const add=(tag,text)=>{

        const n=document.createElement(tag);

        n.textContent=text;
        panel.append(n);

        return n;
    };

    function button(
        text,fn,disabled=false
    ){

        const b=add('button',text);

        b.disabled=disabled;
        b.onclick=fn;

        return b;
    }

    function hide(){

        panel.hidden=true;

        visual.sync(
            game.city.completed
        );
    }

    function show(){

        panel.replaceChildren();

        panel.hidden=false;
        hud.hidden=false;
    }

    function updateHUD(review=false,activeSite=null){

        const v=G.view(game), s=game.city;

        const planning=v.mode==='planning';

        const year=planning
            ?v.year
            :v.report.year;

        hud.textContent=`Year ${year} / 10`;

        finance.hidden=false;
        finance.replaceChildren();

        function addF(tag,text,parent=finance){

            const el=document.createElement(tag);

            el.textContent=text;

            parent.append(el);

            return el;
        }

        function row(parent,label,value){

            const el=addF('div','',parent);

            el.setAttribute(
                'class','finance-row'
            );

            addF('span',label,el);

            addF('strong',money(value),el);
        }

        function annualRows(parent,r){
            row(parent,'Maintenance expenditure',r.maintenance?.spent??0);

            row(parent,'Opening treasury',r.openingCash);

            row(parent,'Revenue',r.operating.revenue);

            row(parent,'Operating payments',r.operating.paid);

            row(parent,'Debt payments',r.debtPaid);

            row(parent,'Capital investment',r.expenditure);

            row(parent,'Bonds issued',r.borrowing);

            row(parent,'Closing treasury',r.closingCash);

            row(
                parent,
                'Restricted capital reserve',
                r.closingCapitalReserve??0
            );

            row(parent,'Outstanding debt',r.closingDebt);

            if(r.operating.arrears+r.debtArrears){

                row(
                    parent,
                    'Unpaid obligations',
                    r.operating.arrears+r.debtArrears
                );
            }
        }

        addF('small',`YEAR ${year} / 10`);

        addF('h2','Municipal finances');

        if(planning){

            const b=E.debtBudget(s);

            const q=E.financing(s);
            const lifecycle=addF('details','');
            addF('summary','Infrastructure lifecycle',lifecycle);
            addF('p','Demand grows 2% per year; effective capacity deteriorates 3% per year. Illustrative assumptions.',lifecycle);
            row(lifecycle,'Maintenance required',b.maintenance.required);
            row(lifecycle,'Maintenance funded',b.maintenance.spent);
            const policy=addF('select','',lifecycle);
            policy.setAttribute('aria-label','Annual maintenance policy');
            for(const [value,label] of [['none','No maintenance'],['half','Half requirement'],['full','Full requirement if affordable'],['buffer5','Preserve $5M cash buffer']]){
                const option=addF('option',label,policy);
                option.value=value;
            }
            policy.value=s.maintenancePlan;
            const apply=addF('button','Apply maintenance policy',lifecycle);
            const notice=addF('p','Maintenance uses unrestricted cash before construction. Policy carries forward until changed.',lifecycle);
            apply.onclick=()=>{
                try{
                    store(G.setMaintenance(game,policy.value));
                    if(activeSite!==null)sitePanel(activeSite);else menu();
                }catch(e){notice.textContent=e.message;}
            };

            const spent=Object.values(s.decisions)
                .reduce((a,d)=>a+d.cost,0);

            addF('small','Available investment funds');

            addF('h2',money(v.available));

            row(finance,'Opening treasury',s.cash);

            row(finance,'Annual revenue',b.operating.revenue);

            row(finance,'Operating payments',b.operating.paid);

            row(finance,'Debt payments',b.paid);

            row(finance,'Committed investment',spent);

            row(finance,'Planned new bonds',q.borrowing);

            row(
                finance,
                'Restricted capital reserve',
                s.capitalReserve??0
            );

            row(
                finance,
                'Outstanding debt',
                s.bonds.reduce((a,b)=>a+b.balance,0)
            );

            row(
                finance,
                'Projected closing cash',
                Math.max(
        0,
        b.capitalCash-Math.max(
            0,
            spent-(s.capitalReserve??0)-q.borrowing
        )
    )
            );

            if(b.operating.arrears+b.debtArrears){

                row(
                    finance,
                    'Unpaid obligations',
                    b.operating.arrears+b.debtArrears
                );
            }

            row(
                finance,
                'Projected capital reserve',
                Math.max(
                    0,
                    (s.capitalReserve??0)+q.borrowing-spent
                )
            );

            if(review||activeSite!==null){

                const funding=addF('details','');

                addF(
                    'summary',
                    'Raise municipal bonds',
                    funding
                );

                const maximum=E.bondCapacity(s);

                addF(
                    'p',
                    'Issue at year-end. Unspent proceeds stay in a restricted capital reserve.',
                    funding
                );

                addF(
                    'p',
                    `Maximum new issue: $${(maximum/1e6).toLocaleString('en-US',{maximumFractionDigits:6})}M · ${(q.rate/100).toFixed(2)}% fixed · 20 years`,
                    funding
                );

                const label=addF(
                    'label',
                    'Bond amount ($ millions)',
                    funding
                );

                const amount=addF(
                    'input','',label
                );

                amount.type='number';
                amount.min='0';
                amount.max=String(maximum/1e6);
                amount.step='0.000001';
                amount.value=String(q.borrowing/1e6);

                amount.setAttribute(
                    'aria-label',
                    'Bond amount in millions of dollars'
                );

                const estimate=addF(
                    'p','',funding
                );

                function selectedAmount(){

                    if(String(amount.value).trim()==='')
                        return NaN;

                    return Math.round(
                        Number(amount.value)*1e6
                    );
                }

                function refresh(){

                    const n=selectedAmount();

                    if(
                        !Number.isSafeInteger(n)||
                        n<0||
                        n>maximum
                    ){

                        estimate.textContent=
                            'Enter an amount within borrowing capacity.';

                        return;
                    }

                    estimate.textContent=
                        `Additional first annual payment: ${money(Math.floor(n/20)+Math.round(n*q.rate/10000))}. Proceeds are for capital only.`;
                }

                amount.oninput=refresh;

                refresh();

                const authorize=addF(
                    'button',
                    'Authorize bond plan',
                    funding
                );

                authorize.onclick=()=>{

                    try{

                        store(
                            G.finance(
                                game,
                                selectedAmount()
                            )
                        );

                        if(activeSite!==null){

                            visual.sync(game.city.completed);

                            sitePanel(activeSite);

                        }else{

                            menu();
                        }

                    }catch(e){

                        estimate.textContent=e.message;
                    }
                };

                if(maximum===0){

                    addF(
                        'p',

                        b.operating.arrears||b.debtArrears

                            ?'Borrowing blocked by unpaid obligations.'

                            :'Borrowing blocked by debt or repayment limits.',

                        funding
                    );
                }
            }

            const close=addF(
                'button',
                v.unresolved.length
                    ?`Review year (${5-v.unresolved.length}/5)`
                    :'Review year'
            );

            close.disabled=
                !review||v.unresolved.length>0;

            close.onclick=()=>{

                if(
                    close.disabled||
                    game.mode!=='planning'||
                    G.view(game).unresolved.length
                )return;

                store(G.closeYear(game));

                outcomes();
            };

        }else{

            addF('small','Closing treasury');

            addF(
                'h2',
                money(v.report.finance.closingCash)
            );

            annualRows(
                finance,
                s.history.at(-1)
            );
        }

        const history=addF('details','');

        addF(
            'summary',
            'Previous annual finances',
            history
        );

        const records=planning
            ?s.history
            :s.history.slice(0,-1);

        if(!records.length){

            addF(
                'p',
                'No previous years yet.',
                history
            );
        }

        for(const r of [...records].reverse()){

            const section=addF(
                'details','',history
            );

            addF(
                'summary',
                `Year ${r.year} · ${money(r.closingCash)} remaining`,
                section
            );

            annualRows(section,r);
        }
    }

    function menu(){

        if(
            game.mode==='planning'&&
            !Object.hasOwn(game.city,'bondPlan')
        ){

            game=G.finance(
                game,
                E.financing(game.city).borrowing,
                'activation'
            );
        }

        selected=null;

        visual.sync(game.city.completed);

        show();

        updateHUD(true);

        const v=G.view(game);

        if(v.mode==='finished'){

            add(
                'h2',
                'Your ten-year mandate is complete.'
            );

            for(const site of v.report.sites){

                add(
                    'p',
                    `${names[site.id]}: ${site.effective.toLocaleString('en-US',{maximumFractionDigits:2})} effective of ${site.target.toLocaleString('en-US',{maximumFractionDigits:2})} ${site.unit} required`
                );
            }

            return;
        }

        if(v.mode==='outcome'){

            outcomes();

            return;
        }

        add(
            'small',
            `YEAR ${v.year} · ${v.event.title}`
        );

        const eventText={

            inflation:
                'Unbuilt projects cost 10% more this year. Operating costs are also higher.',

            recession:
                'Baseline municipal revenue is 15% lower this year.',

            rates:
                'New municipal bonds now carry an 8.5% coupon.',

            pressure:
                'Baseline operating costs are 15% higher this year.',

            recovery:
                'Baseline municipal revenue is 10% higher this year.'
        };

        if(eventText[v.event.id]){

            add('p',eventText[v.event.id]);
        }

        add(
            'h2',
            v.unresolved.length
                ?'Where would you like to invest?'
                :'Your investment plan is ready.'
        );

        add(
            'p',
            `${5-v.unresolved.length} of 5 decisions made`
        );

        for(const site of v.sites){

            const b=button(
                names[site.id],
                ()=>inspect(site.id)
            );

            b.setAttribute(
                'data-decided',
                String(!!site.decision)
            );

            b.setAttribute(
                'aria-label',
                names[site.id]+
                (site.decision?' (decision confirmed)':'')
            );
        }

        add(
            'small',
            'Green = decision confirmed.'
        );
    }

    function inspect(id){

        if(game.mode!=='planning')return;

        hide();
        updateHUD();

        visit(

            [sceneFor(id)],

            ()=>sitePanel(id)
        );
    }

    function sceneFor(id){

        const s=L.scenes.find(x=>x.id===id);

        const v=G.view(game).sites
            .find(x=>x.id===id);

        return {

            ...s,

            title:names[id],

            text:
                `${v.delivered.toLocaleString('en-US',{maximumFractionDigits:2})} installed; ${(v.effective??v.delivered).toLocaleString('en-US',{maximumFractionDigits:2})} effective of ${v.target.toLocaleString('en-US',{maximumFractionDigits:2})} ${v.unit} required.`,

            detail:''
        };
    }

    // Contextual infrastructure decision panel

    function sitePanel(id){

        show();
        updateHUD(false,id);

        selected=null;

        const v=G.view(game).sites
            .find(x=>x.id===id);

        const p=PROJECTS[id];

        add('small','INFRASTRUCTURE DECISION');

        add('h2',p.name);

        add(

            'p',

            `${v.delivered.toLocaleString('en-US',{maximumFractionDigits:2})} installed; ${(v.effective??v.delivered).toLocaleString('en-US',{maximumFractionDigits:2})} effective of ${v.target.toLocaleString('en-US',{maximumFractionDigits:2})} ${v.unit} required.`
        );

        const labels={

            roads:[
                'Rehabilitate remaining roads',
                'Repair next road section'
            ],

            water:[
                'Connect all remaining households',
                'Extend to next neighbourhood'
            ],

            park:[
                'Develop remaining park',
                'Develop next park section'
            ],

            solar:[
                'Install remaining rooftop solar',
                'Install next group of panels'
            ],

            wastewater:[
                'Complete treatment expansion',
                'Expand next treatment phase'
            ]
        };

        const detail=add(

            'p',

            v.decision

                ? `Current decision: ${v.decision.action==='full'?'Complete development':v.decision.action==='phase'?'Next phase':v.decision.action==='continue'?'Continue existing service':v.decision.action==='expand'?'Meet current demand':v.decision.action==='expand-phase'?'Partial expansion':'Defer investment'}. Choose again to revise.`

                : 'Choose an intervention.'
        );

        const opts=[];

        for(const o of v.options){

            const name=
                o.id==='expand'||o.id==='expand-phase' ? o.label :
                o.id==='full'

                    ? labels[id][0]

                    : o.id==='phase'

                        ? labels[id][1]

                        : o.id==='defer'

                            ? 'Defer investment'

                            : 'Continue existing service';

            const b=button(

                `${name}${o.cost?' · '+money(o.cost):''}`,

                ()=>{

                    selected=o;

                    opts.forEach(x=>

                        x.setAttribute(
                            'aria-pressed',
                            String(x===b)
                        )
                    );

                    const n=o.quantity??p.phases.slice(

                        game.city.completed[id],

                        game.city.completed[id]+
                            o.phases

                    ).reduce((a,b)=>a+b,0);

                    detail.textContent=

                        `${n?`${n.toLocaleString()} ${p.unit} to be delivered. `:''}${o.additionalBorrowing?`Requires ${money(o.additionalBorrowing)} additional bonds. Total projected next-year debt service: ${money(o.nextService)}.`:''}`

                        ||'No new capital expenditure.';

                    confirm.textContent=

                        o.additionalBorrowing

                            ? 'Confirm and approve bonds'

                            : 'Confirm decision';

                    confirm.disabled=false;

                    visual.sync(

                        game.city.completed,

                        id,

                        o.phases
                    );
                },

                !o.affordable
            );

            if(!o.affordable){

                b.textContent+=
                    ' · Funding unavailable';
            }

            opts.push(b);
        }

        const confirm=button(

            'Confirm decision',

            ()=>{

                if(!selected)return;

                try{

                    store(

                        G.choose(

                            game,

                            id,

                            selected.id,

                            selected.additionalBorrowing>0
                        )
                    );

                    menu();

                }catch(e){

                    detail.textContent=e.message;
                }
            },

            true
        );

        button('Back to city',menu);
    }

    // Annual cinematic outcome report

    function outcomes(){

        hide();
        updateHUD();

        const r=G.report(game);

        visual.sync(
            game.city.completed
        );

        const tour=r.sites.map(site=>({

            ...L.scenes.find(
                x=>x.id===site.id
            ),

            title:names[site.id],

            text:site.text,

            detail:site.cost

                ? `Capital investment: ${money(site.cost)}`

                : ''
        }));

        tour.push({

            ...L.scenes.at(-1),

            title:`Year ${r.year} · Your city`,

            text:r.finance.text,

            detail:

                r.finance.operatingArrears+
                r.finance.debtArrears

                    ? `Unpaid obligations: ${money(r.finance.operatingArrears+r.finance.debtArrears)}`

                    : ''
        });

        visit(tour,()=>{

            show();

            add(
                'h2',
                `Year ${r.year} complete`
            );

            add('p','Review your finances on the left before beginning the next year.');

    button(

                r.finished

                    ? 'View final outcome'

                    : 'Begin next year',

                ()=>{

                    store(G.nextYear(game));

                    menu();
                }
            );
        });
    }

    visual.sync(game.city.completed);

    return {

        restored,

        hide,

        enter:menu,

        inspect
    };
}
