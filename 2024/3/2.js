import { fileToString, getFilePath } from "../../utils.js";

const solution = (file) => {
  const input = fileToString(getFilePath(import.meta.dirname, file));

  const commands = Array.from(input.matchAll(/mul\((\d+),(\d+)\)|(do\(\))|(don't\(\))/g))

  let enabled = true;
  return Array.from(input.matchAll(/mul\((\d+),(\d+)\)|(do\(\))|(don't\(\))/g))
    .filter(([match]) => {
      if (match === 'do()') {
        enabled = true;
        return false;
      }
      if (match === 'don\'t()') {
        enabled = false;
        return false;
      }
      return enabled;
    })
    .map(([_, str1, str2]) => parseInt(str1) * parseInt(str2))
    .reduce((acc, cur) => acc + cur, 0);
}

console.log(solution("./sample2.txt"));
console.log(solution("./input.txt"));
