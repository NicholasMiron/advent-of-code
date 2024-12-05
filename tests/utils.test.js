import { getArrayPermutationsCb, getSubArrays } from "../utils.js";

describe('getArrayPermutations', () => {
  it('Should trigger callback for each permutation', () => {
    const mockCb = vi.fn();
    getArrayPermutationsCb([1,2,3], mockCb);

    expect(mockCb).toHaveBeenCalledWith([1,2,3]);
    expect(mockCb).toHaveBeenCalledWith([1,3,2]);
    expect(mockCb).toHaveBeenCalledWith([2,1,3]);
    expect(mockCb).toHaveBeenCalledWith([2,3,1]);
    expect(mockCb).toHaveBeenCalledWith([3,1,2]);
    expect(mockCb).toHaveBeenCalledWith([3,2,1]);
  });

  it('Should trigger callback for one permutation', () => {
    const mockCb = vi.fn();
    getArrayPermutationsCb([1], mockCb);

    expect(mockCb).toHaveBeenCalledWith([1]);
  });

  it('Should not trigger callback for empty array', () => {
    const mockCb = vi.fn();
    getArrayPermutationsCb([], mockCb);

    expect(mockCb).not.toHaveBeenCalled();
  });
});

describe('getSubArrays', () => {
  it('Should call callback with all sub arrays', () => {
    const mockFn = vi.fn();
    getSubArrays([1,2,3], mockFn);

    expect(mockFn).toHaveBeenCalledWith([1, 2, 3]);
    expect(mockFn).toHaveBeenCalledWith([1, 2]);
    expect(mockFn).toHaveBeenCalledWith([2, 3]);
    expect(mockFn).toHaveBeenCalledWith([1]);
    expect(mockFn).toHaveBeenCalledWith([2]);
    expect(mockFn).toHaveBeenCalledWith([3]);
    expect(mockFn).toHaveBeenCalledTimes(6);
  });

  it('Should call callback with sub arrays with min length', () => {
    const mockFn = vi.fn();
    getSubArrays([1,2,3,4,5,6], mockFn, 4);

    expect(mockFn).toHaveBeenCalledWith([1, 2, 3, 4, 5, 6]);
    expect(mockFn).toHaveBeenCalledWith([1, 2, 3, 4, 5]);
    expect(mockFn).toHaveBeenCalledWith([2, 3, 4, 5, 6]);
    expect(mockFn).toHaveBeenCalledWith([1, 2, 3, 4]);
    expect(mockFn).toHaveBeenCalledWith([2, 3, 4, 5]);
    expect(mockFn).toHaveBeenCalledWith([3, 4, 5, 6]);
    expect(mockFn).toHaveBeenCalledTimes(6);
  });

  it('Should not call callback for empty array', () => {
    const mockFn = vi.fn();
    getSubArrays([], mockFn, 4);

    expect(mockFn).not.toHaveBeenCalled();
  });
});