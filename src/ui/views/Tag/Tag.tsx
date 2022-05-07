import Head from "next/head";
import { useRouter } from "next/router";

import { VisuallyHidden } from "@components/VisuallyHidden";
import { Description } from "@components/Description";
import { ProjectsList } from "@components/ProjectsList";
import { Section } from "@components/Section";
import { Anthology } from "@components/Notes";

import { assureType } from "@utils/assureType";
import { sizeOf } from "@utils/sizeOf";
import { Tag as TagEnum, TagKind } from "@domain/tags";

import type { TagProps } from "./types";

export const Tag = ({ projects, notes }: TagProps) => {
  const { query } = useRouter();
  const tag = TagEnum[assureType<TagKind>(query.id)];
  const summary = `Все проекты и заметки с тегом «${tag}»`;

  return (
    <>
      <Head>
        <title>{summary}</title>
        <Description>{summary}</Description>
      </Head>

      <main>
        <VisuallyHidden as="h1">{summary}</VisuallyHidden>

        <Section title={`Заметки по тегу «${tag}»`}>
          <p>Последние статьи из блога от новых к старым.</p>
          <Anthology notes={notes} />
        </Section>

        {sizeOf(projects) > 0 && (
          <Section title="Проекты">
            <p>Сайты, приложения, опен-сорс проекты, обучающие пособия и книги.</p>
            <ProjectsList projects={projects} />
          </Section>
        )}
      </main>
    </>
  );
};
