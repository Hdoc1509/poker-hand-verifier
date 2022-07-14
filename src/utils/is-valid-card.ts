const VALID_SUIT = /^(H|S|C|D){1}$/;

export const VALID_NUMBER = /^(A|[2-9]|10|J|Q|K){1}$/;
export const NOT_FOUND_INVALID_INDEX = -1;

export const isValidCard = (card: any): boolean => {
  if (card?.number === undefined || card?.suit === undefined) return false;

  const { number, suit } = card;

  if (typeof number !== 'string' || typeof suit !== 'string') return false;

  if (number.match(VALID_NUMBER) === null || suit.match(VALID_SUIT) === null)
    return false;

  return true;
};

export const getInvalidCardIndex = (cards: Array<any>): number =>
  cards.findIndex((card) => !isValidCard(card));
