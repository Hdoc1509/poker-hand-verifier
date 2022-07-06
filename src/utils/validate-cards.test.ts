import {validateCards} from './validate-cards'

const validCard = { number: '5', suit: 'H' };
const invalidCard = { number: '3' };

describe('--- validateCards() ---', () => {
  test('No argument returns object with ok false and error message', () => {
    expect(validateCards()).toEqual({ ok: false, error: 'Expected an Array as argument' });
  });

  test('Array with less than 2 elements returns object with ok false with error message', () => {
    expect(validateCards([])).toEqual({ ok: false, error: 'Expected an Array of 2 or more elementes as argument' });
    expect(validateCards([validCard])).toEqual({ ok: false, error: 'Expected an Array of 2 or more elements as argument' });
  });

  test('If there is an invalid cards returns object with ok false with error message', () => {
    expect(validateCards([validCard, invalidCard])).toEqual({ ok: false, error: 'All cards must have "number" and "suit" properties values correctly.\nFound invalid card at index 1' });
  });

  test('If there is a repeated card returns object with ok false with error message', () => {
    expect(validateCards([validCard, { number: 'K', suit: 'D' }, validCard])).toEqual({ ok: false, error: 'Array can not have repeated cards. Found repeated card: 5H' });
  });

  test('If all cards are valid returns object with ok true and no error message', () => {
    expect(validateCards([validCard, { number: '9', suit: 'D' }, { number: 'A', suit: 'S' }])).toBe({ ok: true });
  });
});
