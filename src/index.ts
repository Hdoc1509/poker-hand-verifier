import { findPair } from './pair';
import { findTwoPair } from './two-pair';
import { findThreeOfKind } from './three-of-kind';
import { findStraight } from './straight';
import { isFlush } from './flush';
import { isAnyFullHouse, findFullHouse } from './full-house';
import { isAnyFourOfKind, findFourOfKind } from './four-of-kind';
import { isHighCard } from './high-card';
import { validateCards } from './utils/validate-cards';

export type Card = {
  number: string;
  suit: string;
};

export type HandData = {
  cards: Array<string>;
  description: string;
  type: string;
};

/** Verificate an specific hand and returns its data */
export const verificateHand = (cards: Array<Card>): HandData => {
  const validation = validateCards(cards, { minimum: 5 });

  if (!validation.ok) throw new Error(validation.error);

  const stringCards = cards.map(({ number, suit }) => `${number}${suit}`);

  // HIGH CARD
  if (isHighCard(cards))
    return {
      cards: stringCards,
      description: 'High Card (A)',
      type: 'high-card',
    };

  // PAIR
  const pairNumber = findPair(cards);

  if (pairNumber !== undefined)
    return {
      cards: stringCards,
      description: `Pair (${pairNumber})`,
      type: 'pair',
    };

  // TWO PAIR
  const twoPairNumbers = findTwoPair(cards);

  if (twoPairNumbers !== undefined) {
    const [pair1, pair2] = twoPairNumbers;

    return {
      cards: stringCards,
      description: `Two Pair: (${pair1} & ${pair2})`,
      type: 'two-pair',
    };
  }

  // THREE OF A KIND
  const threeOfKindNumber = findThreeOfKind(cards);

  if (threeOfKindNumber !== undefined)
    return {
      cards: stringCards,
      description: `Three of a Kind (${threeOfKindNumber})`,
      type: 'three-of-kind',
    };

  // STRAIGHTS
  const straightData = findStraight(cards);

  if (straightData !== undefined) {
    const { description, type } = straightData;

    return { cards: stringCards, description, type };
  }

  // FLUSH
  if (isFlush(cards))
    return {
      cards: stringCards,
      description: `Flush (${cards[0].suit})`,
      type: 'flush',
    };

  // FULL HOUSE
  if (isAnyFullHouse(cards)) {
    const { pair, threeOfKind } = findFullHouse(cards);

    return {
      cards: stringCards,
      description: `Full House (Pair of ${pair} & Three of Kind ${threeOfKind})`,
      type: 'full-house',
    };
  }

  // FOUR OF A KIND
  if (isAnyFourOfKind(cards)) {
    const number = findFourOfKind(cards);

    return {
      cards: stringCards,
      description: `Four of a Kind (${number})`,
      type: 'four-of-kind',
    };
  }

  return { cards: stringCards, description: 'Nothing', type: 'nothing' };
};
