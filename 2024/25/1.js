import { fileToString, getFilePath } from "../../utils.js";

export const solution = (file) => {
  const input = fileToString(getFilePath(import.meta.dirname, file)).split('\n\n');

  const locks = input
    .filter((schematic) => schematic.startsWith('#####'))
    .map((schematic) => schematic.split('\n').reduce((acc, line) => {
      const copy = [...acc];
      line.split('').forEach((val, i) => {
        copy[i] -= val === '.' ? 1 : 0;
      });
      return copy;
    }, [6,6,6,6,6]))
  const keys = input
    .filter((schematic) => schematic.endsWith('#####'))
    .map((schematic) => schematic.split('\n').reduce((acc, line) => {
      const copy = [...acc];
      line.split('').forEach((val, i) => {
        copy[i] -= val === '.' ? 1 : 0;
      });
      return copy;
    }, [6,6,6,6,6]))


  return locks.reduce((count, lock) => {
    return count + (keys.reduce((acc, key) => {
      return acc + (key.every((num, i) => num + lock[i] < 6) ? 1 : 0);
    }, 0))
  }, 0);
}

console.log(solution("./sample.txt"));
console.log(solution("./input.txt"));
