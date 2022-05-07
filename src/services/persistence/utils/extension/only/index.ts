import { FileExtension, FileName } from "@persistence/types";

function is(extension: FileExtension) {
  return function hasExtension(fileName: FileName): boolean {
    return fileName.endsWith(`.${extension}`);
  };
}

export const hasMdx = is("mdx");
