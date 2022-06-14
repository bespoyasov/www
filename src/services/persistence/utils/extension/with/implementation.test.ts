import type { FileExtension } from "@persistence/types";
import { createExtensionAdder } from "./implementation";

const extensions: List<FileExtension> = ["mdx", "tsx"];

describe("when given any file name", () => {
  const each = it.each(extensions);

  each("should append the specified extension (%p) to it", (extension) => {
    const withExtension = createExtensionAdder(extension);
    expect(withExtension("filename")).toEqual(`filename.${extension}`);
  });
});
