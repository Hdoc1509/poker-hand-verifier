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
  test('"numberToCheckPair" argument is not a valid number throws an Error', () => {
    const cards = [
      ...validCards,
      { number: 'K', suit: 'D' },
      { number: '8', suit: 'S' },
    ];

    expect(() => isPair(cards, '1')).toThrow(
      'Argument "numberToCheckPair" is not a valid number'
    );
  });

  test('Hand is not a PAIR of a specific number returns false', () => {
    expect(
      isPair(
        [...validCards, { number: 'K', suit: 'D' }, { number: '8', suit: 'S' }],
        'Q'
      )
    ).toBeFalse();
  });

  test('Hand is PAIR of a specific number returns true', () => {
    expect(
      isPair(
        [...validCards, { number: '5', suit: 'D' }, { number: 'Q', suit: 'D' }],
        '5'
      )
    ).toBeTrue();
  });
});
