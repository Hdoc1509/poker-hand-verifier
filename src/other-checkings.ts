import { Card } from './index';
import { VALID_NUMBER } from './utils/is-valid-card';
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
  cards: Array<Card> = [],
  numberToCheckMatches: string = null
): NumberMatches => {
  const validation = validateCards(cards, { minimum: 5 });

  if (!validation.ok)
    throw new Error(`Invalid Array of cards. ${validation.error}`);

  if (typeof numberToCheckMatches !== 'string')
    throw new TypeError('Argument "numberToCheckMatches" must be an String');

  if (numberToCheckMatches.match(VALID_NUMBER) === null)
    throw new Error('Argument "numberToCheckMatches" is not a valid number');

  return {
    matches: cards.filter(({ number }) => number === numberToCheckMatches),
    notMatches: cards.filter(({ number }) => number !== numberToCheckMatches),
  };
};
