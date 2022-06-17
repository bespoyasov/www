import type { FileExtension, FileName } from "@persistence/types";

type HasExtension = (file: FileName) => boolean;

export const createExtensionChecker: Factory<HasExtension, FileExtension> =
  (extension) => (fileName) =>
    fileName.endsWith(`.${extension}`);
