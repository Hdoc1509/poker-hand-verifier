import { getPairs } from '../src/pair';

const validCards = [
  { number: '2', suit: 'H' },
  { number: 'Q', suit: 'D' },
  { number: '6', suit: 'D' },
];

describe('--- getPairs() ---', () => {
  test('If there are no PAIRS returns an empty Set', () => {
    const cards = [
      ...validCards,
      { number: 'A', suit: 'H' },
      { number: 'J', suit: 'D' },
    ];

    expect(getPairs(cards)).toEqual(new Set());
  });

  test("If there are PAIR's returns a Set with its numbers correctly", () => {
    const cards1 = [
      ...validCards,
      { number: 'Q', suit: 'C' },
      { number: '7', suit: 'D' },
    ];

    const cards2 = [
      ...validCards,
      { number: '2', suit: 'C' },
      { number: '6', suit: 'S' },
    ];

    expect(getPairs(cards1)).toEqual(new Set(['Q']));

    expect(getPairs(cards2)).toEqual(new Set(['2', '6']));
  });
});
