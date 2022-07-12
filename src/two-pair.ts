import { getPairs } from './pair';
import { Card } from './index';

/** Check if hand is any possible TWO PAIR */
export const isAnyTwoPair = (cards: Array<Card>): boolean => {
  const pairs = getPairs(cards);

  return pairs.size === 2;
};

/** Searchs for any possible TWO PAIR and returns its card numbers */
export const findTwoPair = (cards: Array<Card>): Array<string> => {
  const pairs = getPairs(cards);

  return pairs.size === 2 ? Array.from(pairs) : undefined;
};
