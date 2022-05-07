import { allProjects, allBlogPosts } from "@persistence/source";
import { metadataFor } from "./factory";

export const projectsMetadata = metadataFor(allProjects);
export const blogPostsMetadata = metadataFor(allBlogPosts);
