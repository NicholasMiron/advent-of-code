import { fileToArray, getFilePath } from "../../utils.js";


const getOperators = (n) => {
  const operations = [];

  const recurse = (n, operators = []) => {
    if (n === 0) return operations.push(operators);

    recurse(n - 1, [...operators, '+']);
    recurse(n - 1, [...operators, '*']);
  }

  recurse(n);

  return operations;
}

export const solution = (file) => {
  const input = fileToArray(getFilePath(import.meta.dirname, file));

  return input
    .map((line) => [...line.matchAll(/\d+/g)].map(([match]) => parseInt(match)))
    .filter(([target, ...vals]) => {
      const possibleOperations = getOperators(vals.length - 1);

      return (!!possibleOperations.find((operations) => {
        return target === vals.reduce((acc, val, i) => eval(`${acc}${operations[i - 1]}${val}`));
      }));
    })
    .reduce((sum, [cur]) => sum + cur, 0);
}

console.log(solution("./sample.txt"));
console.log(solution("./input.txt"));
