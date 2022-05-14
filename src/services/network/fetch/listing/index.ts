import type { PostId } from "@core/post";
import { noteList, projectList, talkList } from "@persistence/source";

type FetchNames = () => List<PostId>;

export const projectNames: FetchNames = projectList;
export const noteNames: FetchNames = noteList;
export const talkNames: FetchNames = talkList;
