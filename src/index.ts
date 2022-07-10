import { allSameSuit } from './other-checkings';
import { isAnyPair, findPair } from './pair';
import { isAnyTwoPair, findTwoPair } from './two-pair';
import { isAnyThreeOfKind, findThreeOfKind } from './three-of-kind';
import { isAnyStraight, findStraight } from './straight';
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
  if (isAnyPair(cards)) {
    const number = findPair(cards);

    return {
      cards: stringCards,
      description: `Pair (${number})`,
      type: 'pair',
    };
  }

  // TWO PAIR
  if (isAnyTwoPair(cards)) {
    const [pair1, pair2] = findTwoPair(cards);

    return {
      cards: stringCards,
      description: `Two Pair: (${pair1} & ${pair2})`,
      type: 'two-pair',
    };
  }

  // THREE OF A KIND
  if (isAnyThreeOfKind(cards)) {
    const number = findThreeOfKind(cards);

    return {
      cards: stringCards,
      description: `Three of a Kind (${number})`,
      type: 'three-of-kind',
    };
  }

  // STRAIGHTS
  if (isAnyStraight(cards)) {
    const straight = findStraight(cards);
    const parsedStraight = straight.replace('-', ' - ');
    const flushSuit = cards[0].suit;
    const areSameSuit = allSameSuit(cards);

    if (straight === '10-A')
      return {
        cards: stringCards,
        description: areSameSuit
          ? `Royal Flush (${flushSuit}): ${parsedStraight}`
          : `Straight: ${parsedStraight}`,
        type: areSameSuit ? 'royal-flush' : 'straight',
      };

    return {
      cards: stringCards,
      description: areSameSuit
        ? `Straight Flush (${flushSuit}): ${parsedStraight}`
        : `Straight: ${parsedStraight}`,
      type: areSameSuit ? 'straight-flush' : 'straight',
    };
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
