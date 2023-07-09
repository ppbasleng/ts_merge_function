import { merge } from './index';

describe('merge function', () => {
  it('should merge two sorted arrays correctly', () => {
    const arr1 = [1, 3, 5];
    const arr2 = [2, 4, 6];
    const merged = merge(arr1, arr2);

    expect(merged).toEqual([1, 2, 3, 4, 5, 6]);
  });

  it('should handle empty arrays', () => {
    const arr1: number[] = [];
    const arr2: number[] = [];
    const merged = merge(arr1, arr2);

    expect(merged).toEqual([]);
  });

  it('should handle one empty array', () => {
    const arr1 = [1, 2, 3];
    const arr2: number[] = [];
    const merged = merge(arr1, arr2);

    expect(merged).toEqual([1, 2, 3]);
  });

  it('should handle arrays of different lengths', () => {
    const arr1 = [1, 2, 4];
    const arr2 = [3, 5, 6, 7];
    const merged = merge(arr1, arr2);

    expect(merged).toEqual([1, 2, 3, 4, 5, 6, 7]);
  });
});
