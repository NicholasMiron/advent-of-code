import { fileToString } from "../../utils.js";

const solution = (input) => {
  return input
    .split('')
    .reduce((curFloor, direction) => {
      return curFloor + (direction === '(' ? 1 : -1);
    }, 0)
}

console.log(solution(')))'));
console.log(solution(fileToString('./input.txt')))