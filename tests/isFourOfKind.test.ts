// @ts-ignore
import { toBeFalse, toBeTrue } from 'jest-extended';
import { isFourOfKind } from '../src/four-of-kind';

const cards = [
  { number: 'A', suit: 'D' },
  { number: '2', suit: 'C' },
  { number: 'A', suit: 'H' },
];

const noFourOfKind = [
  ...cards,
  { number: '2', suit: 'S' },
  { number: 'K', suit: 'C' },
];

const fourOfKind = [
  ...cards,
  { number: 'A', suit: 'C' },
  { number: 'A', suit: 'S' },
];

expect.extend({ toBeFalse, toBeTrue });

describe('--- isFourOfKind() ---', () => {
  test('Hand is not a specific FOUR OF A KIND returns false', () => {
    expect(isFourOfKind(noFourOfKind, 'Q')).toBeFalse();
  });

  test('Hand is a specific FOUR OF A KIND returns true', () => {
    expect(isFourOfKind(fourOfKind, 'A')).toBeTrue();
  });
});
