import fs from 'node:fs';
import path from 'node:path';

export const fileToArray = (file) => {
  return fs.readFileSync(file, 'utf8').split('\n');
}

export const fileToString = (file) => {
  return fs.readFileSync(file, 'utf8');
}

export const getFilePath = (dirname, fileName) => {
  return path.resolve(dirname, fileName);
}