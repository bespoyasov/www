import { mdxExtension } from "../dependencies";
import { createExtensionAdder } from "./implementation";

export const withMdx = createExtensionAdder(mdxExtension);
