import { getBlogPost, getProject } from "@persistence/source";
import { contentFor } from "./factory";

export * from "./types";
export const fetchProject = contentFor(getProject);
export const fetchBlogPost = contentFor(getBlogPost);
