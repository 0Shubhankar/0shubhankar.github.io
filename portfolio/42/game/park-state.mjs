
export const initial = () => ({
    year: 1,
    cash: 100,
    completed: 0,
    pending: 0,
    history: []
});

export function options(s) {
    const left = 3 - s.completed - s.pending;

    return s.pending || !left ? [] : [
        ...(left > 1 ? [{
            id: 'full', phases: left, cost: left * 5
        }] : []),
        {id: 'phase', phases: 1, cost: 5},
        {id: 'defer', phases: 0, cost: 0}
    ];
}

export function commit(s, id) {
    const o = options(s).find(x => x.id === id);

    if (!o || o.cost > s.cash)
        throw Error('Unavailable decision');

    return {
        ...s,
        cash: s.cash - o.cost,
        pending: o.phases,
        history: [...s.history, {
            year: s.year,
            action: id,
            cost: o.cost,
            phases: o.phases
        }]
    };
}

export function settle(s) {
    if (!s.pending)
        throw Error('No construction to complete');

    return {
        ...s,
        year: s.year + 1,
        completed: s.completed + s.pending,
        pending: 0,
        history: [...s.history, {
            year: s.year,
            action: 'settle'
        }]
    };
}

export function restore(history) {
    if (!Array.isArray(history) || history.length > 1000)
        throw Error('Invalid record');

    let s = initial();

    for (const h of history) {
        if (h.year !== s.year)
            throw Error('Invalid year');

        s = h.action === 'settle'
            ? settle(s)
            : commit(s, h.action);

        if (JSON.stringify(h) !==
            JSON.stringify(s.history.at(-1)))
            throw Error('Invalid record');
    }

    return s;
}
