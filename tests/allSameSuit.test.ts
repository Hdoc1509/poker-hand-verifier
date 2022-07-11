// @ts-ignore
import { toBeFalse, toBeTrue } from 'jest-extended';
import { allSameSuit } from '../src/other-checkings';

expect.extend({ toBeFalse, toBeTrue });

const oneCard = [{ number: 'K', suit: 'D' }];
const differentSuit = [
  { number: '9', suit: 'C' },
  { number: '10', suit: 'S' },
];
const sameSuit = [
  { number: 'Q', suit: 'H' },
  { number: '4', suit: 'H' },
];

describe('--- allSameSuit() ---', () => {
  test('Array that have less than 2 cards throws an Error', () => {
    expect(() => allSameSuit(oneCard)).toThrow('Expected an Array of minimum 2 cards');
  });

  test('All cards have not the same suit returns false', () => {
    expect(allSameSuit(differentSuit)).toBeFalse();
  });

  test('All cards with the same suit returns true', () => {
    expect(allSameSuit(sameSuit)).toBeTrue();
  });
});
