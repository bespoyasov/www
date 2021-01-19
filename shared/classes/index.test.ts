import { classes } from ".";

describe("when given a bunch of classNames", () => {
  it("should join given classNames using the space as a separator", () => {
    expect(classes("a", "b", "c")).toEqual("a b c");
  });
});

describe("when given classNames with falsy values", () => {
  it("should filter out all the empty strings and non-existing classNames", () => {
    expect(classes("a", "", null && "b", "c", null)).toEqual("a c");
  });
});

describe("when given only 1 className", () => {
  it("should return the same className", () => {
    expect(classes("a")).toEqual("a");
  });
});
