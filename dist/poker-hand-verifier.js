var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var src_exports = {};
__export(src_exports, {
  verificateHand: function() {
    return verificateHand;
  }
});
module.exports = __toCommonJS(src_exports);

// src/utils/is-valid-card.ts
var VALID_SUIT = /^(H|S|C|D){1}$/;
var VALID_NUMBER = /^(A|[2-9]|10|J|Q|K){1}$/;
var NOT_FOUND_INVALID_INDEX = -1;
var isValidCard = function(card) {
  if ((card == null ? void 0 : card.number) === void 0 || (card == null ? void 0 : card.suit) === void 0)
    return false;
  const { number, suit } = card;
  if (typeof number !== "string" || typeof suit !== "string")
    return false;
  if (number.match(VALID_NUMBER) === null || suit.match(VALID_SUIT) === null)
    return false;
  return true;
};
var getInvalidCardIndex = function(cards) {
  return cards.findIndex(function(card) {
    return !isValidCard(card);
  });
};

// src/utils/repeated-card.ts
var getRepeatedCard = function(cards) {
  const stringCards = cards.map(function({ number, suit }) {
    return `${number}${suit}`;
  });
  const uniqueCards = Array.from(new Set(stringCards));
  const repeatedCards = uniqueCards.filter(function(card) {
    var _a;
    const regExp = new RegExp(card, "g");
    return ((_a = stringCards.join("").match(regExp)) == null ? void 0 : _a.length) >= 2;
  });
  if (repeatedCards.length > 0)
    return repeatedCards[0];
};

// src/utils/validate-cards.ts
var ERROR_MESSAGE = Object.freeze({
  NotArray: "Expected an Array as argument.",
  QuantityCards: function(received, { minimum = 2 } = {}) {
    return `Expected an Array of ${minimum === 5 ? "5 cards" : `minimum ${minimum} and maximum 5 cards`}. Received ${received} instead.`;
  },
  InvalidCard: function(index) {
    return `All cards must have "number" and "suit" properties values correctly. Found invalid card at index ${index}.`;
  },
  RepeatedCard: function(card) {
    return `Array can not have repeated cards. Found repeated card: ${card}.`;
  }
});
var validateCards = function(cards = [], { minimum = 2 } = {}) {
  if (!Array.isArray(cards))
    return { ok: false, error: ERROR_MESSAGE.NotArray };
  if (cards.length < minimum || cards.length > 5)
    return {
      ok: false,
      error: ERROR_MESSAGE.QuantityCards(cards.length, { minimum })
    };
  const invalidCardIndex = getInvalidCardIndex(cards);
  if (invalidCardIndex !== NOT_FOUND_INVALID_INDEX)
    return { ok: false, error: ERROR_MESSAGE.InvalidCard(invalidCardIndex) };
  const repeatedCard = getRepeatedCard(cards);
  if (repeatedCard)
    return { ok: false, error: ERROR_MESSAGE.RepeatedCard(repeatedCard) };
  return { ok: true };
};
var validateQuantity = function(cards, minimum) {
  const received = cards.length;
  if (received < minimum)
    return {
      ok: false,
      error: ERROR_MESSAGE.QuantityCards(received, { minimum })
    };
  return { ok: true };
};

// src/other-checkings.ts
var allDifferentNumbers = function(cards) {
  const validation = validateQuantity(cards, 2);
  if (!validation.ok)
    throw new Error(validation.error);
  const numbers = new Set(cards.map(function({ number }) {
    return number;
  }));
  return numbers.size === cards.length;
};
var allSameSuit = function(cards) {
  const validation = validateQuantity(cards, 2);
  if (!validation.ok)
    throw new Error(validation.error);
  const suits = new Set(cards.map(function({ suit }) {
    return suit;
  }));
  return suits.size === 1;
};
var numberMatches = function(cards = [], numberToCheckMatches = null) {
  const validation = validateCards(cards, { minimum: 5 });
  if (!validation.ok)
    throw new Error(`Invalid Array of cards. ${validation.error}`);
  if (typeof numberToCheckMatches !== "string")
    throw new TypeError('Argument "numberToCheckMatches" must be an String');
  if (numberToCheckMatches.match(VALID_NUMBER) === null)
    throw new Error('Argument "numberToCheckMatches" is not a valid number');
  return {
    matches: cards.filter(function({ number }) {
      return number === numberToCheckMatches;
    }),
    notMatches: cards.filter(function({ number }) {
      return number !== numberToCheckMatches;
    })
  };
};

// src/pair.ts
var isPair = function(cards, number) {
  const { matches, notMatches: restNumbers } = numberMatches(cards, number);
  return matches.length === 2 && allDifferentNumbers(restNumbers);
};
var findPair = function(cards) {
  var _a;
  return (_a = cards.find(function({ number }) {
    return isPair(cards, number);
  })) == null ? void 0 : _a.number;
};
var getPairs = function(cards) {
  const pairs = cards.filter(function({ number }) {
    return numberMatches(cards, number).matches.length === 2;
  }).map(function({ number }) {
    return number;
  });
  return new Set(pairs);
};

// src/two-pair.ts
var findTwoPair = function(cards) {
  const pairs = getPairs(cards);
  return pairs.size === 2 ? Array.from(pairs) : void 0;
};

// src/three-of-kind.ts
var isThreeOfKind = function(cards, number) {
  const { matches, notMatches: restNumbers } = numberMatches(cards, number);
  return matches.length === 3 && allDifferentNumbers(restNumbers);
};
var findThreeOfKind = function(cards) {
  var _a;
  return (_a = cards.find(function({ number }) {
    return isThreeOfKind(cards, number);
  })) == null ? void 0 : _a.number;
};
var getThreeOfKind = function(cards) {
  const aux = cards.filter(function({ number }) {
    return numberMatches(cards, number).matches.length === 3;
  }).map(function({ number }) {
    return number;
  });
  return new Set(aux);
};

// src/straight.ts
var STRAIGHT = Object.freeze({
  "A-5": /^A|[2-5]$/,
  "2-6": /^[2-6]$/,
  "3-7": /^[3-7]$/,
  "4-8": /^[4-8]$/,
  "5-9": /^[5-9]$/,
  "6-10": /^[6-9]|10$/,
  "7-J": /^[7-9]|10|J$/,
  "8-Q": /^8|9|10|J|Q$/,
  "9-K": /^9|10|J|Q|K$/,
  "10-A": /^10|J|Q|K|A$/
});
var isStraight = function(cards, straight) {
  return cards.every(function({ number }) {
    return number.match(STRAIGHT[straight]);
  }) && allDifferentNumbers(cards);
};
var findStraight = function(cards) {
  const straight = Object.keys(STRAIGHT).find(function(key) {
    return isStraight(cards, key);
  });
  if (straight === void 0)
    return void 0;
  const parsedStraight = straight.replace("-", " - ");
  const areSameSuit = allSameSuit(cards);
  const [{ suit }] = cards;
  if (straight === "10-A")
    return {
      type: areSameSuit ? "royal-flush" : "straight",
      description: areSameSuit ? `Royal Flush (${suit})` : `Straight: ${parsedStraight}`
    };
  return {
    type: areSameSuit ? "straight-flush" : "straight",
    description: `Straight${areSameSuit ? ` Flush (${suit})` : ""}: ${parsedStraight}`
  };
};

// src/flush.ts
var isFlush = function(cards) {
  return allSameSuit(cards);
};

// src/full-house.ts
var findFullHouse = function(cards) {
  const [pair] = Array.from(getPairs(cards));
  const [threeOfKind] = Array.from(getThreeOfKind(cards));
  if (pair === void 0 || threeOfKind === void 0)
    return void 0;
  return { pair, threeOfKind };
};

// src/four-of-kind.ts
var isFourOfKind = function(cards, number) {
  const { matches } = numberMatches(cards, number);
  return matches.length === 4;
};
var findFourOfKind = function(cards) {
  var _a;
  return (_a = cards.find(function({ number }) {
    return isFourOfKind(cards, number);
  })) == null ? void 0 : _a.number;
};

// src/high-card.ts
var isHighCard = function(cards) {
  const { matches: aces } = numberMatches(cards, "A");
  return aces.length === 1 && allDifferentNumbers(cards) && !allSameSuit(cards);
};

// src/utils/stringify-cards.ts
var stringifyCards = function(cards) {
  return cards.map(function({ number, suit }) {
    return `${number}${suit}`;
  });
};

// src/index.ts
var verificateHand = function(cards) {
  const validation = validateCards(cards, { minimum: 5 });
  if (!validation.ok)
    throw new Error(validation.error);
  const stringCards = stringifyCards(cards);
  if (isHighCard(cards))
    return {
      cards: stringCards,
      description: "High Card",
      type: "high-card"
    };
  const pairNumber = findPair(cards);
  if (pairNumber !== void 0)
    return {
      cards: stringCards,
      description: `Pair (${pairNumber})`,
      type: "pair"
    };
  const twoPairNumbers = findTwoPair(cards);
  if (twoPairNumbers !== void 0) {
    const [pair1, pair2] = twoPairNumbers;
    return {
      cards: stringCards,
      description: `Two Pair (${pair1} & ${pair2})`,
      type: "two-pair"
    };
  }
  const threeOfKindNumber = findThreeOfKind(cards);
  if (threeOfKindNumber !== void 0)
    return {
      cards: stringCards,
      description: `Three of a Kind (${threeOfKindNumber})`,
      type: "three-of-kind"
    };
  const straightData = findStraight(cards);
  if (straightData !== void 0)
    return { cards: stringCards, ...straightData };
  if (isFlush(cards))
    return {
      cards: stringCards,
      description: `Flush (${cards[0].suit})`,
      type: "flush"
    };
  const fullHouseData = findFullHouse(cards);
  if (fullHouseData !== void 0) {
    const { pair, threeOfKind } = fullHouseData;
    return {
      cards: stringCards,
      description: `Full House (Pair: ${pair} & Three of Kind: ${threeOfKind})`,
      type: "full-house"
    };
  }
  const fourOfKindNumber = findFourOfKind(cards);
  if (fourOfKindNumber !== void 0)
    return {
      cards: stringCards,
      description: `Four of a Kind (${fourOfKindNumber})`,
      type: "four-of-kind"
    };
  return { cards: stringCards, description: "Nothing", type: "nothing" };
};
