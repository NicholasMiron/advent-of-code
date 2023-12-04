import { fileToArray } from "../../utils.js";

const solution = (input) => {
  let literalCount = 0;
  let memoryCount = 0;

  input.forEach((line) => {
    literalCount += line.length;
    memoryCount += line.slice(1, -1).replace(/\\\\/g, '\\').replace(/\\"/g, '"').replace(/\\x[0-9a-f]{2}/g, 'x').length;
  })

  return literalCount - memoryCount;
};

console.log(solution(fileToArray('./sample1.txt')));
console.log(solution(fileToArray('./input.txt')));