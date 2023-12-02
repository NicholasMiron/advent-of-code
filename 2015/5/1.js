import { fileToArray } from "../../utils.js";

const vowels = {
  a: true,
  e: true,
  i: true,
  o: true,
  u: true,
};

const bannedCombos = {
  'ab': true,
  'cd': true,
  'pq': true,
  'xy': true,
};

const solution = (input) => {
  return input.filter((line) => {
    let doubleLetter = false;
    let countVowels = 0;
    let lastChar = '';

    for (let char of line) {
      if (char in vowels) countVowels++;
      if (char === lastChar) doubleLetter = true;
      if ((lastChar + char) in bannedCombos) return false;

      lastChar = char;
    }

    return !(countVowels < 3 || !doubleLetter);
  }).length;
}

console.log(solution(['ugknbfddgicrmopn']));
console.log(solution(['aaa']));
console.log(solution(fileToArray('./input.txt')));