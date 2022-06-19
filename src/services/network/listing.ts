import type { FetchListing } from "./ports";
import { noteList, projectList, talkList } from "@services/persistence";

export const projectNames: FetchListing = projectList;
export const noteNames: FetchListing = noteList;
export const talkNames: FetchListing = talkList;
