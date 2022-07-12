// @ts-ignore
import { toBeFalse, toBeTrue } from 'jest-extended';
import { isHighCard } from '../src/high-card';

const cards = [
  { number: '4', suit: 'D' },
  { number: '7', suit: 'H' },
  { number: 'J', suit: 'C' },
  { number: 'K', suit: 'S' },
];

const noHighCard = [...cards, { number: '4', suit: 'H' }];

const highCard1 = [...cards, { number: 'A', suit: 'S' }];

const highCard2 = [{ number: 'A', suit: 'D' }, ...cards];

expect.extend({ toBeFalse, toBeTrue });

describe('--- isHighCard() ---', () => {
  test('If there is no HIGH CARD returns false', () => {
    expect(isHighCard(noHighCard)).toBeFalse();
  });

  test('If there is a HIGH CARD returns true', () => {
    expect(isHighCard(highCard1)).toBeTrue();
    expect(isHighCard(highCard2)).toBeTrue();
  });
});
