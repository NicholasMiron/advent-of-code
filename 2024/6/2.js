import { fileToArray, getFilePath } from "../../utils.js";




export const solution = (file) => {
  const mapBase = fileToArray(getFilePath(import.meta.dirname, file)).map((line) => line.replaceAll('.', 0).split(''));

  let guardXBase = 0;
  let guardYBase = 0;

  mapBase.forEach((line, y) => {
    line.forEach((char, x) => {
      if (char === '^') {
        guardXBase = x;
        guardYBase = y;
      }
    })
  });

  // Hide the guard we need it for the count;
  mapBase[guardYBase][guardXBase] = '0';

  const guardOrders = {
    '^': [-1, 0, '>'],
    '>': [0, 1, 'v'],
    '<': [0, -1, '^'],
    'v': [1, 0, '<'],
  };

  let result = 0;

  for (let y = 0; y < mapBase.length; y++) {
    for (let x = 0; x < mapBase[y].length; x++) {

      let guardX = guardXBase;
      let guardY = guardYBase;
      const map = mapBase.map((arr) => [...arr]);
      map[y][x] = '#'; // Set new obstacle on map

      if (map[y][x] in guardOrders) continue; // Skip guard starting position

      let guard = '^';

      while (true) {
        const [yOrder, xOrder, nextOrder] = guardOrders[guard];

        // Rotate if next step is blocked
        if (map[guardY + yOrder]?.[guardX + xOrder] === '#') {
          // Stop once path walked by guard twice
          if (map[guardY][guardX] === 2) {
            result++;
            break;
          }
          guard = nextOrder;
        }
        // Move guard forward
        else if (map[guardY + yOrder]?.[guardX + xOrder] !== undefined) {
          map[guardY][guardX]++;
          guardY = guardY + yOrder;
          guardX = guardX + xOrder;
        }
        // Guard is off the map - no loop found
        else {
          break;
        }
      }

    }
  }

  return result;
}

console.log(solution("./sample.txt"));
console.log(solution("./input.txt"));
