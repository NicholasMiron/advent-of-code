import { fileToString } from '../../utils.js';

const solution = (input) => {
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

console.log(solution(fileToString('./sample1.txt')));
console.log(solution(fileToString('./input.txt')));