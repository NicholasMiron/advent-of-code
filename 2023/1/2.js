import { fileToArray } from "../utils.js";

const solution = (file) => {
  const data = fileToArray(file);

  const numMap = {
    'one': '1',
    'two': '2',
    'three': '3',
    'four': '4',
    'five': '5',
    'six': '6',
    'seven': '7',
    'eight': '8',
    'nine': '9',
    'zero': '0',
  };


  return data
    .map((val) => {
      const digits = [];

      // Find all digits in line
      for (let i = 0; i < val.length; i++) {
        const char = val[i];

        // If current char is a number
        if (!isNaN(char)) {
          digits.push(char);
        }

        // If current char is start of word number ("one", "two", ...)
        Object.entries(numMap).find(([strNum, num]) => {
          if (val.slice(i, i + strNum.length) === strNum) {
            digits.push(num);
            return true; // Break once word number is found
          }
          return false;
        });
      }

      // Return concatenation of first and last digits found in line
      return Number(digits.at(0) + digits.at(-1));
    })
    .reduce((total, cur) => total + cur, 0);
}

console.log(solution('./sample2.txt'))
console.log(solution('./input.txt'))