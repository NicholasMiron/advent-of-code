import { fileToArray, getFilePath } from "../../utils.js";

export const solution = (file) => {
  const input = fileToArray(getFilePath(import.meta.dirname, file));

  const splitI = input.findIndex((str) => str === '');
  const orderRules = new Set(input.slice(0, splitI));
  const updates = input.slice(splitI + 1).map((str) => str.split(','));

  let sum = 0;
  for (let update of updates) {
    let isValid = true;
    for (let i = 1; i < update.length; i++) {
      for (let j = 0; j < i; j++) {
        if (orderRules.has(update[i] + '|' + update[j])) {
          isValid = false;
        }
      }
    }

    if (isValid) {
      sum += parseInt(update[Math.round((update.length - 1) / 2)]);
    }
  }

  return sum;
}

console.log(solution("./sample.txt"));
console.log(solution("./input.txt"));
