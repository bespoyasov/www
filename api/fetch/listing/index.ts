import { projectsList, blogPostsList } from "@persistence/source";

type Query = typeof projectsList | typeof blogPostsList;
type FetchRequest = () => List<UrlSlug>;

function listingFor(query: Query): FetchRequest {
  return function request(): List<UrlSlug> {
    return query();
  };
}

export const projectsNames = listingFor(projectsList);
export const blogPostsNames = listingFor(blogPostsList);
