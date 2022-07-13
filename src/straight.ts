import { allSameSuit } from './other-checkings';
import { Card } from './index';

type StraightData = {
  type: string;
  description: string;
};

const STRAIGHT = Object.freeze({
  'A-5': /^A|[2-5]$/,
  '2-6': /^[2-6]$/,
  '3-7': /^[3-7]$/,
  '4-8': /^[4-8]$/,
  '5-9': /^[5-9]$/,
  '6-10': /^[6-9]|10$/,
  '7-J': /^[7-9]|10|J$/,
  '8-Q': /^8|9|10|J|Q$/,
  '9-K': /^9|10|J|Q|K$/,
  '10-A': /^10|J|Q|K|A$/,
});

/** Check if hand is an specific STRAIGHT */
export const isStraight = (cards: Array<Card>, straight: string): boolean =>
  cards.every(({ number }) => number.match(STRAIGHT[straight]));

/** Searchs for any possible STRAIGHT and returns it */
export const findStraight = (cards: Array<Card>): StraightData => {
  const straight = Object.keys(STRAIGHT).find((key) => isStraight(cards, key));

  if (straight === undefined) return undefined;

  const parsedStraight = straight.replace('-', ' - ');
  const areSameSuit = allSameSuit(cards);
  const [{ suit }] = cards;

  if (straight === '10-A')
    return {
      type: areSameSuit ? 'royal-flush' : 'straight',
      description: areSameSuit
        ? `Royal Flush (${suit})`
        : `Straight: ${parsedStraight}`,
    };

  return {
    type: areSameSuit ? 'straight-flush' : 'straight',
    description: `Straight${
      areSameSuit ? ` Flush (${suit})` : ''
    }: ${parsedStraight}`,
  };
};
