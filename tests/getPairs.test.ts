import { Card } from '../src';
import { getPairs } from '../src/pair';
import { ERROR_MESSAGE } from '../src/utils/validate-cards';

const validCards: Array<Card> = [
  { number: '2', suit: 'H' },
  { number: 'Q', suit: 'D' },
  { number: '6', suit: 'D' },
];

const invalidCard = { notAllowed: 'number' };

describe('--- getPairs() ---', () => {
  test('No argument throws an Error', () => {
    expect(() => getPairs()).toThrow(
      ERROR_MESSAGE.QuantityCards(0, { minimum: 5 })
    );
  });

  test('Argument is not a valid Array of cards throws an specific Error', () => {
    expect(() => getPairs('invalid' as unknown as Array<Card>)).toThrow(
      ERROR_MESSAGE.NotArray
    );

    expect(() => getPairs(validCards)).toThrow(
      ERROR_MESSAGE.QuantityCards(3, { minimum: 5 })
    );

    expect(() =>
      getPairs([
        invalidCard,
        ...validCards,
        { number: '8', suit: 'H' },
      ] as Array<Card>)
    ).toThrow(ERROR_MESSAGE.InvalidCard(0));

    expect(() =>
      getPairs([
        ...validCards,
        { number: '6', suit: 'D' },
        { number: ' J', suit: 'D' },
      ])
    ).toThrow(ERROR_MESSAGE.RepeatedCard('6D'));
  });

  test('If there are no PAIR\'s returns an empty Set', () => {
    expect(
      getPairs([
        ...validCards,
        { number: 'A', suit: 'H' },
        { number: 'J', suit: 'D' },
      ])
    ).toEqual(new Set());
  });

  test('If there are PAIR\'s returns a Set with its numbers correctly', () => {
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
