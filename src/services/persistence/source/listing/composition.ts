import { defaultDependencies } from "./dependencies";
import { createQueryFactory } from "./factory";

export const queryFor = createQueryFactory(defaultDependencies);
