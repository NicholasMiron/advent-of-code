import { fileToArray, getFilePath } from '../../utils.js';

export const solution = (file) => {
  const input = fileToArray(getFilePath(import.meta.dirname, file));

  const symbolLocations = input
    .map((line, yIndex) => {
      const matches = line.matchAll(/[^\d.\r]/g);

      return [...matches].filter((match) => !!match).map((match) => {
        return {
          x: match.index,
          y: yIndex,
        }
      });
    })
    .flat()
    .reduce((acc, cur) => {
      return {
        ...acc,
        [cur.y]: acc[cur.y] ? [...acc[cur.y], cur.x] : [cur.x]
      }
    }, {});

  return input.map((line, y) => {
    const numberMatches = line.matchAll(/\d+/g);

    return [...numberMatches]
      .filter((match) => {
        if (!match) return false;
        const { index: xStart } = match;
        const m0 = match[0];

        if (symbolLocations?.[y]?.includes(xStart - 1)) {
          return true;
        }
        else if (symbolLocations?.[y]?.includes(xStart + m0.length)) {
          return true;
        }
        for (let i = xStart - 1; i <= xStart + match[0].length; i++) {
          if (symbolLocations?.[y - 1]?.includes(i)) return true;
          if (symbolLocations?.[y + 1]?.includes(i)) return true;
        }

        return false;
      })
      .map((match) => Number(match[0]));

    }).flat().reduce((sum, cur) => sum + cur, 0);
};

console.log(solution('./sample1.txt'));
console.log(solution('./input.txt'));