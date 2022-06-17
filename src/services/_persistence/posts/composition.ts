import { dependencies } from "@_persistence/composition";
import { createPostsQueryFactory } from "./posts";

const queryFactory = createPostsQueryFactory(dependencies);

export const allProjects = queryFactory("projects");
export const allNotes = queryFactory("notes");
export const allTalks = queryFactory("talks");
