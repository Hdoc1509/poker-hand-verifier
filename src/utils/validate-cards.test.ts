import { validateCards, ERROR_MESSAGE } from './validate-cards';

const validCard = { number: '5', suit: 'H' };
const invalidCard = { number: '3' };

describe('--- validateCards() ---', () => {
  test('No argument returns object with ok false and error message', () => {
    expect(validateCards()).toEqual({
      ok: false,
      error: ERROR_MESSAGE.QuantityCards(0),
    });
  });

  test('If argument is not an Array returns object with ok false and error message', () => {
    expect(validateCards('invalid' as unknown as Array<any>)).toEqual({
      ok: false,
      error: ERROR_MESSAGE.NotArray,
    });
  });

  test('Array with less than 2 elements returns object with ok false with error message', () => {
    expect(validateCards([])).toEqual({
      ok: false,
      error: ERROR_MESSAGE.QuantityCards(0),
    });

    expect(validateCards([validCard])).toEqual({
      ok: false,
      error: ERROR_MESSAGE.QuantityCards(1),
    });
  });

  test('If there is only an invalid card returns error object for elements quantity', () => {
    expect(validateCards([invalidCard])).toEqual({
      ok: false,
      error: ERROR_MESSAGE.QuantityCards(1),
    });
  });

  test('If there is an invalid card returns object with ok false with error message', () => {
    expect(validateCards([validCard, invalidCard])).toEqual({
      ok: false,
      error: ERROR_MESSAGE.InvalidCard(1),
    });
  });

  test('If there is a repeated card returns object with ok false with error message', () => {
    expect(
      validateCards([validCard, { number: 'K', suit: 'D' }, validCard])
    ).toEqual({
      ok: false,
      error: ERROR_MESSAGE.RepeatedCard('5H'),
    });
  });

  test('If there is an invalid card and a repeated card returns error object for invalid card', () => {
    expect(
      validateCards([
        validCard,
        { number: 'Q', suit: 'C' },
        invalidCard,
        validCard,
      ])
    ).toEqual({
      ok: false,
      error: ERROR_MESSAGE.InvalidCard(2),
    });
  });

  test('If all cards are valid returns object with ok true and no error message', () => {
    expect(
      validateCards([
        validCard,
        { number: '9', suit: 'D' },
        { number: 'A', suit: 'S' },
      ])
    ).toEqual({ ok: true });
  });
});
