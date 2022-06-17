import { getNote, getProject, getTalk } from "@persistence/post";
import { contentFor } from "./factory";

export const fetchProject = contentFor(getProject);
export const fetchNote = contentFor(getNote);
export const fetchTalk = contentFor(getTalk);
