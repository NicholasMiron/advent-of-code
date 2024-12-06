import { fileToArray, getFilePath } from "../../utils.js";

export const solution = (file) => {
  const map = fileToArray(getFilePath(import.meta.dirname, file)).map((line) => line.split(''));

  let guardX = 0;
  let guardY = 0;

  map.forEach((line, y) => {
    line.forEach((char, x) => {
      if (char === '^') {
        guardX = x;
        guardY = y;
      }
    })
  });

  const guardOrders = {
    '^': [-1, 0, '>'],
    '>': [0, 1, 'v'],
    '<': [0, -1, '^'],
    'v': [1, 0, '<'],
  };

  let guardOnMap = true;
  while (guardOnMap) {
    const [yOrder, xOrder, nextOrder] = guardOrders[map[guardY][guardX]];

    // Rotate if next step is blocked
    if (map[guardY + yOrder]?.[guardX + xOrder] === '#') {
      map[guardY][guardX] = nextOrder;
    }
    // Move guard forward
    else if (map[guardY + yOrder]?.[guardX + xOrder] !== undefined) {
      map[guardY + yOrder][guardX + xOrder] = map[guardY][guardX];
      map[guardY][guardX] = 'X';
      guardY = guardY + yOrder;
      guardX = guardX + xOrder
    } else {
      map[guardY][guardX] = 'X';
      guardOnMap = false;
    }
  }

  return map
    .flat(1)
    .reduce((acc, cur) => acc + (cur === 'X' ? 1 : 0), 0);
}

console.log(solution("./sample.txt"));
console.log(solution("./input.txt"));
