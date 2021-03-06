import { allDifferentNumbers, numberMatches } from './other-checkings';
import { Card } from './index';

/** Check if hand is an specific THREE OF A KIND */
export const isThreeOfKind = (cards: Array<Card>, number: string): boolean => {
  const { matches, notMatches: restNumbers } = numberMatches(cards, number);

  return matches.length === 3 && allDifferentNumbers(restNumbers);
};

/** Searchs for any possible THREE OF A KIND and returns its card number, otherwise returns undefined */
export const findThreeOfKind = (cards: Array<Card>): string =>
  cards.find(({ number }) => isThreeOfKind(cards, number))?.number;

/** Returns the number that compose a THREE OF A KIND in the hand */
export const getThreeOfKind = (cards: Array<Card>): Set<string> => {
  const aux = cards
    .filter(({ number }) => numberMatches(cards, number).matches.length === 3)
    .map(({ number }) => number);

  return new Set(aux);
};
