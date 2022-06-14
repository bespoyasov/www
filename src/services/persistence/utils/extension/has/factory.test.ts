import type { FileExtension } from "@persistence/types";
import { createExtensionChecker } from "./factory";

const extensions: List<FileExtension> = ["mdx", "tsx"];

describe("when given a file name with the specified extension", () => {
  it.each(extensions)("should return `true` (%p)", (extension) => {
    const hasExtension = createExtensionChecker(extension);
    expect(hasExtension(`file.${extension}`)).toBe(true);
  });
});

describe("when given a file name with another extension", () => {
  it.each(extensions)("should return `false` (%p)", (extension) => {
    const hasExtension = createExtensionChecker(extension);
    expect(hasExtension(`file.md`)).toBe(false);
  });
});

describe("when given a file name without any extension", () => {
  it.each(extensions)("should return `false` (%p)", (extension) => {
    const hasExtension = createExtensionChecker(extension);
    expect(hasExtension("file-without-extension")).toBe(false);
  });
});

describe("when given a file name where the part searched for is not an extension", () => {
  it.each(extensions)("should return `false` (%p)", (extension) => {
    const hasExtension = createExtensionChecker(extension);
    expect(hasExtension(`file.${extension}.md`)).toBe(false);
  });
});
