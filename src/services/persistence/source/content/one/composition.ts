import { dependencies } from "../dependencies";
import { createQueryPost } from "./implementation";

export const getProject = createQueryPost({ ...dependencies, query: "projects" });
export const getNote = createQueryPost({ ...dependencies, query: "notes" });
export const getTalk = createQueryPost({ ...dependencies, query: "talks" });
