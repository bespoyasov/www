import { queryFor } from "./composition";

export const projectList = queryFor("projects");
export const noteList = queryFor("notes");
export const talkList = queryFor("talks");

export * from "./types";
