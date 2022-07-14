import { findPair } from './pair';
import { findTwoPair } from './two-pair';
import { findThreeOfKind } from './three-of-kind';
import { findStraight } from './straight';
import { isFlush } from './flush';
import { findFullHouse } from './full-house';
import { findFourOfKind } from './four-of-kind';
import { isHighCard } from './high-card';
import { validateCards } from './utils/validate-cards';
import { stringifyCards } from './utils/stringify-cards';

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

  const stringCards = stringifyCards(cards);

  // HIGH CARD
  if (isHighCard(cards))
    return {
      cards: stringCards,
      description: 'High Card',
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
      description: `Two Pair (${pair1} & ${pair2})`,
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

  if (straightData !== undefined)
    return { cards: stringCards, ...straightData };

  // FLUSH
  if (isFlush(cards))
    return {
      cards: stringCards,
      description: `Flush (${cards[0].suit})`,
      type: 'flush',
    };

  // FULL HOUSE
  const fullHouseData = findFullHouse(cards);

  if (fullHouseData !== undefined) {
    const { pair, threeOfKind } = fullHouseData;

    return {
      cards: stringCards,
      description: `Full House (Pair: ${pair} & Three of Kind: ${threeOfKind})`,
      type: 'full-house',
    };
  }

  // FOUR OF A KIND
  const fourOfKindNumber = findFourOfKind(cards);

  if (fourOfKindNumber !== undefined)
    return {
      cards: stringCards,
      description: `Four of a Kind (${fourOfKindNumber})`,
      type: 'four-of-kind',
    };

  return { cards: stringCards, description: 'Nothing', type: 'nothing' };
};
