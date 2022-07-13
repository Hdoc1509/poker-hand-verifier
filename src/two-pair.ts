import { getPairs } from './pair';
import { Card } from './index';

/** Searchs for any possible TWO PAIR and returns its card numbers, otherwise returns undefined */
export const findTwoPair = (cards: Array<Card>): Array<string> => {
  const pairs = getPairs(cards);

  return pairs.size === 2 ? Array.from(pairs) : undefined;
};
