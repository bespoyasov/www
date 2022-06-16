import type { FileExtension, FileName } from "../types";

type HasExtension = (file: FileName) => boolean;

export const createExtensionChecker: Factory<HasExtension, FileExtension> =
  (extension) => (fileName) =>
    fileName.endsWith(`.${extension}`);
