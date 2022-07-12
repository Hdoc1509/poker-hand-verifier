import { ERROR_MESSAGE, validateQuantity } from './validate-cards';

const notPass = [{ number: 'A', suit: 'D' }];
const pass = [
  { number: '5', suit: 'D' },
  { number: 'J', suit: 'C' },
  { number: 'Q', suit: 'S' },
  { number: '2', suit: 'H' },
];
const minimum = 2;

describe('--- validateQuantity() ---', () => {
  test('Received cards are less than expected returns an error object', () => {
    expect(validateQuantity(notPass, minimum)).toEqual({
      ok: false,
      error: ERROR_MESSAGE.QuantityCards(notPass.length, { minimum }),
    });
  });

  test('Received cards are valid returns object with ok:true', () => {
    expect(validateQuantity(pass, minimum)).toEqual({ ok: true });
  });
});
