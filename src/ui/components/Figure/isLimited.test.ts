import { isLimited } from "./isLimited";

describe("when given a path that ends with `?limited`", () => {
  it("should return `true`", () => {
    expect(isLimited("some-image-path.jpg?limited")).toBe(true);
  });
});

describe("when given path doesn't end with `?limited`", () => {
  it("should return `false`", () => {
    expect(isLimited("some-image-path.jpg")).toBe(false);
  });
});
