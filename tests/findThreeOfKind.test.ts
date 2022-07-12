import { findThreeOfKind } from '../src/three-of-kind';

const cards = [
  { number: '7', suit: 'D' },
  { number: '10', suit: 'C' },
  { number: 'K', suit: 'S' },
];

const noThreeOfKind = [
  ...cards,
  { number: '3', suit: 'D' },
  { number: 'A', suit: 'S' },
];

const threeOfKind1 = [
  ...cards,
  { number: '10', suit: 'D' },
  { number: '10', suit: 'H' },
];

const threeOfKind2 = [
  ...cards,
  { number: 'K', suit: 'C' },
  { number: 'K', suit: 'D' },
];

describe('--- findThreeOfKind() ---', () => {
  test('If there is no THREE OF A KIND returns undefined', () => {
    expect(findThreeOfKind(noThreeOfKind)).toBeUndefined();
  });

  test('If there is a THREE OF A KIND returns its card number correctly', () => {
    expect(findThreeOfKind(threeOfKind1)).toBe('10');
    expect(findThreeOfKind(threeOfKind2)).toBe('K');
  });
});
