import { dependencies } from "../composition";

import { createPathBuilder } from "./directory";
import { createExtensionChecker } from "./hasExtension";
import { createExtensionAdder } from "./addExtension";

export const directoryFor = createPathBuilder(dependencies);
export const isMdx = createExtensionChecker("mdx");
export const withMdx = createExtensionAdder("mdx");
