import { fileToArray } from '../../utils.js';

const solution = (input) => {
  const seedIds = input[0].match(/\d+/g).map(Number);

  const bigMap = {};
  let curSource = '';
  let curDest = '';

  input.slice(1).forEach((line) => {
    if (line === '/r') {
      curSource = '';
      curDest = '';
      return;
    }
    if (/[a-z]/.test(line[0])) {
      const [source, _, dest] = line.split(' ')[0].split('-');
      curDest = dest;
      curSource = source;
      bigMap[curSource] = { nextDest: curDest, sources: [], destinations: [], ranges: [] };
    }
    if (/\d/.test(line[0])) {
      const [dest, source, range] = line.split(' ').map(Number);

      bigMap[curSource].sources.push(source)
      bigMap[curSource].destinations.push(dest)
      bigMap[curSource].ranges.push(range)
    }
  });

  const locations = seedIds.map((seed) => {
    let curSource = 'seed';
    let num = seed;

    while(curSource !== 'location') {
      for (let i = 0; i < bigMap[curSource].sources.length; i++) {
        const source = bigMap[curSource].sources[i];
        const range = bigMap[curSource].ranges[i];

        if (num >= source && num < source + range) {
          num = bigMap[curSource].destinations[i] + num - source;

          break;
        }
      }
      curSource = bigMap[curSource].nextDest;
    }

    return num;
  });

  return Math.min(...locations);
};

console.log(solution(fileToArray('./sample1.txt')));
console.log(solution(fileToArray('./input.txt')));
