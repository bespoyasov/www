import Head from "next/head";
import { GetStaticProps } from "next";

import { VisuallyHidden } from "@components/VisuallyHidden";
import { Description } from "@components/Description";
import { Section } from "@components/Section";
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

const Blog = ({ posts }: BlogProps) => {
  return (
    <main>
      <Head>
        <title>Написал</title>
        <Description>Самый занудный блог.</Description>
      </Head>

      <VisuallyHidden as="h1">Все заметки</VisuallyHidden>

      <Section title="Свежее">
        <Digest notes={posts} />
      </Section>

      <Section title="Всё подряд">
        <AllNotes notes={posts} />
      </Section>
    </main>
  );
};

export default Blog;
