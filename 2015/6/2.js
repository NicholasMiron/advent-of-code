import { fileToArray } from "../../utils.js";

const solution = (input) => {
  const grid = [];

  input.forEach((instruction) => {
    const [_, command, startX, startY, endX, endY] = instruction.match(/^(toggle|turn on|turn off) (\d+),(\d+) through (\d+),(\d+)$/);

    for (let i = +startX; i <= +endX; i++) {
      if (!grid[i]) grid[i] = [];
      for (let j = +startY; j <= +endY; j++) {
        if (!grid[i][j]) grid[i][j] = 0;
        if (command === 'toggle') grid[i][j] += 2;
        if (command === 'turn on') grid[i][j] += 1;
        if (command === 'turn off') grid[i][j] = Math.max(0, grid[i][j] - 1);
      }
    }
  });

  return grid.flat().reduce((count, cur) => count + cur, 0);
}

console.log(solution(['turn on 0,0 through 999,999', 'toggle 0,0 through 999,0', 'turn off 499,499 through 500,500']));
console.log(solution(fileToArray('./input.txt')));