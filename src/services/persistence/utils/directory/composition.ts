import { createQueryDirectory } from "./factory";
import { dependencies } from "./dependencies";

export const directoryFor = createQueryDirectory(dependencies);
