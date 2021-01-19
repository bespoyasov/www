import { parseObject } from ".";

type TestConditions = {
  input: string;
  expected: AnyObject;
};

function checkFor({ input, expected }: TestConditions): void {
  expect(parseObject(input)).toEqual(expected);
}

describe("shared > parseObject", () => {
  it("should parse as an object a string between the first opening curly brace and the last closing one", () =>
    checkFor({
      input: `{test: 42}`,
      expected: { test: 42 },
    }));

  it("should ignore everything before the first opening curly brace", () =>
    checkFor({
      input: `const meta = {test: 42}`,
      expected: { test: 42 },
    }));

  it("should ignore everything after the last closing curly brace", () =>
    checkFor({
      input: `{test: 42};`,
      expected: { test: 42 },
    }));

  it("should correctly parse inner objects and arrays as well", () =>
    checkFor({
      input: `{test: {test: [42]}};`,
      expected: { test: { test: [42] } },
    }));

  it("should return null if there are any errors while parsing", () => {
    const invalid = `{test: {}`;
    expect(parseObject(invalid)).toEqual(null);
  });
});
