import { sizeOf } from ".";

describe("shared > sizeOf", () => {
  it("should return a number of elements in a given list", () => {
    expect(sizeOf([1, 2, 3])).toEqual(3);
  });

  it("should return a number of fields in a given object", () => {
    expect(sizeOf({ a: 1, b: 2 })).toEqual(2);
  });

  it("should return 0 for an empty list", () => {
    expect(sizeOf([])).toEqual(0);
  });

  it("should return 0 for an empty object", () => {
    expect(sizeOf({})).toEqual(0);
  });

  it("should throw an error if given not a collection", () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const call = () => sizeOf(42 as any);
    expect(call).toThrowErrorMatchingInlineSnapshot(`"Collection must be a list or an object."`);
  });
});
