import type { FetchListing } from "@network/ports";
import { noteList, projectList, talkList } from "@services/persistence";

export const projectNames: FetchListing = projectList;
export const noteNames: FetchListing = noteList;
export const talkNames: FetchListing = talkList;
