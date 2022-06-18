import type { FetchListing } from "@_network/ports";
import { noteList, projectList, talkList } from "@persistence/listing";

export const projectNames: FetchListing = projectList;
export const noteNames: FetchListing = noteList;
export const talkNames: FetchListing = talkList;
