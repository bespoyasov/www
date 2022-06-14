import { mdxExtension } from "../dependencies";
import { createExtensionAdder } from "./factory";

export const withMdx = createExtensionAdder(mdxExtension);
