import { fileToArray } from "../../utils.js";

const solution = (file) => {
  const input = fileToArray(file);

  return input
    .map((val) => {
      const digits = val.replace(/\D/g, '');
      return Number(digits.at(0) + digits.at(-1));
    })
    .reduce((total, cur) => total + cur, 0);
}

console.log(solution('./sample1.txt'))
console.log(solution('./input.txt'))