import { zip } from ".";

describe("given lists with different number of elements", () => {
  it("should return an empty list", () => {
    expect(zip([1], [1, 2])).toEqual([]);
  });
});

describe("given lists with equal number of elements", () => {
  it("should compile a list of pairs of elements from those lists", () => {
    expect(zip([1, 2, 3], ["a", "b", "c"])).toEqual([
      [1, "a"],
      [2, "b"],
      [3, "c"],
    ]);
  });
});
