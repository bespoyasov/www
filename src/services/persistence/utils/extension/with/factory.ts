import type { FileExtension } from "@persistence/types";
import type { AddExtension } from "./types";

export const createExtensionAdder: Factory<AddExtension, FileExtension> =
  (extension) => (fileName) =>
    `${fileName}.${extension}`;
