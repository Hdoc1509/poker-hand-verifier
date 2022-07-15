declare module 'index' {
  export type Card = {
    number: string;
    suit: string;
  };
  export type HandData = {
    cards: Array<string>;
    description: string;
    type: string;
  };
  /** Verificate an specific hand and returns its data */
  export const verificateHand: (cards: Array<Card>) => HandData;
}
