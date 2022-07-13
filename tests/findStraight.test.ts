import { findStraight } from '../src/straight';

const cards = [
  { number: '5', suit: 'D' },
  { number: '6', suit: 'D' },
  { number: '7', suit: 'D' },
];

const noStraight = [
  ...cards,
  { number: '5', suit: 'H' },
  { number: 'A', suit: 'C' },
];

const straight = [
  ...cards,
  { number: '4', suit: 'C' },
  { number: '8', suit: 'H' },
];

const straightFlush = [
  ...cards,
  { number: '8', suit: 'D' },
  { number: '9', suit: 'D' },
];

const royalFlush = [
  { number: '10', suit: 'S' },
  { number: 'J', suit: 'S' },
  { number: 'Q', suit: 'S' },
  { number: 'K', suit: 'S' },
  { number: 'A', suit: 'S' },
];

describe('--- findStraight() ---', () => {
  test('If there is no STRAIGHT returns undefined', () => {
    expect(findStraight(noStraight)).toBeUndefined();
  });

  test('If hand is a STRAIGHT returns its correspondent object', () => {
    expect(findStraight(straight)).toEqual({
      type: 'straight',
      description: 'Straight: 4 - 8',
    });
  });

  test('If hand is a STRAIGHT FLUSH returns its correspondent object', () => {
    expect(findStraight(straightFlush)).toEqual({
      type: 'straight-flush',
      description: 'Straight Flush (D): 5 - 9',
    });
  });

  test('If hand is ROYAL FLUSH returns its correspondent object', () => {
    expect(findStraight(royalFlush)).toEqual({
      type: 'royal-flush',
      description: 'Royal Flush (S)',
    });
  });
});
