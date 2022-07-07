import { Card } from './index';
import {
  getInvalidCardIndex,
  NOT_FOUND_INVALID_INDEX,
} from './utils/is-valid-card';
import { getRepeatedCard } from './utils/repeated-card';
import { validateCards } from './utils/validate-cards';

export type NumberMatches = {
  matches: Array<Card>;
  notMatches: Array<Card>;
};

/** Check if all cards has different numbers */
export const allDifferentNumbers = (cards: Array<Card> = []): boolean => {
  const validation = validateCards(cards, { minimum: 2 });

  if (!validation.ok) throw new Error(validation.error);

  const numbers = new Set(cards.map(({ number }) => number));

  return numbers.size === cards.length;
};

/** Check if all cards has the same suit */
export const allSameSuit = (cards: Array<Card> = []): boolean => {
  const validation = validateCards(cards, { minimum: 2 });

  if (!validation.ok) throw new Error(validation.error);

  const suits = new Set(cards.map(({ suit }) => suit));

  return suits.size === 1;
};

/** Returns matches and not maches of a given card number */
export const numberMatches = (
  cards: Array<Card>,
  numberToCheck: string
): NumberMatches => ({
  matches: cards.filter(({ number }) => number === numberToCheck),
  notMatches: cards.filter(({ number }) => number !== numberToCheck),
});
