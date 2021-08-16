import { withWebp, withAvif } from "./withExtension";

describe("when given a filename with an image extension", () => {
  const extensionsToReplace = ["jpg", "png"];
  const filename = "somFile";

  it("should replace that extension with `webp`", () => {
    extensionsToReplace.forEach((extension) => {
      expect(withWebp(`${filename}.${extension}`)).toEqual(`${filename}.webp`);
    });
  });

  it("should replace that extension with `avif`", () => {
    extensionsToReplace.forEach((extension) => {
      expect(withAvif(`${filename}.${extension}`)).toEqual(`${filename}.avif`);
    });
  });
});

describe("when given a filename with a non-image extension", () => {
  it("should not do anything", () => {
    const filename = "somFile.ts";
    expect(withWebp(filename)).toEqual(filename);
    expect(withAvif(filename)).toEqual(filename);
  });
});
