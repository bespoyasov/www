import { sizeOf } from ".";

describe("when given a non-empty list", () => {
  it("should return the number of elements in the given list", () => {
    expect(sizeOf([1, 2, 3])).toEqual(3);
  });
});

describe("when given a non-empty object", () => {
  it("should return the number of fields in the given object", () => {
    expect(sizeOf({ a: 1, b: 2 })).toEqual(2);
  });
});

describe("when given an empty collection", () => {
  it("should return 0 for an empty list", () => {
    expect(sizeOf([])).toEqual(0);
  });

  it("should return 0 for an empty object", () => {
    expect(sizeOf({})).toEqual(0);
  });
});

describe("when given not a collection", () => {
  it("should throw an error", () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const call = () => sizeOf(42 as any);
    expect(call).toThrowErrorMatchingInlineSnapshot(`"Collection must be a list or an object."`);
  });
});
