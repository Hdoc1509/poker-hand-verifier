import { stringifyCards } from './stringify-cards';

const cards = [
  { number: 'A', suit: 'D' },
  { number: '10', suit: 'C' },
  { number: 'K', suit: 'S' },
  { number: '7', suit: 'D' },
  { number: '5', suit: 'H' },
];

describe('--- stringifyCards() ---', () => {
  test('Stringigy cards correctly', () => {
    expect(stringifyCards(cards)).toEqual(['AD', '10C', 'KS', '7D', '5H']);
  });
});
