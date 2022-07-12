// @ts-ignore
import { toBeFalse, toBeTrue } from 'jest-extended';
import { isThreeOfKind } from '../src/three-of-kind';

const cards = [
  { number: '8', suit: 'D' },
  { number: 'A', suit: 'C' },
  { number: '5', suit: 'H' },
];

const noThreeOfKind = [
  ...cards,
  { number: 'A', suit: 'D' },
  { number: 'J', suit: 'S' },
];

const threeOfKind = [
  ...cards,
  { number: '5', suit: 'S' },
  { number: '5', suit: 'D' },
];

expect.extend({ toBeFalse, toBeTrue });

describe('--- isThreeOfKind() ---', () => {
  test('Hand is not a specific THREE OF A KIND returns false', () => {
    expect(isThreeOfKind(noThreeOfKind, 'A')).toBeFalse();
  });

  test('Hand is a THREE OF A KIND returns true', () => {
    expect(isThreeOfKind(threeOfKind, '5')).toBeTrue();
  });
});
