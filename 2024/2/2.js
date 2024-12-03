import { fileToArray, getFilePath, iteratePermutations } from "../../utils.js";

const ascending = (num1, num2) => num1 < num2;
const descending = (num1, num2) => num1 > num2;
const isValid = (compareFn) => {
  return (num, i, arr) => {
    return (
      i === 0
      || (compareFn(arr[i - 1], num) && Math.abs(num - arr[i - 1]) <= 3))
  }
}

const solution = (file) => {
  const input = fileToArray(getFilePath(import.meta.dirname, file));

  const result = input
    .map((report) => report.split(' ').map((str) => parseInt(str)))
    .filter((report) => {
      let isAscending = report.every(isValid(ascending));
      let isDescending = !isAscending && report.every(isValid(descending));

      if (!isAscending || !isDescending) {
        for (let i = 0; i < report.length; i++) {
          const permute = [...report.slice(0, i), ...report.slice(i + 1)];
          if (permute.every(isValid(ascending))) isAscending = true;
          if (permute.every(isValid(descending))) isDescending = true;

          if (isAscending || isDescending) break;
        }
      }

      return isAscending || isDescending
    });

  return result.length;
}

console.log(solution("./sample.txt"));
console.log(solution("./input.txt"));