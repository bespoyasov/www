import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import { GetStaticProps, GetStaticPaths } from "next";

import { Nullable } from "@shared/types";
import { Metadata as MetadataType } from "@domain/metadata";
import { blogPostsMetadata, blogPostsNames } from "@api/fetch";

import { PostLayout } from "@layouts/Post";
import { Adjacent } from "@components/Adjacent";
import { Metadata } from "@components/Metadata";
import { Description } from "@components/Description";

type BlogPostProps = {
  metadata: MetadataType;
  prevPost: Nullable<MetadataType>;
  nextPost: Nullable<MetadataType>;
};

export const getStaticProps: GetStaticProps<BlogPostProps> = async (context) => {
  const { id } = context.params;
  const blogPosts = await blogPostsMetadata();
  const index = blogPosts.findIndex((post) => post.slug.includes(String(id)));

  return {
    props: {
      metadata: blogPosts[index],
      prevPost: blogPosts[index - 1] ?? null,
      nextPost: blogPosts[index + 1] ?? null,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const blogPosts = await blogPostsNames();
  const paths = blogPosts.map((id) => ({ params: { id } }));
  return { paths, fallback: false };
};

const BlogPost: React.FC<BlogPostProps> = ({ metadata, prevPost, nextPost }) => {
  const { title, description } = metadata;
  const { query } = useRouter();

  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const PostContents = require(`./${query.id}.mdx`).default;

  return (
    <PostLayout>
      <Head>
        <title>{title}</title>
        <Description>{description}</Description>
      </Head>
      <main>
        <PostContents />
      </main>
      <Metadata metadata={metadata} />
      <Adjacent prev={prevPost} next={nextPost} />
    </PostLayout>
  );
};

export default BlogPost;
