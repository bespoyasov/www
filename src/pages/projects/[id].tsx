import type { GetStaticProps, GetStaticPaths } from "next";
import type { PostProps } from "@views/Post";

import { projectsMetadata, fetchProject, projectNames } from "@services/network";
import { PostView as ProjectPage } from "@views/Post";

export const getStaticProps: GetStaticProps<PostProps> = async (context) => {
  const postId = String(context.params.id);

  const content = await fetchProject(postId);
  const posts = projectsMetadata();
  const index = posts.findIndex((project) => project.slug.endsWith(postId));

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
  const posts = projectNames();
  const paths = posts.map((id) => ({ params: { id } }));
  return { paths, fallback: false };
};

export default ProjectPage;
