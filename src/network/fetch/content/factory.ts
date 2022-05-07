import { PostContents, PostId } from "@domain/post";
import { getBlogPost, getProject } from "@persistence/source";
import { Dependencies, di } from "./composition";
import { settings } from "./settings";

type Query = typeof getProject | typeof getBlogPost;
type FetchRequest = (id: PostId, di?: Dependencies) => Promise<PostContents>;

export function contentFor(query: Query): FetchRequest {
  return async function request(
    id: PostId,
    { serialize, parser }: Dependencies = di,
  ): Promise<PostContents> {
    const { content } = parser(query(id));
    const { compiledSource } = await serialize(content, settings);
    return compiledSource;
  };
}
