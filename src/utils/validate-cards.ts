import { getInvalidCardIndex, NOT_FOUND_INVALID_INDEX } from './is-valid-card';
import { getRepeatedCard } from './repeated-card';

type ValidatedData = {
  ok: boolean;
  error?: string;
};

export const validateCards = (cards: Array<any>): ValidatedData => {
  const validation: ValidatedData = { ok: true };

  if (!Array.isArray(cards)) {
    validation.ok = false;
    validation.error = 'Expected an Array as argument';
  }

  if (cards.length < 2) {
    validation.ok = false;
    validation.error = 'Expected an Array of 2 or more cards as argument';
  }

  const invalidCardIndex = getInvalidCardIndex(cards);

  if (invalidCardIndex !== NOT_FOUND_INVALID_INDEX) {
    validation.ok = false;
    validation.error = `All cards must have "number" and "suit" properties values correctly.\nFound invalid card at index ${invalidCardIndex}`;
  }

  const repeatedCard = getRepeatedCard(cards);

  if (repeatedCard) {
    validation.ok = false;
    validation.error = `Array can not have repeated cards. Found repeated card: ${repeatedCard}`;
  }

  return validation;
};
