import Head from "next/head";
import { useRouter } from "next/router";
import { GetStaticProps, GetStaticPaths } from "next";

import { Description } from "@components/Description";
import { ProjectsList } from "@components/ProjectsList";
import { AllNotes } from "@components/Notes";
import { Section } from "@components/Section";

import { assureType } from "@shared/assureType";
import { UrlSlug } from "@shared/types";
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
  const notes = (await blogPostsMetadata()).filter(byTag);

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
        {sizeOf(projects) > 0 && (
          <Section title="Проекты">
            <ProjectsList projects={projects} />
          </Section>
        )}

        <Section title="Заметки">
          <AllNotes notes={notes} />
        </Section>
      </main>
    </>
  );
};

export default Tag;
