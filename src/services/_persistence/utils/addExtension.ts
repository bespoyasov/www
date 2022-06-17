import type { FileExtension, FileName } from "@_persistence/types";

type FileWithoutExtension = FileName;
type AddExtension = (file: FileWithoutExtension) => `${FileWithoutExtension}.${FileExtension}`;

export const createExtensionAdder: Factory<AddExtension, FileExtension> =
  (extension) => (fileName) =>
    `${fileName}.${extension}`;
