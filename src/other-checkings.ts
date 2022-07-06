import { Card } from './index';
import {
  getInvalidCardIndex,
  NOT_FOUND_INVALID_INDEX,
} from './utils/is-valid-card';
import { getRepeatedCard } from './utils/repeated-card';

export type NumberMatches = {
  matches: Array<Card>;
  notMatches: Array<Card>;
};

/** Check if all cards has different numbers */
export const allDifferentNumbers = (cards: Array<Card> = []): boolean => {
  if (!Array.isArray(cards)) throw new Error('Expected an Array as argument');

  if (cards.length < 2)
    throw new Error('Expected an Array of 2 or more cards as argument');

  if (getInvalidCardIndex(cards) !== NOT_FOUND_INVALID_INDEX)
    throw new Error(
      `All cards must have "number" and "suit" properties values correctly.\nFound invalid card at index ${getInvalidCardIndex(
        cards
      )}`
    );

  if (getRepeatedCard(cards))
    throw new Error(
      `Array can not have repeated cards. Found repeated card: ${getRepeatedCard(
        cards
      )}`
    );

  const numbers = new Set(cards.map(({ number }) => number));

  return numbers.size === cards.length;
};

/** Check if all cards has the same suit */
export const allSameSuit = (cards: Array<Card> = []): boolean => {
  if (!Array.isArray(cards)) throw new Error('Expected an Array as argument');

  if (cards.length < 2)
    throw new Error('Expected an Array of 2 or more cards as argument');

  if (getInvalidCardIndex(cards) !== NOT_FOUND_INVALID_INDEX)
    throw new Error(
      `All cards must have "number" and "suit" properties values correctly.\nFound invalid card at index ${getInvalidCardIndex(
        cards
      )}`
    );

  if (getRepeatedCard(cards))
    throw new Error(
      `Array can not have repeated cards. Found repeated card: ${getRepeatedCard(
        cards
      )}`
    );

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
