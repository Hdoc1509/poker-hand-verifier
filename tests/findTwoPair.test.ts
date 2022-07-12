import { findTwoPair } from '../src/two-pair';

const cards = [
  { number: 'J', suit: 'C' },
  { number: 'A', suit: 'H' },
  { number: '4', suit: 'S' },
];

const noTwoPair = [
  ...cards,
  { number: 'J', suit: 'D' },
  { number: '6', suit: 'C' },
];

const twoPair1 = [
  ...cards,
  { number: '4', suit: 'H' },
  { number: 'J', suit: 'D' },
];

const twoPair2 = [
  ...cards,
  { number: 'A', suit: 'C' },
  { number: '4', suit: 'D' },
];

describe('--- findTwoPair() ---', () => {
  test('If there is not TWO PAIR returns undefined', () => {
    expect(findTwoPair(noTwoPair)).toBeUndefined();
  });

  test('If there is a TWO PAIR returns its card numbers correctly', () => {
    expect(findTwoPair(twoPair1)).toEqual(['J', '4']);
    expect(findTwoPair(twoPair2)).toEqual(['A', '4']);
  });
});
