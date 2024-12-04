import { fileToArray, getFilePath } from "../../utils.js";

export const solution = (file) => {
  const inp = fileToArray(getFilePath(import.meta.dirname, file));

  let count = 0;

  for (let i = 0; i < inp.length; i++) {
    for (let j = 0; j < inp[0].length; j++) {
      // Left
      if (inp[i][j] === 'X' && inp[i][j + 1] === 'M' && inp[i][j + 2] === 'A' && inp[i][j + 3] === 'S') count++;
      // Right
      if (inp[i][j] === 'X' && inp[i][j - 1] === 'M' && inp[i][j - 2] === 'A' && inp[i][j - 3] === 'S') count++;
      // Down
      if (inp[i][j] === 'X' && inp[i + 1]?.[j] === 'M' && inp[i + 2]?.[j] === 'A' && inp[i + 3]?.[j] === 'S') count++;
      // Up
      if (inp[i][j] === 'X' && inp[i - 1]?.[j] === 'M' && inp[i - 2]?.[j] === 'A' && inp[i - 3]?.[j] === 'S') count++;
      // Diag Down Right
      if (inp[i][j] === 'X' && inp[i + 1]?.[j + 1] === 'M' && inp[i + 2]?.[j + 2] === 'A' && inp[i + 3]?.[j + 3] === 'S') count++;
      // Diag Up Left
      if (inp[i][j] === 'X' && inp[i - 1]?.[j - 1] === 'M' && inp[i - 2]?.[j - 2] === 'A' && inp[i - 3]?.[j - 3] === 'S') count++;
      // Diag Down Left
      if (inp[i][j] === 'X' && inp[i + 1]?.[j - 1] === 'M' && inp[i + 2]?.[j - 2] === 'A' && inp[i + 3]?.[j - 3] === 'S') count++;
      // Diag Up Right
      if (inp[i][j] === 'X' && inp[i - 1]?.[j + 1] === 'M' && inp[i - 2]?.[j + 2] === 'A' && inp[i - 3]?.[j + 3] === 'S') count++;
    }
  }

  return count;
}

console.log(solution("./sample.txt"));
console.log(solution("./input.txt"));
