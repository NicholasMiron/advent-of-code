import { fileToArray } from "../../utils.js";

const solution = (input) => {
  const dimensions = input.map((line) => line.split('x'));

  return dimensions.reduce((sqFt, [l, w, h]) => {
    const front = w * h;
    const side = l * h;
    const top = w * l;

    return sqFt + (2 * (front + side + top)) + Math.min(front, side, top);
  }, 0);
}

console.log(solution(fileToArray('./sample1.txt')));
console.log(solution(fileToArray('./input.txt')));