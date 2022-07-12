import { findPair } from '../src/pair';

const validCards = [
  { number: '5', suit: 'C' },
  { number: '7', suit: 'D' },
  { number: 'K', suit: 'H' },
];

const noPair = [
  ...validCards,
  { number: 'A', suit: 'D' },
  { number: 'Q', suit: 'D' },
];

const pair1 = [
  ...validCards,
  { number: '5', suit: 'D' },
  { number: 'J', suit: 'D' },
];

const pair2 = [
  ...validCards,
  { number: '8', suit: 'C' },
  { number: '8', suit: 'H' },
];

describe('--- findPair() ---', () => {
  test('If there is no PAIR returns undefined', () => {
    expect(findPair(noPair)).toBeUndefined();
  });

  test('If there is a PAIR returns its card number correctly', () => {
    expect(findPair(pair1)).toBe('5');
    expect(findPair(pair2)).toBe('8');
  });
});
