import Head from "next/head";

import { VisuallyHidden } from "@components/VisuallyHidden";
import { Description } from "@components/Description";
import { SummaryCard } from "@components/SummaryCard";
import { Section } from "@components/Section";
import { Anthology, Digest, Subscribe } from "@components/Notes";

import { translated } from "@translation";
import type { BlogProps } from "./types";

export const Blog = ({ posts }: BlogProps) => {
  return (
    <main>
      <Head>
        <title>{translated.blogPage.title}</title>
        <Description>{translated.blogPage.description}</Description>
        <SummaryCard />
      </Head>

      <VisuallyHidden as="h1">{translated.blogPage.heading}</VisuallyHidden>

      <Section title={translated.blogPage.recentTitle}>
        <p>{translated.blogPage.recentDescription}</p>
        <Digest notes={posts} />
        <Subscribe />
      </Section>

      <Section title={translated.blogPage.anthologyTitle}>
        <p>{translated.blogPage.anthologyDescription}</p>
        <Anthology notes={posts} />
      </Section>
    </main>
  );
};
