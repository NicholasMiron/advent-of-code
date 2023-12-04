import { fileToArray } from '../../utils.js';

const solution = (input) => {
  return input.map((line) => {
    const [wGroup, mGroup] = line.trim().split(':')[1].trim().split('|');
    const winningNums = wGroup.trim().split(/\s+/).map(Number);
    const winningSet = new Set(winningNums);
    const myNums = mGroup.trim().split(/\s+/).map(Number);

    const countMatchedNums = myNums.reduce((count, num) => count + (winningSet.has(num) ? 1 : 0), 0);

    return countMatchedNums ? Math.pow(2, countMatchedNums - 1) : 0;
  }).reduce((total, cur) => total + cur, 0);
};

console.log(solution(fileToArray('./sample1.txt')));
console.log(solution(fileToArray('./input.txt')));