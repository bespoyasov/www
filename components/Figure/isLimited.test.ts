import { isLimited } from "./isLimited";

describe("components > Picture > isLimited", () => {
  it("should return true if given a path that ends with `?limited`", () =>
    expect(isLimited("some-image-path.jpg?limited")).toBe(true));

  it("should return false if given a path doesn't end with `?limited`", () =>
    expect(isLimited("some-image-path.jpg")).toBe(false));
});
