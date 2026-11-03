// ==================================================================
// ROLL SUMMARY
//
// What the Agent needs from a Cyberpunk RED roll: its full total (d10 plus
// stat, skill and modifiers), its title and whether it was a critical. No
// Foundry globals, so it is tested with `node --test`.
//
// Read from the CPRRoll itself where possible (roll-tap.js). A chat message's
// roll can't be used: CPRRoll#toJSON drops the system's state, so a message's
// roll total is the d10 alone. The card's HTML, which Core 0.92 (Foundry v12)
// and 0.93 (v13) render the same way, is the fallback.
// ==================================================================

const number = (value) => {
    const n = Number(value);
    return value !== null && value !== undefined && value !== '' && Number.isFinite(n) ? n : null;
};

// wasCritSuccess / wasCritFail are methods on a CPRRoll and plain values in
// some copies of one.
const flag = (roll, name) => {
    const value = roll?.[name];
    if (typeof value === 'function') {
        try { return !!value.call(roll); } catch (e) { return false; }
    }
    return !!value;
};

/**
 * Summary of a CPRRoll (or a copy of one).
 * @param {object} roll
 * @returns {{total: number|null, label: string|null, isCriticalSuccess: boolean, isCriticalFailure: boolean, rawRoll: object}|null}
 */
export function rollSummary(roll) {
    if (!roll || typeof roll !== 'object') return null;
    const total = number(roll.resultTotal) ?? number(roll.total);
    const label = roll.rollTitle || roll.name || null;
    const summary = {
        total,
        label,
        isCriticalSuccess: flag(roll, 'wasCritSuccess') || flag(roll, 'isCriticalSuccess'),
        isCriticalFailure: flag(roll, 'wasCritFail') || flag(roll, 'isCriticalFailure'),
    };
    return { ...summary, rawRoll: { ...summary, resultTotal: total, rollTitle: label } };
}

const text = (html) => html.replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim();

/**
 * Summary read from a roll card's HTML: the total in .d10-number-div and the
 * title in the card's first .chat-rollTitle-* block. A critical shows as a
 * *_preem.svg / *_fail.svg die image (0.92), or as the first d10 of Foundry's
 * dice tooltip marked max / min (0.93). Null when it isn't a Cyberpunk RED card.
 * @param {string} html ChatMessage content.
 */
export function cardSummary(html) {
    if (typeof html !== 'string' || !html.includes('d10-number-div')) return null;
    const totalMatch = html.match(/class="d10-number-div"[^>]*>([\s\S]*?)<\/div>/);
    const total = totalMatch ? number(text(totalMatch[1])) : null;
    const titleMatch = html.match(/class="[^"]*\bchat-rollTitle-[\w-]*[^"]*"[^>]*>\s*<div[^>]*>([\s\S]*?)<\/div>/);
    const label = titleMatch ? text(titleMatch[1]) || null : null;
    const firstD10 = (html.match(/<li class="([^"]*\bd10\b[^"]*)"/) ?? [])[1] ?? '';
    const summary = {
        total,
        label,
        isCriticalSuccess: /_preem\.svg/.test(html) || /\bmax\b/.test(firstD10),
        isCriticalFailure: /_fail\.svg/.test(html) || /\bmin\b/.test(firstD10),
    };
    return { ...summary, rawRoll: { ...summary, resultTotal: total, rollTitle: label } };
}
