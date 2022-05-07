import type { GetStaticProps, GetStaticPaths } from "next";
import type { PostProps } from "@views/Post";

import { notesMetadata, noteNames, fetchNote } from "@network/fetch";
import { PostView as BlogPost } from "@views/Post";

export const getStaticProps: GetStaticProps<PostProps> = async (context) => {
  const postId = String(context.params.id);

  const content = await fetchNote(postId);
  const posts = notesMetadata();
  const index = posts.findIndex((post) => post.slug.endsWith(postId));

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
  const posts = noteNames();
  const paths = posts.map((id) => ({ params: { id } }));
  return { paths, fallback: false };
};

export default BlogPost;
