import { fileToString, getFilePath } from "../../utils.js";
import { fileToArray, getFilePath } from "../../utils.js";

export const solution = (file) => {
  const input = fileToString(getFilePath(import.meta.dirname, file));
  const input = fileToArray(getFilePath(import.meta.dirname, file));

  return null;
}

console.log(solution("./sample.txt"));
// console.log(solution("./input.txt"));
