import type { FileExtension, FileName } from "@_persistence/types";

type HasExtension = (file: FileName) => boolean;

export const createExtensionChecker: Factory<HasExtension, FileExtension> =
  (extension) => (fileName) =>
    fileName.endsWith(`.${extension}`);
