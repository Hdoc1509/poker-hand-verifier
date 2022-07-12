// @ts-ignore
import { toBeFalse, toBeTrue } from 'jest-extended';
import { isPair } from '../src/pair';

const validCards = [
  { number: '5', suit: 'C' },
  { number: '7', suit: 'D' },
  { number: 'K', suit: 'H' },
];

expect.extend({ toBeFalse, toBeTrue });

describe('--- isPair() ---', () => {
  test('Hand is not a PAIR of a specific number returns false', () => {
    const cards = [
      ...validCards,
      { number: 'K', suit: 'D' },
      { number: '8', suit: 'S' },
    ];

    expect(isPair(cards, 'Q')).toBeFalse();
  });

  test('Hand is PAIR of a specific number returns true', () => {
    const cards = [
      ...validCards,
      { number: '5', suit: 'D' },
      { number: 'Q', suit: 'D' },
    ];

    expect(isPair(cards, '5')).toBeTrue();
  });
});
