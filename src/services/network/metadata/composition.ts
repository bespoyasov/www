import { allNotes, allProjects, allTalks } from "@persistence/posts";

import { dependencies } from "@network/composition";
import { createFetchMetadataFactory } from "./metadata";

const metadataFor = createFetchMetadataFactory(dependencies);

export const projectsMetadata = metadataFor(allProjects);
export const notesMetadata = metadataFor(allNotes);
export const talksMetadata = metadataFor(allTalks);
