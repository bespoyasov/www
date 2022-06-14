import { defaultDependencies } from "./dependencies";
import { createQueryFactory } from "./factory";

export const projectList = createQueryFactory({ ...defaultDependencies, query: "projects" });
export const noteList = createQueryFactory({ ...defaultDependencies, query: "notes" });
export const talkList = createQueryFactory({ ...defaultDependencies, query: "talks" });
