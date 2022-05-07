import { exists } from ".";

describe("when given a truthy value", () => {
  const truthyValues = [42, -1, "test", "0", true, [], [42], {}, { a: 42 }, Infinity, -Infinity];

  it.each(truthyValues)("should return `true` for %p", (value) => {
    expect(exists(value)).toEqual(true);
  });
});

describe("when given a falsy value", () => {
  const falsyValues = [0, "", false, null, undefined, NaN];

  it.each(falsyValues)("should return `false` for %p", (value) => {
    expect(exists(value)).toEqual(false);
  });
});
