import { FileName } from "@persistence/types";

type WithExtension = FileName;
export type AddExtension = (name: FileName) => WithExtension;
