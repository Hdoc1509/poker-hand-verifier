import { getInvalidCardIndex, NOT_FOUND_INVALID_INDEX } from './is-valid-card';
import { getRepeatedCard } from './repeated-card';

type ValidatedData = {
  ok: boolean;
  error?: string;
};

export const validateCards = (cards: Array<any> = []): ValidatedData => {
  const validation: ValidatedData = { ok: true };

  if (!Array.isArray(cards))
    return { ok: false, error: 'Expected an Array as argument' };

  if (cards.length < 2)
    return {
      ok: false,
      error: 'Expected an Array of 2 or more elements as argument',
    };

  const invalidCardIndex = getInvalidCardIndex(cards);

  if (invalidCardIndex !== NOT_FOUND_INVALID_INDEX)
    return {
      ok: false,
      error: `All cards must have "number" and "suit" properties values correctly. Found invalid card at index ${invalidCardIndex}`,
    };

  const repeatedCard = getRepeatedCard(cards);

  if (repeatedCard)
    return {
      ok: false,
      error: `Array can not have repeated cards. Found repeated card: ${repeatedCard}`,
    };

  return validation;
};
