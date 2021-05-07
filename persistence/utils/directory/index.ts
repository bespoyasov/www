import { BLOG_DIRECTORY, PROJECTS_DIRECTORY } from "@persistence/const";
import { QueryKind_ } from "@persistence/types";

type PagesDirectory = typeof BLOG_DIRECTORY | typeof PROJECTS_DIRECTORY;

const pagesDirectories: Record<QueryKind_, PagesDirectory> = {
  projects: PROJECTS_DIRECTORY,
  blog: BLOG_DIRECTORY,
};

export function selectDirectory(forQuery: QueryKind_): PagesDirectory {
  return pagesDirectories[forQuery];
}
