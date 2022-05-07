import { identity } from "@utils/identity";
import { SortOrder } from "./const";
import { sorterFor } from "./factory";

type TestComparable = number;

describe("when called a factory", () => {
  it("should return a function with 2 arguments", () => {
    const sorter = sorterFor<TestComparable>(identity);
    expect(typeof sorter).toBe("function");
    expect(sorter.length).toBe(2);
  });
});

describe("when called a created sorter function", () => {
  it("should use the specified transform function to transform the given arguments", () => {
    const transform = jest.fn();
    const sorter = sorterFor(transform);

    sorter(1, 2);
    expect(transform).toHaveBeenCalledTimes(2);
    expect(transform).toHaveBeenNthCalledWith(1, 1);
    expect(transform).toHaveBeenNthCalledWith(2, 2);
  });
});

describe("when sorting with a specified sort order", () => {
  it("should consider the order in the sorting results (ascending)", () => {
    const sorter = sorterFor<TestComparable>(identity, SortOrder.Ascending);
    expect(sorter(1, 2)).toBe(-1);
  });

  it("should consider the order in the sorting results (descending)", () => {
    const sorter = sorterFor<TestComparable>(identity, SortOrder.Descending);
    expect(sorter(1, 2)).toBe(1);
  });
});
