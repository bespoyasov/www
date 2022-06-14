import { defaultDependencies } from "./dependencies";
import { createQueryPost } from "./factory";

export const getProject = createQueryPost({ ...defaultDependencies, query: "projects" });
export const getNote = createQueryPost({ ...defaultDependencies, query: "notes" });
export const getTalk = createQueryPost({ ...defaultDependencies, query: "talks" });
