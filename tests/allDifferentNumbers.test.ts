// @ts-ignore
import { toBeFalse, toBeTrue } from 'jest-extended';
import { allDifferentNumbers } from '../src/other-checkings';
import { ERROR_MESSAGE } from '../src/utils/validate-cards';

expect.extend({ toBeFalse, toBeTrue });

const oneCard = [{ number: '3', suit: 'C' }];
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
  test('Array that have less than 2 cards throws an Error', () => {
    expect(() => allDifferentNumbers(oneCard)).toThrow(
      ERROR_MESSAGE.QuantityCards(1, { minimum: 2 })
    );
  });

  test('All cards with the same number returns false', () => {
    expect(allDifferentNumbers(validSameNumber)).toBeFalse();
  });

  test('All cards with different numbers returns true', () => {
    expect(allDifferentNumbers(validDifferentCards)).toBeTrue();
  });
});
