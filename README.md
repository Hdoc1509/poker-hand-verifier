[![CI](https://github.com/Hdoc1509/poker-hand-verifier/actions/workflows/ci.yml/badge.svg?branch=master)](https://github.com/Hdoc1509/poker-hand-verifier/actions/workflows/ci.yml)

# Poker Hand Verifier

Provides a verifier for a poker hand of 5 cards.

It works on browser and server side.

## Installation

Using npm with Node.js >= 12:

```sh
npm install poker-hand-verifier
```

Using unpkg CDN:

```html
<script src="https://unpkg.com/poker-hand-verifier/dist/poker-hand-verifier.min.js"></script>
```

## How to use

You can use CommonJS or ESM syntax.

```js
import { verificateHand } from 'poker-hand-verifier';

const myCards = [
  { number: '4', suit: 'S' },
  { number: '5', suit: 'H' },
  { number: '8', suit: 'D' },
  { number: '7', suit: 'S' },
  { number: '6', suit: 'C' },
];

console.log(verificateHand(myCards));
// {
//   cards: ['4S', '5H', '8D', '7S', '6C'],
//   description: 'Straight: 4 - 8',
//   type: 'straight'
// }
```

Using with CDN, verificateHand() will be available as a method of a global variable called 'pokerHandVerifier'.

```html
<script src="https://unpkg.com/poker-hand-verifier/dist/poker-hand-verifier.min.js"></script>

<script>
  const myCards = [
    { number: '10', suit: 'S' },
    { number: 'K', suit: 'S' },
    { number: 'J', suit: 'S' },
    { number: 'Q', suit: 'S' },
    { number: 'A', suit: 'S' },
  ];

  console.log(pokerHandVerifier.verificateHand(myCards));
  // {
  //   cards: ['10S', 'KH', 'JD', 'QS', 'AC'],
  //   description: 'Royal Flush (S)',
  //   type: 'royal-flush'
  // }
</script>
```
