import React from "react";
import Head from "next/head";
import { GetStaticProps } from "next";

import { Description } from "@components/Description";
import { RssFeed } from "@components/RssFeed";

import { isProduction } from "@shared/env";
import { Metadata } from "@domain/metadata";
import { blogPostsMetadata } from "@api/fetch";
import { sizeOf } from "@shared/sizeOf";

type BlogProps = {
  posts: Metadata[];
};

export const getStaticProps: GetStaticProps<BlogProps> = async () => {
  return {
    props: {
      posts: await blogPostsMetadata(),
    },
  };
};

const Blog: React.FC<BlogProps> = ({ posts }) => {
  const maxAmount = isProduction() ? sizeOf(posts) : 5;
  const latestPosts = posts.slice(0, maxAmount);

  return (
    <main>
      <Head>
        <title>АБ</title>
        <Description>Самый скучный блог.</Description>
      </Head>

      <RssFeed entries={latestPosts} />
    </main>
  );
};

export default Blog;
