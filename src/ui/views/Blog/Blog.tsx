import Head from "next/head";

import { VisuallyHidden } from "@components/VisuallyHidden";
import { Description } from "@components/Description";
import { SummaryCard } from "@components/SummaryCard";
import { Section } from "@components/Section";
import { Anthology, Digest, Subscribe } from "@components/Notes";

import type { BlogProps } from "./types";

export const Blog = ({ posts }: BlogProps) => {
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
