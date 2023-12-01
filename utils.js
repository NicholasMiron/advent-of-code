import fs from 'fs';

export const fileToArray = (file) => {
  return fs.readFileSync(file, 'utf8').split('\n');
}

export const fileToString = (file) => {
  return fs.readFileSync(file, 'utf8');
}