import type { FileExtension } from "@persistence/types";
import type { HasExtension } from "./types";

export const createExtensionChecker: Factory<HasExtension, FileExtension> =
  (extension) => (fileName) =>
    fileName.endsWith(`.${extension}`);
