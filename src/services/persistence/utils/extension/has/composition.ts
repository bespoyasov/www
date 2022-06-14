import { createExtensionChecker } from "./factory";
import { mdxExtension } from "./dependencies";

export const hasMdx = createExtensionChecker(mdxExtension);
