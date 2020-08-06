import React from "react";
import Head from "next/head";
import { GetStaticProps } from "next";

import { VisuallyHidden } from "@components/VisuallyHidden";
import { Description } from "@components/Description";
import { BlogSection } from "@components/BlogSection";
import { AllNotes, Digest } from "@components/Notes";

import { Metadata } from "@domain/metadata";
import { blogPostsMetadata } from "@api/fetch";

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
  return (
    <main>
      <Head>
        <title>Написал</title>
        <Description>Самый скучный блог.</Description>
      </Head>

      <VisuallyHidden as="h1">Все заметки</VisuallyHidden>

      <BlogSection title="Свежее">
        <Digest notes={posts} />
      </BlogSection>

      <BlogSection title="Всё подряд">
        <AllNotes notes={posts} />
      </BlogSection>
    </main>
  );
};

export default Blog;
