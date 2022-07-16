# Poker Hand Verifier

Provides a verifier for a poker hand of 5 cards.

It works on browser and server side.

## Installation

Using npm with Node.js >= 14:

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

<!-- TODO: Test package using npm link -->
