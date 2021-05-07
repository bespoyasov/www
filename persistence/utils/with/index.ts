import { FileExtension, FileName } from "@persistence/types";

type WithExtension = FileName;

function withExtension(extension: FileExtension) {
  return function concatExtension(name: FileName): WithExtension {
    return `${name}.${extension}`;
  };
}

export const withMdx = withExtension("mdx");
