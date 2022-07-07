import { getRepeatedCard } from './repeated-card';

const sameCard = [
  { number: 'A', suit: 'D' },
  { number: '5', suit: 'C' },
  { number: 'A', suit: 'D' },
];

const otherCards = [
  { number: '6', suit: 'C' },
  { number: '7', suit: 'H' },
  { number: '2', suit: 'D' },
  { number: '7', suit: 'H' },
];

const validCards = [
  { number: '2', suit: 'H' },
  { number: '3', suit: 'C' },
];

describe('--- getRepeatedCard() ---', () => {
  test('If there is a repeated card returns it', () => {
    expect(getRepeatedCard(sameCard)).toBe('AD');
    expect(getRepeatedCard(otherCards)).toBe('7H');
  });

  test('If there is not a repeated card returns undefined', () => {
    expect(getRepeatedCard(validCards)).toBeUndefined();
  });
});
