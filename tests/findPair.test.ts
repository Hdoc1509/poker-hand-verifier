import { findPair } from '../src/pair';

const validCards = [
  { number: '5', suit: 'C' },
  { number: '7', suit: 'D' },
  { number: 'K', suit: 'H' },
];

describe('--- findPair() ---', () => {
  test('If there is no PAIR returns undefined', () => {
    const cards = [
      ...validCards,
      { number: 'A', suit: 'D' },
      { number: 'Q', suit: 'D' },
    ];

    expect(findPair(cards)).toBeUndefined();
  });

  test('If there is a PAIR returns its card number correctly', () => {
    const cards1 = [
      ...validCards,
      { number: '5', suit: 'D' },
      { number: 'J', suit: 'D' },
    ];

    const cards2 = [
      ...validCards,
      { number: '8', suit: 'C' },
      { number: '8', suit: 'H' },
    ];

    expect(findPair(cards1)).toBe('5');

    expect(findPair(cards2)).toBe('8');
  });
});
