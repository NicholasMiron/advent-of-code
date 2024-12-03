import { fileToString, getFilePath } from "../../utils.js";

const solution = (file) => {
  const input = fileToString(getFilePath(import.meta.dirname, file));

  return Array.from(input.matchAll(/mul\((\d+),(\d+)\)/g))
    .map(([_, str1, str2]) => parseInt(str1) * parseInt(str2))
    .reduce((acc, cur) => acc + cur, 0);
}

console.log(solution("./sample.txt"));
console.log(solution("./input.txt"));
