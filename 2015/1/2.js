import { fileToString } from "../../utils.js";

const solution = (input) => {
  const directions = input.split('');
  let curFloor = 0;

  for (let i = 0; i < directions.length; i++) {
    curFloor += directions[i] === ('(') ? 1 : -1;
    if (curFloor < 0) return i + 1;
  }

  return -1;
}

console.log(solution('))'));
console.log(solution(fileToString('./input.txt')))