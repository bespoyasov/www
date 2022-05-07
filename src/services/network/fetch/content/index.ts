import { getBlogPost, getProject } from "@persistence/source";
import { contentFor } from "./factory";

export const fetchProject = contentFor(getProject);
export const fetchBlogPost = contentFor(getBlogPost);
