import { getThreeOfKind } from '../src/three-of-kind';

const cards = [
  { number: '3', suit: 'D' },
  { number: '5', suit: 'C' },
  { number: '7', suit: 'H' },
];

const noThreeOfKind = [
  ...cards,
  { number: '8', suit: 'D' },
  { number: '10', suit: 'C' },
];

const threeOfKind1 = [
  ...cards,
  { number: '5', suit: 'D' },
  { number: '5', suit: 'H' },
];

const threeOfKind2 = [
  ...cards,
  { number: '7', suit: 'C' },
  { number: '7', suit: 'D' },
];

describe('--- getThreeOfKind() ---', () => {
  test('If there is no THREE OF A KIND returns an empty Set', () => {
    expect(getThreeOfKind(noThreeOfKind)).toEqual(new Set());
  });

  test('If there is a THREE OF A KIND returns a Set with its number correctly', () => {
    expect(getThreeOfKind(threeOfKind1)).toEqual(new Set('5'));
    expect(getThreeOfKind(threeOfKind2)).toEqual(new Set('7'));
  });
});
