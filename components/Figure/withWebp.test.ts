import { withWebp } from "./withWebp";

describe("components > Picture > withWebp", () => {
  it("should replace any of image extensions with `webp`", () => {
    const extensionsToReplace = ["jpg", "png"];

    extensionsToReplace.forEach((extension) => {
      const filename = "somFile";
      expect(withWebp(`${filename}.${extension}`)).toEqual(`${filename}.webp`);
    });
  });

  it("should not do anything with non-image filenames", () => {
    const filename = "somFile.ts";
    expect(withWebp(filename)).toEqual(filename);
  });
});
