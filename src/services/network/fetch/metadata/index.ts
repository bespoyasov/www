import { allProjects, allNotes } from "@persistence/source";
import { metadataFor } from "./factory";

export const projectsMetadata = metadataFor(allProjects);
export const notesMetadata = metadataFor(allNotes);
