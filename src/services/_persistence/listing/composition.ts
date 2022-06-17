import { dependencies } from "@persistence/composition";
import { createListingQueryFactory } from "./listing";

const queryFactory = createListingQueryFactory(dependencies);

export const projectList = queryFactory("projects");
export const noteList = queryFactory("notes");
export const talkList = queryFactory("talks");
