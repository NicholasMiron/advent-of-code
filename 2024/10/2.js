import { fileToArray, getFilePath } from "../../utils.js";

const getTrailPeaks = (map, x, y, count = 0) => {
  if (map[y][x] === 9) return count + 1;

  const curHeight = map[y][x];
  const nextHeight = curHeight + 1;

  if (map?.[y]?.[x + 1] === nextHeight) count += getTrailPeaks(map, x + 1, y);
  if (map?.[y]?.[x - 1] === nextHeight) count += getTrailPeaks(map, x - 1, y);
  if (map?.[y + 1]?.[x] === nextHeight) count += getTrailPeaks(map, x, y + 1);
  if (map?.[y - 1]?.[x] === nextHeight) count += getTrailPeaks(map, x, y - 1);

  return count;
}

export const solution = (file) => {
  const input = fileToArray(getFilePath(import.meta.dirname, file));

  const map = input.map((line) => line.split('').map((c) => parseInt(c)));

  let peakCount = 0;
  for (let y = 0; y < map.length; y++) {
    for (let x = 0; x < map[y].length; x++) {
      if (map[y][x] === 0) {
        peakCount += getTrailPeaks(map, x, y);
      }
    }
  }

  return peakCount;
}

console.log(solution("./sample.txt"));
console.log(solution("./input.txt"));
