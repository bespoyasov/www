import { mdxExtension } from "../dependencies";
import { createExtensionChecker } from "./implementation";

export const hasMdx = createExtensionChecker(mdxExtension);
