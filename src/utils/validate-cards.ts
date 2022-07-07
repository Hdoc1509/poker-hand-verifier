import { getInvalidCardIndex, NOT_FOUND_INVALID_INDEX } from './is-valid-card';
import { getRepeatedCard } from './repeated-card';

export const ERROR_MESSAGE = Object.freeze({
  NotArray: 'Expected an Array as argument',
  QuantityCards: (received: number, { minimum = 2, maximum = 5 } = {}) =>
    `Expected an Array of minimum ${minimum} and maximum ${maximum} cards. Received ${received} instead`,
  InvalidCard: (index: number) =>
    `All cards must have "number" and "suit" properties values correctly. Found invalid card at index ${index}`,
  RepeatedCard: (card: string) =>
    `Array can not have repeated cards. Found repeated card: ${card}`,
});

type ValidatedData = {
  ok: boolean;
  error?: string;
};

export const validateCards = (cards: Array<any> = []): ValidatedData => {
  if (!Array.isArray(cards))
    return { ok: false, error: ERROR_MESSAGE.NotArray };

  if (cards.length <= 1 || cards.length > 5)
    return { ok: false, error: ERROR_MESSAGE.QuantityCards(cards.length) };

  const invalidCardIndex = getInvalidCardIndex(cards);

  if (invalidCardIndex !== NOT_FOUND_INVALID_INDEX)
    return { ok: false, error: ERROR_MESSAGE.InvalidCard(invalidCardIndex) };

  const repeatedCard = getRepeatedCard(cards);

  if (repeatedCard)
    return { ok: false, error: ERROR_MESSAGE.RepeatedCard(repeatedCard) };

  return { ok: true };
};
