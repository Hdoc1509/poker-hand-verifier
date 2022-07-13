import { allSameSuit } from './other-checkings';
import { Card } from './index';

/** Checks if hand is a FLUSH */
export const isFlush = (cards: Array<Card>): boolean => allSameSuit(cards);
