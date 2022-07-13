// @ts-ignore
import { toBeFalse, toBeTrue } from 'jest-extended';
import { isStraight } from '../src/straight';

const cards = [
  { number: '5', suit: 'D' },
  { number: '6', suit: 'D' },
  { number: '7', suit: 'D' },
];

const noStraight = [
  ...cards,
  { number: '5', suit: 'H' },
  { number: 'A', suit: 'C' },
];

const straight = [
  ...cards,
  { number: '4', suit: 'C' },
  { number: '8', suit: 'H' },
];

const straightFlush = [
  ...cards,
  { number: '8', suit: 'D' },
  { number: '9', suit: 'D' },
];

const royalFlush = [
  { number: '10', suit: 'S' },
  { number: 'J', suit: 'S' },
  { number: 'Q', suit: 'S' },
  { number: 'K', suit: 'S' },
  { number: 'A', suit: 'S' },
];

expect.extend({ toBeFalse, toBeTrue });

describe('--- isStraight() ---', () => {
  test('Hand is not an specific STRAIGHT returns false', () => {
    expect(isStraight(noStraight, '5-9')).toBeFalse();
  });

  test('Hand is a specific STRAIGHT returns true', () => {
    expect(isStraight(straight, '4-8')).toBeTrue();
  });

  test('Hand is also a STRAIGHT FLUSH returns true', () => {
    expect(isStraight(straightFlush, '5-9')).toBeTrue();
  });

  test('Hand is also a ROYAL FLUSH returns true', () => {
    expect(isStraight(royalFlush, '10-A')).toBeTrue();
  });
});
