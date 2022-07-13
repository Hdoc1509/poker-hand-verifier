import { findFullHouse } from '../src/full-house';

const cards = [
  { number: '3', suit: 'D' },
  { number: '7', suit: 'H' },
  { number: '3', suit: 'C' },
];

const noFullHouse = [
  ...cards,
  { number: '3', suit: 'H' },
  { number: 'Q', suit: 'D' },
];

const fullHouse1 = [
  ...cards,
  { number: '7', suit: 'D' },
  { number: '3', suit: 'S' },
];

const fullHouse2 = [
  ...cards,
  { number: '7', suit: 'S' },
  { number: '7', suit: 'C' },
];

describe('--- findFullHouse() ---', () => {
  test('If there is no FULL HOUSE returns undefined', () => {
    expect(findFullHouse(noFullHouse)).toBeUndefined();
  });

  test('If hand is a FULL HOUSE returns its data object correctly', () => {
    expect(findFullHouse(fullHouse1)).toEqual({ pair: '7', threeOfKind: '3' });

    expect(findFullHouse(fullHouse2)).toEqual({ pair: '3', threeOfKind: '7' });
  });
});
