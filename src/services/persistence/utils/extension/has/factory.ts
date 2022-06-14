import type { FileExtension } from "@persistence/types";
import type { HasSpecifiedExtension } from "./types";

export const createExtensionChecker: Factory<HasSpecifiedExtension, FileExtension> =
  (extension) => (fileName) =>
    fileName.endsWith(`.${extension}`);
