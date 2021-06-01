import { last } from ".";

describe("when given a list", () => {
  it("should return the last element from that list", () => {
    expect(last([1, 2, 3])).toEqual(3);
  });
});

describe("when given an empty list", () => {
  it("should return undefined", () => {
    expect(last([])).toBeUndefined();
  });
});
