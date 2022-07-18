type Card = {
  number: string;
  suit: string;
};
type HandData = {
  cards: Array<string>;
  description: string;
  type: string;
};

/** Verificate an specific hand and returns its data */
export declare function verificateHand(cards: Array<Card>): HandData;
