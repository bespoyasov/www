import { dependencies } from "@_persistence/composition";
import { createPostQueryFactory } from "./post";

const queryFactory = createPostQueryFactory(dependencies);

export const getProject = queryFactory("projects");
export const getNote = queryFactory("notes");
export const getTalk = queryFactory("talks");
