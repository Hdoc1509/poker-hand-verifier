import {
  allDifferentNumbers,
  allSameSuit,
  numberMatches,
} from './other-checkings';
import { Card } from './index';
import { validateCards } from './utils/validate-cards';
import { VALID_NUMBER } from './utils/is-valid-card';

/** Check if hand is an specific PAIR */
export const isPair = (
  cards: Array<Card> = [],
  number: string = null
): boolean => {
  const validation = validateCards(cards, { minimum: 5 });

  if (!validation.ok)
    throw new Error(`Invalid Array of cards. ${validation.error}`);

  if (typeof number !== 'string')
    throw new Error('Argument "number" must be an String');

  if (number.match(VALID_NUMBER) === null)
    throw new TypeError('Argument "number" is not a valid number');

  const { matches, notMatches: restNumbers } = numberMatches(cards, number);

  return (
    matches.length === 2 &&
    allDifferentNumbers(restNumbers) &&
    !allSameSuit(matches)
  );
};

/** Check if hand is any possible PAIR */
export const isAnyPair = (cards: Array<Card>): boolean =>
  cards.some(({ number }) => isPair(cards, number));

/** Searchs for any possible PAIR and returns its card number */
export const findPair = (cards: Array<Card> = []): string => {
  const validation = validateCards(cards, { minimum: 5 });

  if (!validation.ok) throw new Error(validation.error);

  return cards.find(({ number }) => isPair(cards, number))?.number;
};

/** Returns all pairs in the hand */
export const getPairs = (cards: Array<Card> = []): Set<string> => {
  const validation = validateCards(cards, { minimum: 5 });

  if (!validation.ok) throw new Error(validation.error);

  const aux = cards
    .filter(({ number }) => numberMatches(cards, number).matches.length === 2)
    .map(({ number }) => number);

  return new Set(aux);
};
