// @ts-ignore
import { toBeFalse, toBeTrue } from 'jest-extended';
import { Card } from '../src';
import { allSameSuit } from '../src/other-checkings';
import { ERROR_MESSAGE } from '../src/utils/validate-cards';

expect.extend({ toBeFalse, toBeTrue });

const invalidCards = [{ number: '6', suit: 'H' }, 'invalid'];
const oneCard = [{ number: 'K', suit: 'D' }];
const repeatedCard = [...oneCard, ...oneCard];
const differentSuit = [
  { number: '9', suit: 'C' },
  { number: '10', suit: 'S' },
];
const sameSuit = [
  { number: 'Q', suit: 'H' },
  { number: '4', suit: 'H' },
];

describe('--- allSameSuit() ---', () => {
  test('No argument throws an Error', () => {
    expect(() => allSameSuit()).toThrow(ERROR_MESSAGE.QuantityCards(0));
  });

  test('Argument is not an Array throws an Error', () => {
    expect(() => allSameSuit({} as Array<Card>)).toThrow(
      ERROR_MESSAGE.NotArray
    );
  });

  test('Empty Array as argument throws an Error', () => {
    expect(() => allSameSuit([])).toThrow(
      ERROR_MESSAGE.QuantityCards(0)
    );
  });

  test('Array with invalid cards throws an Error', () => {
    expect(() => allSameSuit(invalidCards as Array<Card>)).toThrow(
      ERROR_MESSAGE.InvalidCard(1)
    );
  });

  test('Array that have less than 2 cards throws an Error', () => {
    expect(() => allSameSuit(oneCard)).toThrow(
      ERROR_MESSAGE.QuantityCards(1)
    );
  });

  test('Array with repeated cards throws an Error', () => {
    expect(() => allSameSuit(repeatedCard)).toThrow(
      ERROR_MESSAGE.RepeatedCard('KD')
    );
  });

  test('All cards have not the same suit returns false', () => {
    expect(allSameSuit(differentSuit)).toBeFalse();
  });

  test('All cards with the same suit returns true', () => {
    expect(allSameSuit(sameSuit)).toBeTrue();
  });
});
