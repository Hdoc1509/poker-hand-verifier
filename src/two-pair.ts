import { getPairs } from './pair';
import { Card } from './index';

/** Check if hand is any possible TWO PAIR */
export const isAnyTwoPair = (cards: Array<Card>): boolean => {
  const pairs = getPairs(cards);

  return pairs.size === 2;
};

/** Searchs for any possible TWO PAIR and returns its card numbers */
export const findTwoPair = (cards: Array<Card>): Array<string> =>
  Array.from(getPairs(cards));

/** Check if hand is an specific TWO PAIR */
export const isTwoPair = (
  cards: Array<Card>,
  [{ number: number1 }, { number: number2 }]: Array<Card>
): boolean => {
  const number1Matches = cards.filter(({ number }) => number === number1);
  const number2Matches = cards.filter(({ number }) => number === number2);

  return (
    number1Matches.length === 2 &&
    number2Matches.length === 2 &&
    number1 !== number2
  );
};
