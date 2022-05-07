import { getNote, getProject } from "@persistence/source";
import { contentFor } from "./factory";

export const fetchProject = contentFor(getProject);
export const fetchNote = contentFor(getNote);
