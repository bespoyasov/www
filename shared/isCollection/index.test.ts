import { isCollection } from ".";

describe("shared > isCollection", () => {
  it("should return true for a list", () => {
    expect(isCollection([])).toEqual(true);
  });

  it("should return true for an object", () => {
    expect(isCollection({})).toEqual(true);
  });

  it("should return false for any other data-type", () => {
    const testCases = [42, "test", Symbol(), null, undefined, Infinity, NaN];
    testCases.forEach((testCase) => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      expect(isCollection<any>(testCase)).toEqual(false);
    });
  });
});
