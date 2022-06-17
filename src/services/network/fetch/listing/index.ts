import type { PostId } from "@core/post";
import { noteList, projectList, talkList } from "@_persistence/listing";

type FetchNames = () => List<PostId>;

export const projectNames: FetchNames = projectList;
export const noteNames: FetchNames = noteList;
export const talkNames: FetchNames = talkList;
