import { classes } from ".";

describe("shared > classes", () => {
  it("should join given classNames using the space as a separator", () =>
    expect(classes("a", "b", "c")).toEqual("a b c"));

  it("should filter out all the empty strings and non existing classNames", () =>
    expect(classes("a", "", null && "b", "c", null)).toEqual("a c"));

  it("should return the same className if given only 1", () => expect(classes("a")).toEqual("a"));
});
