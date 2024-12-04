import { fileToArray, getFilePath } from "../../utils.js";

export const solution = (file) => {
  const input = fileToArray(getFilePath(import.meta.dirname, file));

  const result = input
    .map((report) => report.split(' ').map((str) => parseInt(str)))
    .filter((report) => {
      const isAscending = report.every((num, i) => {
        return i === 0 || (report[i - 1] < num && num - report[i - 1] <= 3)
      });

      const isDescending = report.every((num, i) => {
        return i === 0 || (report[i - 1] > num && report[i - 1] - num <= 3)
      });

      return isAscending || isDescending
    });

  return result.length;
}

console.log(solution("./sample.txt"));
console.log(solution("./input.txt"));
