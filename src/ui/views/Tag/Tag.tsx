import Head from "next/head";
import { useRouter } from "next/router";

import type { TagKind } from "@core/tags";
import { valueOf } from "@core/tags";

import { VisuallyHidden } from "@components/VisuallyHidden";
import { Description } from "@components/Description";
import { ProjectsList } from "@components/ProjectsList";
import { TalkList } from "@components/TalkList";
import { Section } from "@components/Section";
import { Anthology } from "@components/Notes";

import { castTo } from "@utils/assureType";
import { sizeOf } from "@utils/sizeOf";

import { injectIn, translated } from "@translation";
import type { TagProps } from "./types";

export const Tag = ({ projects, notes, talks }: TagProps) => {
  const { query } = useRouter();
  const tag = valueOf(castTo<TagKind>(query.id));
  const summary = injectIn(translated.tagPage.summary, tag);

  return (
    <>
      <Head>
        <title>{summary}</title>
        <Description>{summary}</Description>
      </Head>

      <main>
        <VisuallyHidden as="h1">{summary}</VisuallyHidden>

        <Section title={injectIn(translated.tagPage.notesTitle, tag)}>
          <p>{translated.tagPage.notesDescription}</p>
          <Anthology notes={notes} />
        </Section>

        {sizeOf(talks) > 0 && (
          <Section title={translated.tagPage.talksTitle}>
            <p>{translated.tagPage.talksDescription}</p>
            <TalkList talks={talks} />
          </Section>
        )}

        {sizeOf(projects) > 0 && (
          <Section title={translated.tagPage.projectsTitle}>
            <p>{translated.tagPage.projectsDescription}</p>
            <ProjectsList projects={projects} />
          </Section>
        )}
      </main>
    </>
  );
};
