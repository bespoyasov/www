import { hasMdx } from ".";

describe("when given a file name with the `.mdx` extension", () => {
  it("should return `true`", () => expect(hasMdx("file.mdx")).toBe(true));
});

describe("when given a file name with another extension", () => {
  it("should return `false`", () => expect(hasMdx("file.tsx")).toBe(false));
});

describe("when given a file name without any extension", () => {
  it("should return `false`", () => expect(hasMdx("file-without-extension")).toBe(false));
});

describe("when given a file name where `.mdx` is not an extension", () => {
  it("should return `false`", () => expect(hasMdx("file.mdx.tsx")).toBe(false));
});
