import type { PostId } from "@core/post";
import { noteList, projectList } from "@persistence/source";

type FetchNames = () => List<PostId>;

export const projectNames: FetchNames = projectList;
export const noteNames: FetchNames = noteList;
