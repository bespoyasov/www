import { createExtensionAdder } from "./factory";
import { mdxExtension } from "./dependencies";

export const withMdx = createExtensionAdder(mdxExtension);
