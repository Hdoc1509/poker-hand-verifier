import {
  allDifferentNumbers,
  allSameSuit,
  numberMatches,
} from './other-checkings';
import { Card } from './index';

/** Check if hand is an specific PAIR */
export const isPair = (cards: Array<Card>, { number }: Card): boolean => {
  const { matches, notMatches: restNumbers } = numberMatches(cards, number);

  return (
    matches.length === 2 &&
    allDifferentNumbers(restNumbers) &&
    !allSameSuit(matches)
  );
};

/** Check if hand is any possible PAIR */
export const isAnyPair = (cards: Array<Card>): boolean =>
  cards.some((card) => isPair(cards, card));

/** Searchs for any possible PAIR and returns its card number */
export const findPair = (cards: Array<Card>): string =>
  cards.find((card) => isPair(cards, card)).number;

/** Returns all pairs in the hand */
export const getPairs = (cards: Array<Card>): Set<string> => {
  const aux = cards
    .filter(({ number }) => {
      const { matches } = numberMatches(cards, number);

      return matches.length === 2 && !allSameSuit(matches);
    })
    .map(({ number }) => number);

  return new Set(aux);
};
