import { allDifferentNumbers } from './other-checkings';
import { Card } from './index';

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
  cards.every(({ number }) => number.match(STRAIGHT[straight])) &&
  allDifferentNumbers(cards);

/** Check if hand is any possible STRAIGHT */
export const isAnyStraight = (cards: Array<Card>): boolean =>
  Object.keys(STRAIGHT).some((key) => isStraight(cards, key));

/** Searchs for any possible STRAIGHT and returns it */
export const findStraight = (cards: Array<Card>): string =>
  Object.keys(STRAIGHT).find((key) => isStraight(cards, key));
