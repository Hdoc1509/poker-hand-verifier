import { Card } from '../src';
import { numberMatches } from '../src/other-checkings';
import { ERROR_MESSAGE } from '../src/utils/validate-cards';

const sameNumber = [
  { number: '4', suit: 'D' },
  { number: '4', suit: 'S' },
  { number: '4', suit: 'C' },
];

const repeatedCards = [
  sameNumber[0],
  { number: '3', suit: 'D' },
  { number: '3', suit: 'D' },
];

const otherCards = [
  { number: '6', suit: 'S' },
  { number: 'Q', suit: 'C' },
];

const invalidCard = { number: '12', other: 'F' };

describe('--- numberMatches() ---', () => {
  test('No argument throws an Error', () => {
    expect(() => numberMatches()).toThrow(
      'Expected 2 arguments, but received 0.'
    );
  });

  test('Only one argument throws an Error', () => {
    expect(() => numberMatches(sameNumber)).toThrow(
      'Expected 2 arguments, but received 1. Missing "numberToCheck" argument.'
    );
  });

  test('First argument is not an Array throws an Error', () => {
    expect(() =>
      numberMatches('invalid' as unknown as Array<Card>, '1')
    ).toThrow(`Invalid Array of cards. ${ERROR_MESSAGE.NotArray}`);
  });

  test('First argument is not a valid Array of cards throws an specific Error', () => {
    const minimum = 5;

    expect(() => numberMatches([], '4')).toThrow(
      `Invalid Array of cards. ${ERROR_MESSAGE.QuantityCards(0, { minimum })}`
    );

    expect(() =>
      numberMatches(
        [...sameNumber, invalidCard, { number: 'K', suit: 'C' }] as Array<Card>,
        '4'
      )
    ).toThrow(`Invalid Array of cards. ${ERROR_MESSAGE.InvalidCard(3)}`);

    expect(() =>
      numberMatches(
        [
          ...repeatedCards,
          { number: 'Q', suit: 'H' },
          { number: 'A', suit: 'S' },
        ],
        '2'
      )
    ).toThrow(`Invalid Array of cards. ${ERROR_MESSAGE.RepeatedCard('3D')}`);
  });

  test('Returns natches and not matches correctly', () => {
    expect(numberMatches([...sameNumber, ...otherCards], '4')).toEqual({
      matches: [...sameNumber],
      notMatches: [...otherCards],
    });
  });
});
