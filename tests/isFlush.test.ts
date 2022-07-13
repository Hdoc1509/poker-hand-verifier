// @ts-ignore
import { toBeFalse, toBeTrue } from 'jest-extended';
import { isFlush } from '../src/flush';

const cards = [
  { number: 'A', suit: 'D' },
  { number: '6', suit: 'D' },
  { number: 'Q', suit: 'D' },
];

const notFlush = [
  ...cards,
  { number: '10', suit: 'C' },
  { number: '3', suit: 'H' },
];

const flush1 = [
  ...cards,
  { number: '8', suit: 'D' },
  { number: '3', suit: 'D' },
];

const flush2 = [
  { number: '4', suit: 'H' },
  { number: 'J', suit: 'H' },
  { number: '10', suit: 'H' },
  { number: '6', suit: 'H' },
  { number: 'A', suit: 'H' },
];

expect.extend({ toBeFalse, toBeTrue });

describe('--- isFlush() ---', () => {
  test('If hand is not a FLUSH returns false', () => {
    expect(isFlush(notFlush)).toBeFalse();
  });

  test('If hand is FLUSH returns true', () => {
    expect(isFlush(flush1)).toBeTrue();
    expect(isFlush(flush2)).toBeTrue();
  });
});
