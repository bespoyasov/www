import { dependencies } from "../composition";
import { createQueryPosts } from "./posts";

export const allProjects = createQueryPosts({ ...dependencies, query: "projects" });
export const allNotes = createQueryPosts({ ...dependencies, query: "notes" });
export const allTalks = createQueryPosts({ ...dependencies, query: "talks" });
