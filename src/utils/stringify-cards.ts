import { Card } from '../';

export const stringifyCards = (cards: Array<Card>): Array<string> =>
  cards.map(({ number, suit }) => `${number}${suit}`);
