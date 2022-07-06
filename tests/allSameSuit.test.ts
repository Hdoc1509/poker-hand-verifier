// @ts-ignore
import { toBeFalse, toBeTrue } from 'jest-extended';
import { Card } from '../src';
import { allSameSuit } from '../src/other-checkings';

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
    expect(() => allSameSuit()).toThrow(
      'Expect an Array of 2 or more cards as argument'
    );
  });

  test('Argument is not an Array throws an Error', () => {
    expect(() => allSameSuit({} as Array<Card>)).toThrow(
      'Expected an Array as argument'
    );
  });

  test('Empty Array as argument throws an Error', () => {
    expect(() => allSameSuit([])).toThrow(
      'Expected an Array of 2 or more cards as argument'
    );
  });

  test('Array with invalid cards throws an Error', () => {
    expect(() => allSameSuit(invalidCards as Array<Card>)).toThrow(
      'All cards must have "number" and "suit" properties values correctly.\nFound invalid card at index 1'
    );
  });

  test('Array that have less than 2 cards throws an Error', () => {
    expect(() => allSameSuit(oneCard)).toThrow(
      'Expected an Array of 2 or more cards as argument'
    );
  });

  test('Array with repeated cards throws an Error', () => {
    expect(() => allSameSuit(repeatedCard)).toThrow(
      'Array can not have repeated cards. Found repeated card: AS'
    );
  });

  test('All cards have not the same suit returns false', () => {
    expect(allSameSuit(differentSuit)).toBeFalse();
  });

  test('All cards with the same suit returns true', () => {
    expect(allSameSuit(sameSuit)).toBeTrue();
  });
});
