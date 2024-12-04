import { solution as day1Solution } from "./1.js";
import { solution as day2Solution } from "./2.js";

describe('Problem 1', () => {
  it('Should return result for sample', () => {
    const res = day1Solution('./sample.txt');

    expect(res).toBe(2);
  });

  it('Should return result for input', () => {
    const res = day1Solution('./input.txt');

    expect(res).toBe(591);
  });
});

describe('Problem 2', () => {
  it('Should return result for sample', () => {
    const res = day2Solution('./sample.txt');

    expect(res).toBe(5);
  });

  it('Should return result for input', () => {
    const res = day2Solution('./input.txt');

    expect(res).toBe(621);
  });
})