import { exists } from ".";

describe("shared > exists", () => {
  it("should return true for all the truthy values", () => {
    const truthyValues = [42, -1, "test", "0", true, [], [42], {}, { a: 42 }, Infinity, -Infinity];
    truthyValues.forEach((value) => expect(exists(value)).toEqual(true));
  });

  it("should return false for all the falsy values", () => {
    const falsyValues = [0, "", false, null, undefined, NaN];
    falsyValues.forEach((value) => expect(exists(value)).toEqual(false));
  });
});
