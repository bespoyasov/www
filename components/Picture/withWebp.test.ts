import { withWebp } from "./withWebp";

describe("when given a filename with an image extension", () => {
  it("should replace that extension with `webp`", () => {
    const extensionsToReplace = ["jpg", "png"];

    extensionsToReplace.forEach((extension) => {
      const filename = "somFile";
      expect(withWebp(`${filename}.${extension}`)).toEqual(`${filename}.webp`);
    });
  });
});

describe("when given a filename with a non-image extension", () => {
  it("should not do anything", () => {
    const filename = "somFile.ts";
    expect(withWebp(filename)).toEqual(filename);
  });
});
