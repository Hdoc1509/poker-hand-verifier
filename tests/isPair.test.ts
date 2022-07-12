// @ts-ignore
import { toBeFalse, toBeTrue } from 'jest-extended';
import { isPair } from '../src/pair';

const cards = [
  { number: '5', suit: 'C' },
  { number: '7', suit: 'D' },
  { number: 'K', suit: 'H' },
];

const noPair = [
  ...cards,
  { number: 'K', suit: 'D' },
  { number: '8', suit: 'S' },
];

const pair = [...cards, { number: '5', suit: 'D' }, { number: 'Q', suit: 'D' }];

expect.extend({ toBeFalse, toBeTrue });

describe('--- isPair() ---', () => {
  test('Hand is not a PAIR of a specific number returns false', () => {
    expect(isPair(noPair, 'Q')).toBeFalse();
  });

  test('Hand is PAIR of a specific number returns true', () => {
    expect(isPair(pair, '5')).toBeTrue();
  });
});
