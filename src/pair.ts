import { allDifferentNumbers, numberMatches } from './other-checkings';
import { Card } from './index';

/** Check if hand is an specific PAIR */
export const isPair = (cards: Array<Card>, number: string): boolean => {
  const { matches, notMatches: restNumbers } = numberMatches(cards, number);

  return matches.length === 2 && allDifferentNumbers(restNumbers);
};

/** Searchs for any possible PAIR and returns its card number, otherwise returns undefined */
export const findPair = (cards: Array<Card>): string =>
  cards.find(({ number }) => isPair(cards, number))?.number;

/** Returns all pairs in the hand */
export const getPairs = (cards: Array<Card>): Set<string> => {
  const pairs = cards
    .filter(({ number }) => numberMatches(cards, number).matches.length === 2)
    .map(({ number }) => number);

  return new Set(pairs);
};
