import { fileToArray, getFilePath } from '../../utils.js';

const HAND_TYPES = {
  FIVE_OF_A_KIND: 6,
  FOUR_OF_A_KIND: 5,
  FULL_HOUSE: 4,
  THREE_OF_A_KIND: 3,
  TWO_PAIR: 2,
  ONE_PAIR: 1,
  HIGH_CARD: 0,
};

const CARD_RANKS = {
  'A': 13,
  'K': 12,
  'Q': 11,
  'J': 10,
  'T': 9,
  '9': 8,
  '8': 7,
  '7': 6,
  '6': 5,
  '5': 4,
  '4': 3,
  '3': 2,
  '2': 1,
};

const determineHandType = (hand) => {
  const sortedHand = hand.split('').sort().join('');
  if (sortedHand.match(/(.)\1{4}/)) return HAND_TYPES.FIVE_OF_A_KIND;
  if (sortedHand.match(/(.)\1{3}/)) return HAND_TYPES.FOUR_OF_A_KIND;
  if (sortedHand.match(/(.)\1(.)\2{2}|(.)\3{2}(.)\4/)) return HAND_TYPES.FULL_HOUSE;
  if (sortedHand.match(/(.)\1{2}/)) return HAND_TYPES.THREE_OF_A_KIND;
  if (sortedHand.match(/(.)\1.?(.)\2/)) return HAND_TYPES.TWO_PAIR;
  if (sortedHand.match(/(.)\1/)) return HAND_TYPES.ONE_PAIR;
  return HAND_TYPES.HIGH_CARD;
}

export const solution = (file) => {
  const input = fileToArray(getFilePath(import.meta.dirname, file));

  return input
    .map((line) => {
      const [hand, bid] = line.split(' ');
      return { hand, bid: Number(bid.match(/\d+/g)[0]) };
    })
    .map((hand) => {
      return {
        ...hand,
        handType: determineHandType(hand.hand),
      }
    })
    .sort((hand1, hand2) => {
      if (hand1.handType > hand2.handType) return 1
      if (hand1.handType === hand2.handType) {
        for (let i = 0; i < hand1.hand.length; i++) {
          if (CARD_RANKS[hand1.hand[i]] > CARD_RANKS[hand2.hand[i]]) return 1;
          if (CARD_RANKS[hand1.hand[i]] === CARD_RANKS[hand2.hand[i]]) continue;
          if (CARD_RANKS[hand1.hand[i]] < CARD_RANKS[hand2.hand[i]]) return -1;
        }
      }
      return -1;
    })
    .reduce((total, hand, i) => {
      return total + (hand.bid * (i + 1))
    }, 0);
};

console.log(solution('sample1.txt'));
console.log(solution('input.txt'));