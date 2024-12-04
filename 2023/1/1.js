import { fileToArray, getFilePath } from "../../utils.js";

export const solution = (file) => {
  const input = fileToArray(getFilePath(import.meta.dirname, file));

  return input
    .map((val) => {
      const digits = val.replace(/\D/g, '');
      return Number(digits.at(0) + digits.at(-1));
    })
    .reduce((total, cur) => total + cur, 0);
}

console.log(solution('./sample1.txt'))
console.log(solution('./input.txt'))