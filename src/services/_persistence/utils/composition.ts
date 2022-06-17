import { dependencies } from "@_persistence/composition";

import { createPathBuilder } from "./directory";
import { createExtensionChecker } from "./hasExtension";

export const directoryFor = createPathBuilder(dependencies);
export const isMdx = createExtensionChecker("mdx");
