import { verificateHand, Card, HandData } from '../src';
import { ERROR_MESSAGE } from '../src/utils/validate-cards';
import { stringifyCards } from '../src/utils/stringify-cards';

describe('--- verificateHand() ---', () => {
  const minimum = 5;

  test('No argument throws an Error', () => {
    // @ts-ignore
    expect(() => verificateHand()).toThrow(
      ERROR_MESSAGE.QuantityCards(0, { minimum })
    );
  });

  test('Argument is not a valid Array of cards throws an specific Error', () => {
    const invalidQuantity = [
      { number: '5', suit: 'C' },
      { number: 'K', suit: 'D' },
    ];

    const invalidCard = [
      { number: '5', suit: 'D' },
      { number: '9', suit: 'S' },
      { number: '2', suit: 'H' },
      { number: '10', suit: 'hearts' },
      { number: '5', suit: 'C' },
    ];

    const repeatedCard = [
      { number: '4', suit: 'C' },
      { number: '10', suit: 'D' },
      { number: 'K', suit: 'S' },
      { number: 'A', suit: 'C' },
      { number: '4', suit: 'C' },
    ];

    expect(() => verificateHand('not array' as unknown as Array<Card>)).toThrow(
      ERROR_MESSAGE.NotArray
    );

    expect(() => verificateHand(invalidQuantity)).toThrow(
      ERROR_MESSAGE.QuantityCards(2, { minimum })
    );

    expect(() => verificateHand(invalidCard)).toThrow(
      ERROR_MESSAGE.InvalidCard(3)
    );

    expect(() => verificateHand(repeatedCard)).toThrow(
      ERROR_MESSAGE.RepeatedCard('4C')
    );
  });

  test('Hand is a HIGH CARD returns its correspondent object', () => {
    const highCard = [
      { number: '2', suit: 'D' },
      { number: '6', suit: 'D' },
      { number: '10', suit: 'H' },
      { number: 'A', suit: 'S' },
      { number: 'K', suit: 'C' },
    ];

    expect(verificateHand(highCard)).toEqual({
      cards: stringifyCards(highCard),
      description: 'High Card',
      type: 'high-card',
    } as HandData);
  });

  test('Hand is a PAIR returns its correspondent object', () => {
    const pair = [
      { number: '8', suit: 'S' },
      { number: '2', suit: 'S' },
      { number: 'J', suit: 'C' },
      { number: '8', suit: 'D' },
      { number: '4', suit: 'H' },
    ];

    expect(verificateHand(pair)).toEqual({
      cards: stringifyCards(pair),
      description: 'Pair (8)',
      type: 'pair',
    } as HandData);
  });

  test('Hand is a TWO PAIR returns its correspondent object', () => {
    const twoPair = [
      { number: 'Q', suit: 'D' },
      { number: '5', suit: 'D' },
      { number: 'K', suit: 'H' },
      { number: 'Q', suit: 'C' },
      { number: '5', suit: 'S' },
    ];

    expect(verificateHand(twoPair)).toEqual({
      cards: stringifyCards(twoPair),
      description: 'Two Pair (Q & 5)',
      type: 'two-pair',
    } as HandData);
  });

  test('Hand is a THREE OF A KIND returns its correspondent object', () => {
    const threeOfKind = [
      { number: '9', suit: 'H' },
      { number: '9', suit: 'C' },
      { number: '10', suit: 'S' },
      { number: '9', suit: 'D' },
      { number: '3', suit: 'D' },
    ];

    expect(verificateHand(threeOfKind)).toEqual({
      cards: stringifyCards(threeOfKind),
      description: 'Three of a Kind (9)',
      type: 'three-of-kind',
    } as HandData);
  });

  test('Hand is a STRAIGHT returns its correspondent object', () => {
    const straight = [
      { number: '4', suit: 'S' },
      { number: '5', suit: 'H' },
      { number: '8', suit: 'D' },
      { number: '7', suit: 'S' },
      { number: '6', suit: 'C' },
    ];

    expect(verificateHand(straight)).toEqual({
      cards: stringifyCards(straight),
      description: 'Straight: 4 - 8',
      type: 'straight',
    } as HandData);
  });

  test('Hand is a FLUSH returns its correspondent object', () => {
    const flush = [
      { number: '10', suit: 'S' },
      { number: '7', suit: 'S' },
      { number: '3', suit: 'S' },
      { number: 'J', suit: 'S' },
      { number: '2', suit: 'S' },
    ];

    expect(verificateHand(flush)).toEqual({
      cards: stringifyCards(flush),
      description: 'Flush (S)',
      type: 'flush',
    } as HandData);
  });

  test('Hand is a FULL HOUSE returns its correspondent object', () => {
    const fullHouse = [
      { number: '4', suit: 'S' },
      { number: '9', suit: 'S' },
      { number: '4', suit: 'H' },
      { number: '9', suit: 'C' },
      { number: '4', suit: 'D' },
    ];

    expect(verificateHand(fullHouse)).toEqual({
      cards: stringifyCards(fullHouse),
      description: 'Full House (Pair: 9 & Three of Kind: 4)',
      type: 'full-house',
    } as HandData);
  });

  test('Hand is a FOUR OF KIND returns its correspondent object', () => {
    const fourOfKind = [
      { number: 'A', suit: 'D' },
      { number: 'A', suit: 'H' },
      { number: 'A', suit: 'C' },
      { number: '5', suit: 'C' },
      { number: 'A', suit: 'S' },
    ];

    expect(verificateHand(fourOfKind)).toEqual({
      cards: stringifyCards(fourOfKind),
      description: 'Four of a Kind (A)',
      type: 'four-of-kind',
    } as HandData);
  });

  test('Hand is a STRAIGHT FLUSH returns its correspondent object', () => {
    const straightFlush = [
      { number: '8', suit: 'C' },
      { number: '5', suit: 'C' },
      { number: '9', suit: 'C' },
      { number: '7', suit: 'C' },
      { number: '6', suit: 'C' },
    ];

    expect(verificateHand(straightFlush)).toEqual({
      cards: stringifyCards(straightFlush),
      description: 'Straight Flush (C): 5 - 9',
      type: 'straight-flush',
    } as HandData);
  });

  test('Hand is a ROYAL FLUSH returns its correspondent object', () => {
    const royalFlush = [
      { number: '10', suit: 'S' },
      { number: 'K', suit: 'S' },
      { number: 'J', suit: 'S' },
      { number: 'Q', suit: 'S' },
      { number: 'A', suit: 'S' },
    ];

    expect(verificateHand(royalFlush)).toEqual({
      cards: stringifyCards(royalFlush),
      description: 'Royal Flush (S)',
      type: 'royal-flush',
    } as HandData);
  });

  test('Hand not match any poker hand returns its correspondent object', () => {
    const nothing = [
      { number: '5', suit: 'H' },
      { number: '10', suit: 'D' },
      { number: '7', suit: 'C' },
      { number: 'K', suit: 'S' },
      { number: '2', suit: 'D' },
    ];

    expect(verificateHand(nothing)).toEqual({
      cards: stringifyCards(nothing),
      description: 'Nothing',
      type: 'nothing',
    } as HandData);
  });
});
