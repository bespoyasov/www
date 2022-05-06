import { chunk } from ".";

describe("when a given list can be equally split into chunks of the given size", () => {
  it("should split the list into chunks with an equal amount of elements in each", () => {
    const list = [1, 2, 3];
    expect(chunk(list, 1)).toEqual([[1], [2], [3]]);
  });
});

describe("when a given list cannot be equally split into chunks of the given size", () => {
  it("should split the list into chunks where the last one contains leftover elements", () => {
    const list = [1, 2, 3];
    expect(chunk(list, 2)).toEqual([[1, 2], [3]]);
  });
});

describe("when the number of elements in a given list is less than the chunk size", () => {
  it("should return the same list", () => {
    const list = [1, 2, 3];
    expect(chunk(list, 10)).toEqual([list]);
  });
});

describe("when given an empty list", () => {
  it("should return an empty list", () => {
    expect(chunk([], 10)).toEqual([]);
  });
});
