import { getNote, getProject, getTalk } from "@services/persistence";

import { dependencies } from "../composition";
import { createFetchContentFactory } from "./content";

const contentFor = createFetchContentFactory(dependencies);

export const fetchProject = contentFor(getProject);
export const fetchNote = contentFor(getNote);
export const fetchTalk = contentFor(getTalk);
