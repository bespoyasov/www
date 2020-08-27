import { onlyMdx } from ".";

describe("persistence > utils > onlyMdx", () => {
  it("should return true if given a file with .mdx extension", () => {
    expect(onlyMdx("file.mdx")).toBe(true);
  });

  it("should return false if given a file with other extension", () => {
    expect(onlyMdx("file.tsx")).toBe(false);
  });

  it("should return false if given a file without extension", () => {
    expect(onlyMdx("file-without-extension")).toBe(false);
  });

  it("should return false if .mdx is not an extension", () => {
    expect(onlyMdx("file.mdx.tsx")).toBe(false);
  });
});
