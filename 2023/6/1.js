import { fileToArray, getFilePath } from '../../utils.js';

export const solution = (file) => {
  const input = fileToArray(getFilePath(import.meta.dirname, file));

  const times = input[0].match(/\d+/g).map(Number);
  const records = input[1].match(/\d+/g).map(Number);
  const countRecordBeaten = (new Array(times.length)).fill(0);

  times.forEach((raceDuration, i) => {
    const raceRecord = records[i];

    for (let timeHeld = 1; timeHeld < raceDuration; timeHeld++) {
      const distance = (raceDuration - timeHeld) * timeHeld;
      if (distance > raceRecord) countRecordBeaten[i]++;
    }
  });

  return countRecordBeaten.reduce((total, cur) => total * cur, 1);
};

console.log(solution('sample1.txt'));
console.log(solution('input.txt'));