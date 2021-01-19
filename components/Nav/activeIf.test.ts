import { activeIf } from "./activeIf";

describe("when a condition is satisfied", () => {
  it("should append a `text-color` className", () => {
    expect(activeIf(true)).toEqual("text-color");
  });
});

describe("when a condition is not satisfied", () => {
  it("should not append a `text-color` className", () => {
    expect(activeIf(false)).toEqual("");
  });
});
