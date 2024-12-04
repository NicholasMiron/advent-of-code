import { fileToArray, getFilePath } from '../../utils.js';

const filterNumsInRange = (match, x) => {
  if (!match) return false;
  const mStart = match.index;
  const mEnd = match[0].length + match.index - 1; // Inclusive

  // Num covers all three points
  if (mStart <= x - 1 && mEnd >= x + 1) return true;
  // Num ends inside three points
  if (mEnd >= x - 1 && mEnd <= x + 1) return true;
  // Num starts inside three points
  if (mStart >= x - 1 && mStart <= x + 1)  return true;

  return false;
}

export const solution = (file) => {
  const input = fileToArray(getFilePath(import.meta.dirname, file));

  const potentialGearLocations = input.map((line, y) => {
    const potentialGearMatches = line.matchAll(/\*/g);

    return [...potentialGearMatches].filter((match) => !!match).map(({ index }) => {
      return { x: index, y };
    });
  }).flat();

  return potentialGearLocations
    .map((loc) => {
      const hasNumLeft = /\d/.test(input[loc.y][loc.x - 1]);
      const hasNumRight = /\d/.test(input[loc.y][loc.x + 1]);
      const countNumsAbove = input[loc.y - 1].slice(loc.x - 1, loc.x + 2).match(/\d+/g)?.length || 0;
      const countNumsBelow = input[loc.y + 1].slice(loc.x -1, loc.x + 2).match(/\d+/g)?.length || 0;

      return {
        ...loc,
        left: hasNumLeft ? 1 : 0,
        right: hasNumRight ? 1 : 0,
        top: countNumsAbove,
        bottom: countNumsBelow,
      }
    })
    .filter(({ left, right, top, bottom }) => {
      return left + right + top + bottom === 2;
    })
    .map(({ x, y, left, right, top, bottom }) => {
      const leftNum = left && Number(input[y].slice(0, x).match(/\d+/g)?.at(-1));
      const rightNum = right && Number(input[y].slice(x + 1).match(/\d+/g)?.at(0));
      const topNums = top && [...input[y - 1].matchAll(/\d+/g) || []].filter((match) => {
        return filterNumsInRange(match, x);
      }).map((match) => Number(match[0]));
      const bottomNums = bottom && [...input[y + 1].matchAll(/\d+/g) || []].filter((match) => {
        return filterNumsInRange(match, x);
      }).map((match) => Number(match[0]));

      const gearNums = [leftNum,  rightNum, topNums, bottomNums]
        .flat()
        .filter((num) => !!num)

      return gearNums[0] * gearNums[1];
    }).reduce((ratioSums, cur) => ratioSums + cur, 0);
};

console.log(solution('./sample1.txt'));
console.log(solution('./input.txt'));