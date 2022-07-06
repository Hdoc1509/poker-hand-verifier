import { getRepeatedCard } from './repeated-card';

const sameCard = [
  { number: 'A', suit: 'D' },
  { number: '5', suit: 'C' },
  { number: 'A', suit: 'D' },
];

const validCards = [
  { number: '2', suit: 'H' },
  { number: '3', suit: 'C' },
];

describe('--- getRepeatedCard() ---', () => {
  test('If there is a repeated card returns it', () => {
    expect(getRepeatedCard(sameCard)).toBe('AD');
  });

  test('If there is not a repeated card returns undefined', () => {
    expect(getRepeatedCard(validCards)).toBeUndefined();
  });
});
