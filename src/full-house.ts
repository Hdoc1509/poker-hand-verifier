import { getPairs } from './pair';
import { getThreeOfKind } from './three-of-kind';
import { Card } from './index';

export type FullHouseData = {
  pair: string;
  threeOfKind: string;
};

/** If hand is a FULL HOUSE retrieves its composing numbers, otherwise returns undefined */
export const findFullHouse = (cards: Array<Card>): FullHouseData => {
  const [pair] = Array.from(getPairs(cards));
  const [threeOfKind] = Array.from(getThreeOfKind(cards));

  if (pair === undefined || threeOfKind === undefined) return undefined;

  return { pair, threeOfKind };
};
