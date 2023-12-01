import { fileToArray } from "../../utils.js";

const solution = (input) => {
  const dimensions = input.map((line) => line.split('x'));

  return dimensions.reduce((totalLen, [ls, ws, hs]) => {
    const l = Number(ls);
    const w = Number(ws);
    const h = Number(hs);

    const bowLength = l * w * h;
    const ribbonLength = Math.min(l + w, l + h, w + h) * 2

    return totalLen + bowLength + ribbonLength;
  }, 0);
}

console.log(solution(fileToArray('./sample1.txt')));
console.log(solution(fileToArray('./input.txt')));