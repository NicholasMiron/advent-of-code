import { solution as day1Solution } from "./1.js";
// import { solution as day2Solution } from "./2.js";

describe('Problem 1', () => {
  it('Should return result for sample', () => {
    const res = day1Solution('./sample1.txt');

    expect(res).toBe(35);
  });

  it('Should return result for input', () => {
    const res = day1Solution('./input.txt');

    expect(res).toBe(1181555926);
  });
});

describe.skip('Problem 2', () => {
  it('Should return result for sample', () => {
    const res = day2Solution('./sample1.txt');

    expect(res).toBe(null);
  });

  it('Should return result for input', () => {
    const res = day2Solution('./input.txt');

    expect(res).toBe(null);
  });
});