import Head from "next/head";
import { GetStaticProps } from "next";

import { VisuallyHidden } from "@components/VisuallyHidden";
import { Description } from "@components/Description";
import { SummaryCard } from "@components/SummaryCard";
import { Section } from "@components/Section";
import { Anthology, Digest } from "@components/Notes";

import { Metadata } from "@domain/metadata";
import { blogPostsMetadata } from "@api/fetch";

type BlogProps = {
  posts: Metadata[];
};

export const getStaticProps: GetStaticProps<BlogProps> = () => {
  return {
    props: {
      posts: blogPostsMetadata(),
    },
  };
};

const Blog = ({ posts }: BlogProps) => {
  return (
    <main>
      <Head>
        <title>Написал</title>
        <Description>Самый занудный блог.</Description>
        <SummaryCard />
      </Head>

      <VisuallyHidden as="h1">Все заметки</VisuallyHidden>

      <Section title="Свежее">
        <p>Недавние статьи из блога и подборки по тегам.</p>
        <Digest notes={posts} />
      </Section>

      <Section title="Всё подряд">
        <p>Все статьи от новых к старым.</p>
        <Anthology notes={posts} />
      </Section>
    </main>
  );
};

export default Blog;
