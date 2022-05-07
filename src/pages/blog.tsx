import Head from "next/head";
import { GetStaticProps } from "next";

import { VisuallyHidden } from "@components/VisuallyHidden";
import { Description } from "@components/Description";
import { SummaryCard } from "@components/SummaryCard";
import { Section } from "@components/Section";
import { Anthology, Digest, Subscribe } from "@components/Notes";

import { Metadata } from "@domain/metadata";
import { blogPostsMetadata } from "@network/fetch";

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
        <Description>
          Свежие статьи из блога, подборки заметок по тегам и архив всех статей с 2012 года.
        </Description>
        <SummaryCard />
      </Head>

      <VisuallyHidden as="h1">Все заметки</VisuallyHidden>

      <Section title="Свежее">
        <p>Последние статьи из блога и подборки по тегам.</p>
        <Digest notes={posts} />
        <Subscribe />
      </Section>

      <Section title="Всё подряд">
        <p>Все опубликованные статьи от новых к старым.</p>
        <Anthology notes={posts} />
      </Section>
    </main>
  );
};

export default Blog;
