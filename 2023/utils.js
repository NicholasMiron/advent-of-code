import fs from 'fs';

export const fileToArray = (file) => {
  return fs.readFileSync(file, 'utf8').split('\n');
}