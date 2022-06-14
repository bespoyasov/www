import { mdxExtension } from "../dependencies";
import { createExtensionChecker } from "./factory";

export const hasMdx = createExtensionChecker(mdxExtension);
