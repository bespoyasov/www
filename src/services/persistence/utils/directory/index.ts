import { BLOG_DIRECTORY, PROJECTS_DIRECTORY } from "@persistence/const";
import { QueryKind } from "@persistence/types";

type PagesDirectory = typeof BLOG_DIRECTORY | typeof PROJECTS_DIRECTORY;

const pagesDirectories: Record<QueryKind, PagesDirectory> = {
  projects: PROJECTS_DIRECTORY,
  blog: BLOG_DIRECTORY,
};

export function directoryFor(query: QueryKind): PagesDirectory {
  return pagesDirectories[query];
}
