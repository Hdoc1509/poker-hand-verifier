// @ts-ignore
import { toBeFalse, toBeTrue } from 'jest-extended';
import { Card } from '../src';
import { isPair } from '../src/pair';
import { ERROR_MESSAGE } from '../src/utils/validate-cards';

const validCards = [
  { number: '5', suit: 'C' },
  { number: '7', suit: 'D' },
  { number: 'K', suit: 'H' },
];

const invalidCard = { myNum: 'three' };

expect.extend({ toBeFalse, toBeTrue });

describe('--- isPair() ---', () => {
  const minimum = 5;

  test('No argument throws an Error', () => {
    expect(() => isPair()).toThrow(
      `Invalid Array of cards. ${ERROR_MESSAGE.QuantityCards(0, { minimum })}`
    );
  });

  test('Only one argument throws an Error', () => {
    expect(() =>
      isPair([
        ...validCards,
        { number: '8', suit: 'D' },
        { number: '9', suit: 'H' },
      ])
    ).toThrow('Argument "number" must be an String');
  });

  test('First argument is not a valid Array of cards throws an specific Error', () => {
    expect(() => isPair(false as unknown as Array<Card>, '5')).toThrow(
      `Invalid Array of cards. ${ERROR_MESSAGE.NotArray}`
    );

    expect(() => isPair([], '8')).toThrow(
      `Invalid Array of cards. ${ERROR_MESSAGE.QuantityCards(0, { minimum })}`
    );

    expect(() =>
      isPair(
        [
          { number: '10', suit: 'D' },
          { number: '9', suit: 'C' },
          invalidCard,
          validCards[0],
          validCards[2],
        ] as Array<Card>,
        'J'
      )
    ).toThrow(`Invalid Array of cards. ${ERROR_MESSAGE.InvalidCard(2)}`);

    expect(() =>
      isPair([validCards[0], ...validCards, { number: 'J', suit: 'D' }], 'K')
    ).toThrow(`Invalid Array of cards. ${ERROR_MESSAGE.RepeatedCard('5C')}`);
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
