import Head from "next/head";
import { useRouter } from "next/router";
import { GetStaticProps, GetStaticPaths } from "next";

import { VisuallyHidden } from "@components/VisuallyHidden";
import { Description } from "@components/Description";
import { ProjectsList } from "@components/ProjectsList";
import { Section } from "@components/Section";
import { Anthology } from "@components/Notes";

import { assureType } from "@shared/assureType";
import { sizeOf } from "@shared/sizeOf";
import { withTag } from "@shared/filter";
import { Metadata } from "@domain/metadata";
import { Tag as TagEnum, TagKind } from "@domain/tags";
import { projectsMetadata, blogPostsMetadata } from "@api/fetch";

type TagProps = {
  projects: Metadata[];
  notes: Metadata[];
};

function excludeTravel(tag: TagKind): boolean {
  return tag !== "travel";
}

function pathFromTag(tag: TagKind): UrlSlug {
  return `/tag/${tag}`;
}

export const getStaticProps: GetStaticProps<TagProps> = async ({ params }) => {
  const desired = assureType<TagKind>(params.id);
  const byTag = withTag(desired);

  const projects = (await projectsMetadata()).filter(byTag);
  const notes = blogPostsMetadata().filter(byTag);

  return {
    props: {
      projects,
      notes,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = Object.keys(TagEnum).filter(excludeTravel).map(pathFromTag);
  return { paths, fallback: false };
};

const Tag = ({ projects, notes }: TagProps) => {
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

export default Tag;
