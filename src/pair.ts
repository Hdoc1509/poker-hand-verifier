import { allDifferentNumbers, numberMatches } from './other-checkings';
import { Card } from './index';
import { VALID_NUMBER } from './utils/is-valid-card';

/** Check if hand is an specific PAIR */
export const isPair = (
  cards: Array<Card>,
  numberToCheckPair: string
): boolean => {
  if (numberToCheckPair.match(VALID_NUMBER) === null)
    throw new Error('Argument "numberToCheckPair" is not a valid number');

  const { matches, notMatches: restNumbers } = numberMatches(
    cards,
    numberToCheckPair
  );

  return matches.length === 2 && allDifferentNumbers(restNumbers);
};

/** Searchs for any possible PAIR and returns its card number */
export const findPair = (cards: Array<Card>): string =>
  cards.find(({ number }) => isPair(cards, number))?.number;

/** Returns all pairs in the hand */
export const getPairs = (cards: Array<Card>): Set<string> => {
  const pairs = cards
    .filter(({ number }) => numberMatches(cards, number).matches.length === 2)
    .map(({ number }) => number);

  return new Set(pairs);
};
