import { exists } from ".";

describe("for a truthy value", () => {
  it("should return `true`", () => {
    const truthyValues = [42, -1, "test", "0", true, [], [42], {}, { a: 42 }, Infinity, -Infinity];
    truthyValues.forEach((value) => expect(exists(value)).toEqual(true));
  });
});

describe("for a falsy value", () => {
  it("should return `false`", () => {
    const falsyValues = [0, "", false, null, undefined, NaN];
    falsyValues.forEach((value) => expect(exists(value)).toEqual(false));
  });
});
