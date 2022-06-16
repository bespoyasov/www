import { dependencies } from "../composition";

import { createPathBuilder } from "./directory";
import { createExtensionChecker } from "./hasExtension";

export const directoryFor = createPathBuilder(dependencies);
export const isMdx = createExtensionChecker("mdx");
