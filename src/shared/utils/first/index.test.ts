import { first } from ".";

describe("given an empty list", () => {
  it("should return `undefined`", () => {
    expect(first([])).toBeUndefined();
  });
});

describe("given an non-empty list", () => {
  it("should return the first element from that list", () => {
    expect(first([1, 2, 3])).toEqual(1);
  });
});
