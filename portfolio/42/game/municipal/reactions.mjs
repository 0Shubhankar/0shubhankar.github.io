
import {
    IDS, PROJECTS, restore
} from './municipal-engine.mjs';

export const REACTION_VERSION = 1;

const fmt = n => n.toLocaleString('en-US');

const units = {

    roads: n =>
        `${fmt(n)} km of roads`,

    water: n =>
        `${fmt(n)} household connections`,

    park: n =>
        `${fmt(n)} hectares of parkland`,

    solar: n =>
        `${fmt(n)} MW of rooftop solar`,

    wastewater: n =>
        `${fmt(n)} MLD of additional treatment capacity`
};

export function annualReactions(history) {

    if (!Array.isArray(history) || !history.length)
        throw Error('No settled year');

    // Validate and reconstruct authoritative city state.
    const state = restore(history);
    const r = state.history.at(-1);

    const sites = IDS.map(id => {

        const o = r.outcomes.find(x => x.id === id);

        const target = PROJECTS[id].phases
            .reduce((a,b)=>a+b,0);

        const before = o.total - o.delivered;

        // Generate the reaction from actual delivery.
        const kind = o.delivered > 0

            ? (
                o.remaining === 0
                    ? 'completed'
                    : 'expanded'
            )

            : (
                o.remaining === 0
                    ? 'ongoing'
                    : 'deferred'
            );

        const measure = units[id];

        const text = kind === 'completed'

            ? `This year delivered ${measure(o.delivered)}. The original investment target is now met.`

            : kind === 'expanded'

                ? `This year delivered ${measure(o.delivered)}. The remaining requirement is ${measure(o.remaining)}.`

                : kind === 'ongoing'

                    ? 'The original investment target remains met. No new construction this year.'

                    : `No new construction this year. The remaining requirement is ${measure(o.remaining)}.`;

        return {
            id,
            kind,
            action:o.action,
            before,
            delivered:o.delivered,
            total:o.total,
            remaining:o.remaining,
            target,
            unit:o.unit,
            cost:o.cost,
            text,

            // Instructions for future UUE integration.
            visual:{
                completedPhases:state.completed[id],

                previousPhases:
                    state.completed[id]-
                    r.decisions[id].phases
            }
        };
    });

    const money = n =>
        `$${(n/1000000).toLocaleString(
            'en-US',
            {maximumFractionDigits:3}
        )}M`;

    return {
        version:REACTION_VERSION,
        year:r.year,
        sites,

        finance:{
            openingCash:r.openingCash,
            expenditure:r.expenditure,
            closingCash:r.closingCash,

            text:
                `The city invested ${money(r.expenditure)} this year. ${money(r.closingCash)} remains available.`
        },

        finished:state.finished
    };
}
