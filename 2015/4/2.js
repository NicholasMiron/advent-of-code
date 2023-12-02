import crypto from 'crypto';
import { fileToString } from "../../utils.js";

const solution = (input) => {
  let i = 0;

  while (true) {
    if (crypto.createHash('md5').update(input + i).digest('hex').startsWith('000000')) return i;
    i++;
  }
}

console.log(solution(fileToString('./input.txt')));