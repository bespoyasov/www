import { dependencies } from "@_persistence/composition";
import { createPathBuilder } from "./directory";

export const directoryFor = createPathBuilder(dependencies);
