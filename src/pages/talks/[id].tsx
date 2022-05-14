import type { GetStaticPaths, GetStaticProps } from "next";
import type { PostProps } from "@views/Post";

import { PostView as TalkPage } from "@views/Post";
import { fetchTalk, talkNames, talksMetadata } from "@network/fetch";

export const getStaticProps: GetStaticProps<PostProps> = async (context) => {
  const talkId = String(context.params.id);

  const content = await fetchTalk(talkId);
  const posts = talksMetadata();
  const index = posts.findIndex((post) => post.slug.endsWith(talkId));

  return {
    props: {
      metadata: posts[index],
      prevPost: posts[index + 1] ?? null,
      nextPost: posts[index - 1] ?? null,
      contents: content,
    },
  };
};

export const getStaticPaths: GetStaticPaths = () => {
  const posts = talkNames();
  const paths = posts.map((id) => ({ params: { id } }));
  return { paths, fallback: false };
};

export default TalkPage;
