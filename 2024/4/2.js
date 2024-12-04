import { fileToArray, getFilePath } from "../../utils.js";

export const solution = (file) => {
  const inp = fileToArray(getFilePath(import.meta.dirname, file));

  let count = 0;

  for (let i = 1; i < inp.length - 1; i++) {
    for (let j = 1; j < inp[0].length - 1; j++) {
      if (inp[i][j] === 'A') {
        const x1 = (inp[i - 1]?.[j - 1]) + (inp[i + 1]?.[j + 1]);
        const x2 = (inp[i - 1]?.[j + 1]) + (inp[i + 1]?.[j - 1]);

        const x1Valid = x1 === 'MS' || x1 === 'SM';
        const x2Valid = x2 === 'MS' || x2 === 'SM';

        count += x1Valid && x2Valid ? 1 : 0
      }
    }
  }

  return count;
}

console.log(solution("./sample.txt"));
console.log(solution("./input.txt"));
