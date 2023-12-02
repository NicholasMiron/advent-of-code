import { fileToArray } from "../../utils.js";

const solution = (input) => {
  return input.filter((line) => {
    const pair = line.match(/([a-z][a-z]).*\1/);
    const split = line.match(/([a-z]).\1/);

    return !!pair && !!split;
  }).length;
}

console.log(solution(['qjhvhtzxzqqjkmpb'])); // 1
console.log(solution(['aaa'])); // 0
console.log(solution(['xxyxx'])); // 1
console.log(solution(['uurcxstgmygtbstg'])); // 0
console.log(solution(['ieodomkazucvgmuy'])); // 0

console.log(solution(fileToArray('./input.txt')));