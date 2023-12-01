import { fileToString } from "../../utils.js";

const solution = (input) => {
  const housesVisited = new Set(['0,0']);
  let x = 0;
  let y = 0;

  for (const dir of input) {
    switch (dir) {
      case '>':
        x += 1;
        break;
      case '<':
        x -= 1;
        break;
      case '^':
        y += 1;
        break;
      case 'v':
        y -= 1;
        break;
      default:
        break;
    }
    housesVisited.add(`${x},${y}`);
  }

  return housesVisited.size;
}

console.log(solution('>'));
console.log(solution('^>v<'));
console.log(solution('^v^v^v^v^v'));
console.log(solution(fileToString('./input.txt')));