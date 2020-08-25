import { isEmpty } from ".";

describe("shared > isEmpty", () => {
  it("should return true if given an empty list", () => expect(isEmpty([])).toEqual(true));

  it("should return true if given an empty object", () => expect(isEmpty({})).toEqual(true));

  it("should return false if given a non-empty collection", () => {
    const collections = [[1, 2, 3], { a: 42 }];
    collections.forEach((collection) => {
      expect(isEmpty(collection)).toEqual(false);
    });
  });

  it("should throw an error if given not a collection", () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const call = () => isEmpty(42 as any);
    expect(call).toThrowErrorMatchingInlineSnapshot(`"Collection must be a list or an object."`);
  });
});
