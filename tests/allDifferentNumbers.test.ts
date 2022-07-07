// @ts-ignore
import { toBeFalse, toBeTrue } from 'jest-extended';
import { Card } from '../src';
import { allDifferentNumbers } from '../src/other-checkings';
import { ERROR_MESSAGE } from '../src/utils/validate-cards';

expect.extend({ toBeFalse, toBeTrue });

const invalidCards = [{ invalidProp: 'anything', suit: 'H' }, {}];
const oneCard = [{ number: '3', suit: 'C' }];
const sameCard = [...oneCard, ...oneCard];
const validSameNumber = [
  { number: '4', suit: 'D' },
  { number: '4', suit: 'S' },
  { number: '4', suit: 'C' },
];
const validDifferentCards = [
  { number: '2', suit: 'H' },
  { number: '3', suit: 'C' },
];

describe('--- allDifferentNumbers() ---', () => {
  test('No argument trhows an Error', () => {
    expect(() => allDifferentNumbers()).toThrow(
      ERROR_MESSAGE.QuantityCards(0, { minimum: 2 })
    );
  });

  test('Arguments is not an Array throws an Error', () => {
    expect(() =>
      allDifferentNumbers('not an array' as unknown as Array<Card>)
    ).toThrow(ERROR_MESSAGE.NotArray);
  });

  test('Empty array as argument throws an Error', () => {
    expect(() => allDifferentNumbers([])).toThrow(
      ERROR_MESSAGE.QuantityCards(0, { minimum: 2 })
    );
  });

  test('Array with invalid cards throws an Error', () => {
    expect(() => allDifferentNumbers(invalidCards as Array<Card>)).toThrow(
      ERROR_MESSAGE.InvalidCard(0)
    );
  });

  test('Array that have less than 2 cards throws an Error', () => {
    expect(() => allDifferentNumbers(oneCard)).toThrow(
      ERROR_MESSAGE.QuantityCards(1, { minimum: 2 })
    );
  });

  test('Array with repeated cards throws an Error', () => {
    expect(() => allDifferentNumbers(sameCard)).toThrow(
      ERROR_MESSAGE.RepeatedCard('3C')
    );
  });

  test('All cards with the same number returns false', () => {
    expect(allDifferentNumbers(validSameNumber)).toBeFalse();
  });

  test('All cards with different numbers returns true', () => {
    expect(allDifferentNumbers(validDifferentCards)).toBeTrue();
  });
});
