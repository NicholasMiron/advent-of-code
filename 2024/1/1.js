import { fileToArray, getFilePath } from "../../utils.js";

const solution = (file) => {
  const input = fileToArray(getFilePath(import.meta.dirname, file));

  const leftList = [];
  const rightList = [];

  input
    .map((line) => line.split(/\s+/))
    .forEach(([ld, rd]) => {
      leftList.push(parseInt(ld));
      rightList.push(parseInt(rd));
    });

  leftList.sort((a, b) => a < b ? -1 : 1);
  rightList.sort((a, b) => a < b ? -1 : 1);

  let distance = 0;

  leftList.forEach((digit, i) => {
    distance += Math.abs(digit - rightList[i]);
  });

  return distance;
};

console.log(solution('./sample1.txt'));
console.log(solution('./input.txt'));