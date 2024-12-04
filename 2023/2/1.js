import { fileToString, getFilePath } from '../../utils.js';

const limits = {
  red: 12,
  green: 13,
  blue: 14,
};

export const solution = (file) => {
  const input = fileToString(getFilePath(import.meta.dirname, file));

  return input
    .split('\n')
    .filter((gameLine) => {
      return gameLine
        .match(/\d+ (blue|red|green)/g)
        .map((round) => round.split(' '))
        .every(([num, color]) => {
          return Number(num) <= limits[color]
        });
    })
    .reduce((idTotal, gameLine) => {
      const id = Number(gameLine.match(/Game (\d+):/)[1]);
      return idTotal + id;
    }, 0)
}

console.log(solution('./sample1.txt'));
console.log(solution('./input.txt'));