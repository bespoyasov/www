import { FileExtension, FileName } from "@persistence/types";

function only(extension: FileExtension) {
  return function withExtension(fileName: FileName): boolean {
    return fileName.endsWith(`.${extension}`);
  };
}

export const onlyMdx = only("mdx");
