import { createQueryDirectory } from "./implementation";
import { dependencies } from "./dependencies";

export const directoryFor = createQueryDirectory(dependencies);
