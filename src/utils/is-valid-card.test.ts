// @ts-ignore
import { toBeFalse, toBeTrue } from 'jest-extended';
import {
  getInvalidCardIndex,
  isValidCard,
  NOT_FOUND_INVALID_INDEX,
} from './is-valid-card';

expect.extend({ toBeFalse, toBeTrue });

const invalidCard = { invalid: true, prop: 'not allowed' };
const validCard = { number: 'A', suit: 'S' };
const invalidCards = [invalidCard, {}, 'random'];

describe('--- isValidCard() ---', () => {
  test('Invalid card returns false', () => {
    expect(isValidCard('not a card')).toBeFalse();
    expect(isValidCard([])).toBeFalse();
    expect(isValidCard({})).toBeFalse();
    expect(isValidCard(invalidCard)).toBeFalse();
  });

  test('Valid card returns true', () => {
    expect(isValidCard({ number: '10', suit: 'H' })).toBeTrue();
    expect(isValidCard({ suit: 'C', number: 'A' })).toBeTrue();
    expect(isValidCard(validCard)).toBeTrue();
  });
});

describe('--- getInvalidCardIndex() ---', () => {
  test('If there is no invalid card returns -1', () => {
    expect(
      getInvalidCardIndex([
        { number: '3', suit: 'H' },
        { number: 'K', suit: 'D' },
      ])
    ).toBe(NOT_FOUND_INVALID_INDEX);
  });

  test('Getting the index of invalid card correctly', () => {
    expect(getInvalidCardIndex(invalidCards)).toBe(0);
    expect(getInvalidCardIndex([{ number: 'A', suit: 'C' }, 'card'])).toBe(1);
  });
});
