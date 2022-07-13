import { numberMatches } from './other-checkings';
import { Card } from './index';

/** Check if hand is an specific FOUR OF A KIND */
export const isFourOfKind = (cards: Array<Card>, number: string): boolean => {
  const { matches } = numberMatches(cards, number);

  return matches.length === 4;
};

/** Check if hand is any possible FOUR OF A KIND */
export const isAnyFourOfKind = (cards: Array<Card>) =>
  cards.some(({ number }) => isFourOfKind(cards, number));

/** Searchs for any possible FOUR OF A KIND and returns its card number */
export const findFourOfKind = (cards: Array<Card>): string =>
  cards.find(({ number }) => isFourOfKind(cards, number)).number;
