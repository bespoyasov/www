import { splitInto } from ".";

describe("shared > splitInto", () => {
  it("should throw an error if required to split a list into less than 1 part", () => {
    const call = () => splitInto([], 0);
    expect(call).toThrowErrorMatchingInlineSnapshot(
      `"Cannot split an array into fewer than 1 part."`,
    );
  });

  it("should not throw if required to split a list into more or equal to 1 part", () => {
    const call = () => splitInto([], 1);
    expect(call).not.toThrow();
  });

  it("should equally split a list with even number of elements in 2 parts", () => {
    const list = [1, 2, 3, 4];
    const result = splitInto(list, 2);
    const expected = [
      [1, 2],
      [3, 4],
    ];

    expect(result).toEqual(expected);
  });

  it("should split a list with odd number of elements in 2 parts in such a way that last part would have amount of elements 1 less that another", () => {
    const list = [1, 2, 3, 4, 5];
    const result = splitInto(list, 2);
    const expected = [
      [1, 2, 3],
      [4, 5],
    ];

    expect(result).toEqual(expected);
  });

  it("should equally split a list into 3 parts", () => {
    const list = [1, 2, 3];
    const result = splitInto(list, 3);
    const expected = [[1], [2], [3]];
    expect(result).toEqual(expected);
  });

  it("should split a list into 3 parts, and the last one should contain 1 less", () => {
    const list = [1, 2, 3, 4, 5];
    const result = splitInto(list, 3);
    const expected = [[1, 2], [3, 4], [5]];
    expect(result).toEqual(expected);
  });
});
