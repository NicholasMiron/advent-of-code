import crypto from 'crypto';
import { fileToString } from "../../utils.js";

const solution = (input) => {
  let i = 0;

  while (true) {
    const hash = crypto.createHash('md5').update(input + i).digest('hex');
    if (hash.startsWith('00000')) return i;
    i++;
  }
}

console.log(solution('abcdef'));
console.log(solution('pqrstuv'));

console.log(solution(fileToString('./input.txt')));