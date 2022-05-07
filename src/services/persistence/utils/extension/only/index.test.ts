import { onlyMdx } from ".";

describe("when given a file with the `.mdx` extension", () => {
  it("should return `true`", () => {
    expect(onlyMdx("file.mdx")).toBe(true);
  });
});

describe("when given a file with another extension", () => {
  it("should return `false`", () => {
    expect(onlyMdx("file.tsx")).toBe(false);
  });
});

describe("when given a file without any extension", () => {
  it("should return `false`", () => {
    expect(onlyMdx("file-without-extension")).toBe(false);
  });
});

describe("when given a file where `.mdx` is not an extension", () => {
  it("should return `false`", () => {
    expect(onlyMdx("file.mdx.tsx")).toBe(false);
  });
});
