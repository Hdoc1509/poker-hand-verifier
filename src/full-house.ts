import { getPairs } from './pair';
import { getThreeOfKind } from './three-of-kind';
import { Card } from './index';

export type FullHouseData = {
  pair: string;
  threeOfKind: string;
};

/** Check if hand is any possible FULL HOUSE */
export const isAnyFullHouse = (cards: Array<Card>): boolean => {
  const pairs = getPairs(cards);
  const threeOfKind = getThreeOfKind(cards);

  return pairs.size === 1 && threeOfKind.size === 1;
};

/** Retrieves the numbers that compose the FULL HOUSE in the hand */
export const findFullHouse = (cards: Array<Card>): FullHouseData => {
  const [pair] = Array.from(getPairs(cards));
  const [threeOfKind] = Array.from(getThreeOfKind(cards));

  if (pair === undefined || threeOfKind === undefined) return undefined;

  return { pair, threeOfKind };
};
