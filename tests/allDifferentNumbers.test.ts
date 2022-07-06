// @ts-ignore
import { toBeFalse, toBeTrue } from 'jest-extended';
import { Card } from '../src';
import { allDifferentNumbers } from '../src/other-checkings';

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
      'Expected an Array of 2 or more cards as argument'
    );
  });

  test('Arguments is not an Array throws an Error', () => {
    expect(() =>
      allDifferentNumbers('not an array' as unknown as Array<Card>)
    ).toThrow('Expected an Array as argument');
  });

  test('Empty array as argument throws an Error', () => {
    expect(() => allDifferentNumbers([])).toThrow(
      'Expected an Array of 2 or more cards as argument'
    );
  });

  test('Array that have less than 2 cards throws an Error', () => {
    expect(() => allDifferentNumbers(oneCard)).toThrow(
      'Expected an Array of 2 or more cards as argument'
    );
  });

  test('Array with invalid cards throws an Error', () => {
    expect(() => allDifferentNumbers(invalidCards as Array<Card>)).toThrow(
      'All cards must have "number" and "suit" properties values correctly.\nFound invalid card at index 0'
    );
  });

  test('Array with repeated cards throws an Error', () => {
    expect(() => allDifferentNumbers(sameCard)).toThrow(
      'Array can not have repeated cards. Found repeated card: 3C'
    );
  });

  test('All cards with the same number returns false', () => {
    expect(allDifferentNumbers(validSameNumber)).toBeFalse();
  });

  test('All cards with different numbers returns true', () => {
    expect(allDifferentNumbers(validDifferentCards)).toBeTrue();
  });
});
