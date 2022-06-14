import { dependencies } from "./dependencies";
import { createQueryFactory } from "./factory";

export const projectList = createQueryFactory({ ...dependencies, query: "projects" });
export const noteList = createQueryFactory({ ...dependencies, query: "notes" });
export const talkList = createQueryFactory({ ...dependencies, query: "talks" });
