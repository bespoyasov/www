import { activeIf } from "./activeIf";

describe("components > Nav > activeIf", () => {
  it("should append a `text-color` className if a condition satisfied", () =>
    expect(activeIf(true)).toEqual("text-color"));

  it("should not append a `text-color` className if a condition is not satisfied", () =>
    expect(activeIf(false)).toEqual(""));
});
