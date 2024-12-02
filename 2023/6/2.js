import { fileToArray } from '../../utils.js';

const solution = (input) => {
  const raceDuration = Number(input[0].match(/\d+/g).join(''));
  const raceRecord = Number(input[1].match(/\d+/g).join(''));
  let countRecordBeaten = 0

  for (let timeHeld = 1; timeHeld < raceDuration; timeHeld++) {
    const distance = (raceDuration - timeHeld) * timeHeld;
    if (distance > raceRecord) countRecordBeaten++;
  }

  return countRecordBeaten;
};

console.log(solution(fileToArray('sample1.txt')));
console.log(solution(fileToArray('input.txt')));