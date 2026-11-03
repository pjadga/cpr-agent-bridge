import test from 'node:test';
import assert from 'node:assert/strict';
import { rollSummary, cardSummary } from '../src/roll-summary.js';

// A CPRRoll as Core passes it to CPRChat.RenderRollCard.
class FakeRoll {
    constructor(props) { Object.assign(this, props); }
    wasCritSuccess() { return this.initialRoll === 10; }
    wasCritFail() { return this.initialRoll === 1; }
}

test('rollSummary reads the full total, title and criticals from a CPRRoll', () => {
    const s = rollSummary(new FakeRoll({ resultTotal: 11, total: -3, initialRoll: 1, rollTitle: 'Handgun' }));
    assert.equal(s.total, 11);
    assert.equal(s.label, 'Handgun');
    assert.equal(s.isCriticalFailure, true);
    assert.equal(s.isCriticalSuccess, false);
    assert.deepEqual([s.rawRoll.resultTotal, s.rawRoll.rollTitle], [11, 'Handgun']);
});

test('rollSummary accepts plain copies and falls back to total', () => {
    assert.equal(rollSummary({ resultTotal: '17', rollTitle: 'Evasion', wasCritSuccess: true }).isCriticalSuccess, true);
    assert.equal(rollSummary({ total: 7, name: 'Initiative' }).total, 7);
    assert.equal(rollSummary({ total: 7, name: 'Initiative' }).label, 'Initiative');
    assert.equal(rollSummary({ resultTotal: 0 }).total, 0);
    assert.equal(rollSummary({}).total, null);
    assert.equal(rollSummary(null), null);
});

// Trimmed from Core 0.93's cpr-skill-rollcard.hbs output; 0.92 differs only in the dice images.
const card = (dice) => `<div class="rollcard">
  <div class="rollcard-top">
    <div class="cpr-block chat-rollTitle-stat">
      <div class="text-center text-padding-top text-normal text-semi">
        Handgun
      </div>
      <div class="text-center text-small">Skill</div>
    </div>
  </div>
  <div class="rollcard-bottom"><div class="cpr-block"><div class="d10-rollcard-data">
    <div class="d10-dice-div">${dice}</div>
    <div class="d10-number-div">
      <a><span class="clickable text-semi" data-action="toggleVisibility" data-visible-element="d10-data-details">11</span></a>
    </div>
  </div></div></div>
</div>`;

test('cardSummary reads the total and title from a roll card', () => {
    const s = cardSummary(card('<img class="d10" src="systems/cyberpunk-red-core/icons/dice/black/d10_5.svg"/>'));
    assert.equal(s.total, 11);
    assert.equal(s.label, 'Handgun');
    assert.equal(s.isCriticalSuccess, false);
    assert.equal(s.isCriticalFailure, false);
});

test('cardSummary spots critical dice and negative totals', () => {
    const fail = cardSummary(card('<img class="d10" src="systems/cyberpunk-red-core/icons/dice/red/d10_1_fail.svg"/>').replace('>11<', '>-3<'));
    assert.equal(fail.isCriticalFailure, true);
    assert.equal(fail.total, -3);
    assert.equal(cardSummary(card('<img src=".../d10_10_preem.svg"/>')).isCriticalSuccess, true);
});

test("cardSummary reads 0.93's dice tooltip: the first d10 marked max or min", () => {
    const tooltip = (cls) => `<div class="dice-roll"><div class="dice-formula">1d10red</div><ol class="dice-rolls"><li class="roll cprdie d10 ${cls}">5</li></ol><h4 class="dice-total">18</h4></div>`;
    assert.equal(cardSummary(card(tooltip('exploded max'))).isCriticalSuccess, true);
    assert.equal(cardSummary(card(tooltip('min'))).isCriticalFailure, true);
    const plain = cardSummary(card(tooltip('')));
    assert.deepEqual([plain.isCriticalSuccess, plain.isCriticalFailure, plain.total], [false, false, 11]);
});

test('cardSummary ignores cards that are not Cyberpunk RED roll cards', () => {
    assert.equal(cardSummary('<p>Hello</p>'), null);
    assert.equal(cardSummary(undefined), null);
});
