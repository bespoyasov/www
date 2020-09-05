import { isStatic } from "./isStatic";

describe("components > TagLink > isStatic", () => {
  it("should return true if a given tag is in list of static Tag-pages", () =>
    expect(isStatic("travel")).toBe(true));

  it("should return false if a given tag is not in list of static Tag-pages", () =>
    expect(isStatic("advice")).toBe(false));
});
