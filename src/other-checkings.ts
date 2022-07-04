import { Card } from './index';

export type NumberMatches = {
  matches: Array<Card>;
  notMatches: Array<Card>;
};

/** Check if all cards has different numbers */
export const allDifferentNumbers = (cards: Array<Card> = []): boolean => {
  if (!Array.isArray(cards)) throw new Error('Expected an Array as argument');

  if (cards.length < 2)
    throw new Error('Expected an Array of 2 or more cards as argument');

  if (cards.some((card) => card?.number == null || card?.suit == null)) {
    const invalidCardIndex = cards.findIndex(
      (card) => card?.number == null || card?.suit == null
    );

    throw new Error(
      `All cards must have "number" and "suit" properties initialized correctly.\nFound invalid card at index ${invalidCardIndex}`
    );
  }

  const repeatedCards = new Set(
    cards.map(({ number, suit }) => `${number}${suit}`)
  );

  if (repeatedCards.size < cards.length)
    throw new Error(
      `Array can not have repeated cards. Found repeated card: ${
        Array.from(repeatedCards)[0]
      }`
    );

  const numbers = new Set(cards.map(({ number }) => number));

  return numbers.size === cards.length;
};

/** Check if all cards has the same suit */
export const allSameSuit = (cards: Array<Card>): boolean => {
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
