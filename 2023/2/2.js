import { fileToString, getFilePath } from '../../utils.js';

export const solution = (file) => {
  const input = fileToString(getFilePath(import.meta.dirname, file));

  return input
    .split('\n')
    .map((gameLine) => {
      const minCubes = gameLine
        .match(/\d+ (blue|red|green)/g)
        .map((round) => round.split(' '))
        .reduce((maxCubes, [num, color]) => {
          return {
            ...maxCubes,
            [color]: Math.max(maxCubes[color] || 0, num),
          }
        }, {})

      return Object.values(minCubes).reduce((power, count) => power * count, 1);
    })
    .reduce((powerTotal, gamePower) => powerTotal + gamePower, 0);
};

console.log(solution('./sample1.txt'));
console.log(solution('./input.txt'));