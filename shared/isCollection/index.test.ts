import { isCollection } from ".";

describe("when given a list", () => {
  it("should return `true`", () => {
    expect(isCollection([])).toEqual(true);
  });
});

describe("when given an object", () => {
  it("should return `true`", () => {
    expect(isCollection({})).toEqual(true);
  });
});

describe("when given any other data structure", () => {
  it("should return `false`", () => {
    const testCases = [42, "test", Symbol(), null, undefined, Infinity, NaN];
    testCases.forEach((testCase) => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      expect(isCollection<any>(testCase)).toEqual(false);
    });
  });
});
