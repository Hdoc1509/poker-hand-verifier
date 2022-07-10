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

  const hand: HandData = {
    cards: cards.map(({ number, suit }) => `${number}${suit}`),
    description: '',
    type: '',
  };

  // PAIR
  if (isAnyPair(cards)) {
    const number = findPair(cards);

    hand.description = `Pair (${number})`;
    hand.type = 'pair';
  }

  // TWO PAIR
  else if (isAnyTwoPair(cards)) {
    const [pair1, pair2] = findTwoPair(cards);

    hand.description = `Two Pair: (${pair1} & ${pair2})`;
    hand.type = 'two-pair';
  }

  // THREE OF A KIND
  else if (isAnyThreeOfKind(cards)) {
    const number = findThreeOfKind(cards);

    hand.description = `Three of a Kind (${number})`;
    hand.type = 'three-of-kind';
  }

  // STRAIGHTS
  else if (isAnyStraight(cards)) {
    const straight = findStraight(cards);
    const parsedStraight = straight.replace('-', ' - ');
    const flushSuit = cards[0].suit;
    const areSameSuit = allSameSuit(cards);

    if (straight === '10-A') {
      hand.description = areSameSuit
        ? `Royal Flush (${flushSuit}): ${parsedStraight}`
        : `Straight: ${parsedStraight}`;
      hand.type = areSameSuit ? 'royal-flush' : 'straight';
    } else {
      hand.description = areSameSuit
        ? `Straight Flush (${flushSuit}): ${parsedStraight}`
        : `Straight: ${parsedStraight}`;
      hand.type = areSameSuit ? 'straight-flush' : 'straight';
    }
  }

  // FLUSH
  else if (isFlush(cards)) {
    hand.description = `Flush (${cards[0].suit})`;
    hand.type = 'flush';
  }

  // FULL HOUSE
  else if (isAnyFullHouse(cards)) {
    const { pair, threeOfKind } = findFullHouse(cards);

    hand.description = `Full House (Pair of ${pair} & Three of Kind ${threeOfKind})`;
    hand.type = 'full-house';
  }

  // FOUR OF A KIND
  else if (isAnyFourOfKind(cards)) {
    const number = findFourOfKind(cards);

    hand.description = `Four of a Kind (${number})`;
    hand.type = 'four-of-kind';
  }

  // HIGH CARD
  else {
    const thereHighCard = isHighCard(cards);

    hand.description = thereHighCard ? 'High Card (A)' : 'Nothing';
    hand.type = thereHighCard ? 'high-card' : 'nothing';
  }

  return hand;
};
