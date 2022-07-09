import {
  allDifferentNumbers,
  allSameSuit,
  numberMatches,
} from './other-checkings';
import { Card } from './index';
import { validateCards } from './utils/validate-cards';

/** Check if hand is an specific PAIR */
const isPair = (cards: Array<Card>, { number }: Card): boolean => {
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
export const findPair = (cards: Array<Card> = []): string => {
  const validation = validateCards(cards, { minimum: 5 });

  if (!validation.ok) throw new Error(validation.error);

  return cards.find((card) => isPair(cards, card))?.number;
};

/** Returns all pairs in the hand */
export const getPairs = (cards: Array<Card> = []): Set<string> => {
  const validation = validateCards(cards, { minimum: 5 });

  if (!validation.ok) throw new Error(validation.error);

  const aux = cards
    .filter(({ number }) => {
      const { matches } = numberMatches(cards, number);

      return matches.length === 2 && !allSameSuit(matches);
    })
    .map(({ number }) => number);

  return new Set(aux);
};
