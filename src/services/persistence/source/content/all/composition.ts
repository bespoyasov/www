import { dependencies } from "./dependencies";
import { createQueryPosts } from "./factory";

export const allProjects = createQueryPosts({ ...dependencies, query: "projects" });
export const allNotes = createQueryPosts({ ...dependencies, query: "notes" });
export const allTalks = createQueryPosts({ ...dependencies, query: "talks" });
