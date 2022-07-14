import { findFourOfKind } from '../src/four-of-kind';

const cards = [
  { number: 'J', suit: 'H' },
  { number: 'J', suit: 'C' },
  { number: 'A', suit: 'H' },
];

const noFourOfKind = [
  ...cards,
  { number: '2', suit: 'S' },
  { number: 'K', suit: 'C' },
];

const fourOfKind1 = [
  ...cards,
  { number: 'J', suit: 'D' },
  { number: 'J', suit: 'S' },
];

const fourOfKind2 = [
  { number: '10', suit: 'H' },
  { number: 'K', suit: 'D' },
  { number: '10', suit: 'S' },
  { number: '10', suit: 'D' },
  { number: '10', suit: 'C' },
];

describe('--- findFourOfKind() ---', () => {
  test('If hand is not a FOUR OF A KIND returns undefined', () => {
    expect(findFourOfKind(noFourOfKind)).toBeUndefined();
  });

  test('If hand is a FOUR OF A KIND returns its cards number correctly', () => {
    expect(findFourOfKind(fourOfKind1)).toEqual('J');
    expect(findFourOfKind(fourOfKind2)).toEqual('10');
  });
});
