import { FileName, FileExtension } from "@persistence/types";

export type AddExtension = (name: FileName) => `${FileName}.${FileExtension}`;
