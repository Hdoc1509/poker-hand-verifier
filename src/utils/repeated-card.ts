import { Card } from '../index';

export const getRepeatedCard = (cards: Array<Card>): string => {
  const repeatedCards = new Set(
    cards.map(({ number, suit }) => `${number}${suit}`)
  );

  return repeatedCards.size !== cards.length
    ? Array.from(repeatedCards)[0]
    : undefined;
};
