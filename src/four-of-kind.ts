import { numberMatches } from './other-checkings';
import { Card } from './index';

/** Check if hand is an specific FOUR OF A KIND */
export const isFourOfKind = (cards: Array<Card>, number: string): boolean => {
  const { matches } = numberMatches(cards, number);

  return matches.length === 4;
};

/** If hand is a FOUR OF A KIND returns its card number, otherwise returns undefined */
export const findFourOfKind = (cards: Array<Card>): string =>
  cards.find(({ number }) => isFourOfKind(cards, number))?.number;
