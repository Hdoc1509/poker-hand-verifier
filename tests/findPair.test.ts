// @ts-ignore
import { Card } from '../src';
import { findPair } from '../src/pair';
import { ERROR_MESSAGE } from '../src/utils/validate-cards';

const validCards = [
  { number: '5', suit: 'C' },
  { number: '7', suit: 'D' },
  { number: 'K', suit: 'H' },
];

const invalidCard = { myNum: 'three' };

describe('--- findPair() ---', () => {
  test('No argument throws an Error', () => {
    expect(() => findPair()).toThrow('Expected 1 argument, but received 0.');
  });

  test('Argument is not a valid Array of cards throws an specific Error', () => {
    expect(() => findPair('not array' as unknown as Array<Card>)).toThrow(
      ERROR_MESSAGE.NotArray
    );

    expect(() => findPair(validCards)).toThrow(
      ERROR_MESSAGE.QuantityCards(3, { minimum: 5 })
    );

    expect(() =>
      findPair([
        ...validCards,
        invalidCard,
        { number: 'A', suit: 'S' },
      ] as Array<Card>)
    ).toThrow(ERROR_MESSAGE.InvalidCard(3));

    expect(() =>
      findPair([
        ...validCards,
        { number: 'K', suit: 'H' },
        { number: '10', suit: 'S' },
      ])
    ).toThrow(ERROR_MESSAGE.RepeatedCard('KH'));
  });

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
