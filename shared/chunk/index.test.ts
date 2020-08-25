import { chunk } from ".";

describe("shared > chunk", () => {
  it("should split a list of 3 elements into 3 chunks 1 element each", () => {
    const list = [1, 2, 3];
    expect(chunk(list, 1)).toEqual([[1], [2], [3]]);
  });

  it("should split a list of 3 elements into 2 chunks with 2 elements in the first and 1 element in the last", () => {
    const list = [1, 2, 3];
    expect(chunk(list, 2)).toEqual([[1, 2], [3]]);
  });

  it("should return the same list if number of elements is less than chunk size", () => {
    const list = [1, 2, 3];
    expect(chunk(list, 10)).toEqual([list]);
  });

  it("should return an empty list if given an empty list", () => {
    expect(chunk([], 10)).toEqual([]);
  });
});
