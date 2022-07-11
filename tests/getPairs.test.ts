import { getPairs } from '../src/pair';

const validCards = [
  { number: '2', suit: 'H' },
  { number: 'Q', suit: 'D' },
  { number: '6', suit: 'D' },
];

describe('--- getPairs() ---', () => {
  test("If there are no PAIR's returns an empty Set", () => {
    expect(
      getPairs([
        ...validCards,
        { number: 'A', suit: 'H' },
        { number: 'J', suit: 'D' },
      ])
    ).toEqual(new Set());
  });

  test("If there are PAIR's returns a Set with its numbers correctly", () => {
    expect(
      getPairs([
        ...validCards,
        { number: 'Q', suit: 'C' },
        { number: '7', suit: 'D' },
      ])
    ).toEqual(new Set(['Q']));

    expect(
      getPairs([
        ...validCards,
        { number: '2', suit: 'C' },
        { number: '6', suit: 'S' },
      ])
    ).toEqual(new Set(['2', '6']));
  });
});
