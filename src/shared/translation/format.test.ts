import { injectIn } from "./format";

describe("when given a template and a list of values", () => {
  it("should replace all the injection points with the values", () => {
    const template = "Test %s string %s test";
    const values = ["hello", "world"];

    expect(injectIn(template, ...values)).toEqual("Test hello string world test");
  });
});

describe("when given a list with more values than injection points", () => {
  it("should inject the first N values into the template", () => {
    const template = "Test %s string %s test";
    const values = ["1", "2", "3"];

    expect(injectIn(template, ...values)).toEqual("Test 1 string 2 test");
  });
});

describe("when given a template without injection points", () => {
  it("should keep the template string intact", () => {
    const template = "Test string test";
    const values = ["hello", "world"];

    expect(injectIn(template, ...values)).toEqual(template);
  });
});
