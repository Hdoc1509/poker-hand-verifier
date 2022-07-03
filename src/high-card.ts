import { numberMatches } from './other-checkings';
import { Card } from './index';

/** Check if hand is HIGH CARD */
export const isHighCard = (cards: Array<Card>): boolean => {
  const { matches: aces } = numberMatches(cards, 'A');

  return aces.length === 1;
};
