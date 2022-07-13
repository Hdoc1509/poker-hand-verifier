import { getPairs } from './pair';
import { getThreeOfKind } from './three-of-kind';
import { Card } from './index';

export type FullHouseData = {
  pair: string;
  threeOfKind: string;
};

/** Check if hand is an specific FULL HOUSE */
export const isFullHouse = (
  cards: Array<Card>,
  [{ number: number1 }, { number: number2 }]: Array<Card>
): boolean => {
  const number1Matches = cards.filter(({ number }) => number === number1);
  const number2Matches = cards.filter(({ number }) => number === number2);

  return (
    ((number1Matches.length === 3 && number2Matches.length === 2) ||
      (number1Matches.length === 2 && number2Matches.length === 3)) &&
    number1 !== number2
  );
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
