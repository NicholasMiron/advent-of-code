import { fileToArray, getFilePath } from "../../utils.js";

export const solution = (file) => {
  const input = fileToArray(getFilePath(import.meta.dirname, file));

  const leftList = [];
  const rightList = [];

  input
    .map((line) => line.split(/\s+/))
    .forEach(([ld, rd]) => {
      leftList.push(parseInt(ld));
      rightList.push(parseInt(rd));
    });

  const rightCounts = rightList.reduce((acc, cur) => {
    acc[cur] = acc[cur] ? acc[cur] + 1 : 1;
    return acc;
  }, {});

  return leftList.reduce((acc, cur) => acc + ((rightCounts[cur] || 0) * cur), 0);
};

console.log(solution('./sample.txt'));
console.log(solution('./input.txt'));