import { fileToArray, getFilePath } from "../../utils.js";

const isUpdateValid = (update, rules) => {
  for (let i = 1; i < update.length; i++) {
    for (let j = 0; j < i; j++) {
      if (rules.has(update[i] + '|' + update[j])) return false;
    }
  }

  return true;
}

export const solution = (file) => {
  const input = fileToArray(getFilePath(import.meta.dirname, file));

  const splitI = input.findIndex((str) => str === '');
  const orderRules = new Set(input.slice(0, splitI));
  const updates = input.slice(splitI + 1).map((str) => str.split(','));

  const invalidUpdates = updates.filter((update) => !isUpdateValid(update, orderRules));

  return invalidUpdates.map((update) => {
    return [...update].sort((a, b) => orderRules.has(a + '|' + b) ? -1 : 1 );
  }).reduce((sum, update) => {
    return sum + parseInt(update[Math.round((update.length - 1) / 2)]);
  }, 0);
}

console.log(solution("./sample.txt"));
console.log(solution("./input.txt"));
