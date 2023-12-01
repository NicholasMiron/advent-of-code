import { fileToString } from "../../utils.js";

const solution = (input) => {
  const housesVisited = new Set(['0,0']);
  let santaCoords = { x: 0, y: 0 };
  let robotCoords = { x: 0, y: 0 };
  let santaMove = true;

  for (const dir of input) {
    let coords = santaMove ? santaCoords : robotCoords;
    santaMove = !santaMove;

    if (dir === '>') coords.x += 1;
    if (dir === '<') coords.x -= 1;
    if (dir === '^') coords.y += 1;
    if (dir === 'v') coords.y -= 1;

    housesVisited.add(`${coords.x},${coords.y}`);
  }

  return housesVisited.size;
}


console.log(solution('^v'));
console.log(solution('^>v<'));
console.log(solution('^v^v^v^v^v'));
console.log(solution(fileToString('./input.txt')));