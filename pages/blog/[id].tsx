import Head from "next/head";
import { GetStaticProps, GetStaticPaths } from "next";

import { PostContents } from "@domain/post";
import { Metadata as MetadataType } from "@domain/metadata";
import { blogPostsMetadata, blogPostsNames, fetchBlogPost } from "@api/fetch";

import { Post } from "@components/Post";
import { Adjacent } from "@components/Adjacent";
import { Metadata } from "@components/Metadata";
import { Feedback } from "@components/Feedback";
import { Description } from "@components/Description";

type BlogPostProps = {
  contents: PostContents;
  metadata: MetadataType;
  prevPost: Nullable<MetadataType>;
  nextPost: Nullable<MetadataType>;
};

export const getStaticProps: GetStaticProps<BlogPostProps> = async (context) => {
  const postId = String(context.params.id);

  const content = await fetchBlogPost(postId);
  const blogPosts = await blogPostsMetadata();
  const index = blogPosts.findIndex((post) => post.slug.endsWith(postId));

  return {
    props: {
      metadata: blogPosts[index],
      prevPost: blogPosts[index - 1] ?? null,
      nextPost: blogPosts[index + 1] ?? null,
      contents: content,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const blogPosts = await blogPostsNames();
  const paths = blogPosts.map((id) => ({ params: { id } }));
  return { paths, fallback: false };
};

const BlogPost = ({ metadata, prevPost, nextPost, contents }: BlogPostProps) => {
  return (
    <>
      <Head>
        <title>{metadata.title}</title>
        <Description>{metadata.description}</Description>
      </Head>

      <Post content={contents} />
      <Metadata metadata={metadata} />
      <Feedback metadata={metadata} />
      <Adjacent prev={prevPost} next={nextPost} />
    </>
  );
};

export default BlogPost;
