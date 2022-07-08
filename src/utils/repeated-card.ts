import { Card } from '../index';

export const getRepeatedCard = (cards: Array<Card>): string => {
  const stringCards = cards.map(({ number, suit }) => `${number}${suit}`);
  const uniqueCards = Array.from(new Set(stringCards));

  const repeatedCards = uniqueCards.filter((card) => {
    const regExp = new RegExp(card, 'g');

    return stringCards.join('').match(regExp)?.length >= 2;
  });

  if (repeatedCards.length > 0) return repeatedCards[0];
};
