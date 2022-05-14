import { allProjects, allNotes, allTalks } from "@persistence/source";
import { metadataFor } from "./factory";

export const projectsMetadata = metadataFor(allProjects);
export const notesMetadata = metadataFor(allNotes);
export const talksMetadata = metadataFor(allTalks);
