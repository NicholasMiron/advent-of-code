import { fileToArray, getFilePath } from "../../utils.js";

export const solution = (file) => {
  const map = fileToArray(getFilePath(import.meta.dirname, file)).map((line) => line.split(''));

  const mapWidth = map[0].length;
  const mapHeight = map.length;

  const antennaLocations = {};

  map.forEach((line, y) => {
    line.forEach((loc, x) => {
      if (loc !== '.') {
        antennaLocations[loc] = antennaLocations[loc] ? [...antennaLocations[loc], [x, y]] : [[x, y]];
      }
    })
  });

  const uniqueAntiNodes = new Set();

  Object.entries(antennaLocations).forEach(([antenna, locations]) => {
    for (let i = 0; i < locations.length; i++) {
      for (let j = i + 1; j < locations.length; j++) {
        const [x1, y1] = locations[i];
        const [x2, y2] = locations[j];

        const xDiff = x2 - x1;
        const yDiff = y2 - y1;

        const antinode1 = [x1 - xDiff, y1 - yDiff];
        const antinode2 = [x2 + xDiff, y2 + yDiff];

        if ((antinode1[0] >= 0 && antinode1[0] < mapWidth) && (antinode1[1] >= 0 && antinode1[1] < mapHeight)) {
          uniqueAntiNodes.add(`${antinode1[0]},${antinode1[1]}`);
        }
        if ((antinode2[0] >= 0 && antinode2[0] < mapWidth) && (antinode2[1] >= 0 && antinode2[1] < mapHeight)) {
          uniqueAntiNodes.add(`${antinode2[0]},${antinode2[1]}`);
        }
      }
    }
  });

  return uniqueAntiNodes.size;
}

console.log(solution("./sample.txt"));
console.log(solution("./input.txt"));
