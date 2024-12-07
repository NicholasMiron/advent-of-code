import { fileToArray, getFilePath } from "../../utils.js";


const getOperators = (n) => {
  const operations = [];

  const recurse = (n, operators = []) => {
    if (n === 0) return operations.push(operators);

    recurse(n - 1, [...operators, '+']);
    recurse(n - 1, [...operators, '*']);
    recurse(n - 1, [...operators, '||']);
  }

  recurse(n);

  return operations;
}

const possibleOperationsCache = {};

for (let i = 1; i < 15; i++) {
  possibleOperationsCache[i] = getOperators(i);
}

export const solution = (file) => {
  const input = fileToArray(getFilePath(import.meta.dirname, file));

  return input
    .map((line) => [...line.matchAll(/\d+/g)].map(([match]) => parseInt(match)))
    .filter(([target, ...vals]) => {
      const possibleOperations = possibleOperationsCache[vals.length - 1];

      return (!!possibleOperations.find((operations) => {
        return target === vals.slice(0).reduce((acc, val, i, orig) => {
          if (acc > target) orig.splice(1);
          if (operations[i - 1] === '||') {
            return eval(`parseInt((${acc}).toString() + (${val}).toString())`)
          }
          return eval(`${acc}${operations[i - 1]}${val}`)
        });
      }));
    })
    .reduce((sum, [cur]) => sum + cur, 0);
}

console.log(solution("./sample.txt"));
console.log(solution("./input.txt"));
