import {
  allDifferentNumbers,
  allSameSuit,
  numberMatches,
} from './other-checkings';
import { Card } from './index';

/** Check if hand is an specific THREE OF A KIND */
export const isThreeOfKind = (cards: Array<Card>, number: string): boolean => {
  const { matches, notMatches: restNumbers } = numberMatches(cards, number);

  return matches.length === 3 && allDifferentNumbers(restNumbers);
};

/** Check if hand is any possible THREE OF KIND */
export const isAnyThreeOfKind = (cards: Array<Card>): boolean =>
  cards.some(({ number }) => isThreeOfKind(cards, number));

/** Searchs for any possible THREE OF KIND and returns its card number */
export const findThreeOfKind = (cards: Array<Card>): string =>
  cards.find(({ number }) => isThreeOfKind(cards, number))?.number;

/** Returns the number that compose the THREE OF A KIND in the hand */
export const getThreeOfKind = (cards: Array<Card>): Set<string> => {
  const aux = cards
    .filter(({ number }) => {
      const { matches } = numberMatches(cards, number);

      return matches.length === 3 && !allSameSuit(matches);
    })
    .map(({ number }) => number);

  return new Set(aux);
};
