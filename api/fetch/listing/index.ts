import { List, UrlSlug } from "@shared/types";
import { projectsList, blogPostsList } from "@persistence/source";

type Query = typeof projectsList | typeof blogPostsList;
type FetchRequest = () => Promise<List<UrlSlug>>;

function listingFor(query: Query): FetchRequest {
  return async function request(): Promise<List<UrlSlug>> {
    return query();
  };
}

export const projectsNames = listingFor(projectsList);
export const blogPostsNames = listingFor(blogPostsList);
