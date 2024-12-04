import { fileToArray, getFilePath } from '../../utils.js';

export const solution = (file) => {
  const input = fileToArray(getFilePath(import.meta.dirname, file));

  const numCardCopies = (new Array(input.length)).fill(1);

  input.forEach((line, lineI) => {
    const [wGroup, mGroup] = line.trim().split(':')[1].trim().split('|');
    const winningNums = wGroup.trim().split(/\s+/).map(Number);
    const winningSet = new Set(winningNums);
    const myNums = mGroup.trim().split(/\s+/).map(Number);

    const countMatchedNums = myNums.reduce((count, num) => count += winningSet.has(num) ? 1 : 0, 0);

    for (let i = lineI + 1; i < Math.min(numCardCopies.length, lineI + countMatchedNums + 1); i++) {
      numCardCopies[i] += numCardCopies[lineI];
    }
  });

  return numCardCopies.slice(0, input.length).reduce((total, cur) => total + cur, 0);
};

console.log(solution('./sample1.txt'));
console.log(solution('./input.txt'));