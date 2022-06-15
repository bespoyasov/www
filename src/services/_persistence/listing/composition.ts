import { dependencies } from "../composition";
import { createQueryListing } from "./listing";

export const projectList = createQueryListing({ ...dependencies, query: "projects" });
export const noteList = createQueryListing({ ...dependencies, query: "notes" });
export const talkList = createQueryListing({ ...dependencies, query: "talks" });
