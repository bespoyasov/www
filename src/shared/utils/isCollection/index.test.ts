import { assureType } from "@utils/assureType";
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
    const nonCollections = [42, "test", Symbol(), null, undefined, Infinity, NaN];
    const testCases = assureType<List<SomeCollection>>(nonCollections);

    testCases.forEach((testCase) => {
      expect(isCollection(testCase)).toEqual(false);
    });
  });
});
