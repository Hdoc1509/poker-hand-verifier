import { findPair } from '../src/pair';

const validCards = [
  { number: '5', suit: 'C' },
  { number: '7', suit: 'D' },
  { number: 'K', suit: 'H' },
];

describe('--- findPair() ---', () => {
  test('If there is no PAIR returns undefined', () => {
    expect(
      findPair([
        ...validCards,
        { number: 'A', suit: 'D' },
        { number: 'Q', suit: 'D' },
      ])
    ).toBeUndefined();
  });

  test('If there is a PAIR returns its card number correctly', () => {
    expect(
      findPair([
        ...validCards,
        { number: '5', suit: 'D' },
        { number: 'J', suit: 'D' },
      ])
    ).toBe('5');

    expect(
      findPair([
        ...validCards,
        { number: '8', suit: 'C' },
        { number: '8', suit: 'H' },
      ])
    ).toBe('8');
  });
});
