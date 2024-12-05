import fs from 'node:fs';
import path from 'node:path';

// FILE UTILS START
export const fileToArray = (file) => {
  return fs.readFileSync(file, 'utf8').split('\n');
}

export const fileToString = (file) => {
  return fs.readFileSync(file, 'utf8');
}

export const getFilePath = (dirname, fileName) => {
  return path.resolve(dirname, fileName);
}
// FILE UTILS END

// ARRAY UTILS START
export const getSubArrays = (array, cb, minLength = 1) => {
  for (let i = 0; i < array.length; i ++) {
    for (let j = array.length; j - i >= minLength; j--) {
      cb(array.slice(i, j));
    }
  }

}

export const getArrayPermutationsCb = (arr, cb, n = arr.length) => {
  if (n === 1) {
    cb([...arr]);
  }
  for (let i = 0; i < n; i++) {
    getArrayPermutationsCb(arr, cb,n - 1);
    if (n % 2 === 0) {
      [arr[i], arr[n - 1]] = [arr[n - 1], arr[i]]
    } else {
      [arr[0], arr[n - 1]] = [arr[n - 1], arr[0]]
    }
  }
}

export const getArrayPermutations = (inputArr) => {
  let result = [];

  const permute = (arr, m = []) => {
    if (arr.length === 0) {
      result.push(m)
    } else {
      for (let i = 0; i < arr.length; i++) {
        let curr = arr.slice();
        let next = curr.splice(i, 1);
        permute(curr.slice(), m.concat(next))
      }
    }
  }

  permute(inputArr);

  return result;
}
// ARRAY UTILS END