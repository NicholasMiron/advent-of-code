import { fileToArray } from "../../utils.js";

const solution = (input) => {
  const grid = [];

  input.forEach((instruction) => {
    const [_, command, startX, startY, endX, endY] = instruction.match(/^(toggle|turn on|turn off) (\d+),(\d+) through (\d+),(\d+)$/);

    for (let i = +startX; i <= +endX; i++) {
      if (!grid[i]) grid[i] = [];
      for (let j = +startY; j <= +endY; j++) {
        if (command === 'toggle') grid[i][j] = !grid[i][j];
        if (command === 'turn on') grid[i][j] = true;
        if (command === 'turn off') grid[i][j] = false;
      }
    }
  });

  return grid.flat().reduce((count, cur) => count + cur, 0);
}

console.log(solution(['turn on 0,0 through 999,999', 'toggle 0,0 through 999,0', 'turn off 499,499 through 500,500']));
console.log(solution(fileToArray('./input.txt')));