import Head from "next/head";
import { useRouter } from "next/router";
import { GetStaticProps, GetStaticPaths } from "next";

import { Metadata as MetadataType } from "@domain/metadata";
import { projectsMetadata, projectsNames } from "@api/fetch";

import { PostLayout } from "@layouts/Post";
import { Metadata } from "@components/Metadata";
import { Feedback } from "@components/Feedback";
import { Adjacent } from "@components/Adjacent";
import { Description } from "@components/Description";

type ProjectProps = {
  metadata: MetadataType;
  prevPost: Nullable<MetadataType>;
  nextPost: Nullable<MetadataType>;
};

export const getStaticProps: GetStaticProps<ProjectProps> = async (context) => {
  const { id } = context.params;
  const projects = await projectsMetadata();
  const index = projects.findIndex((project) => project.slug.endsWith(String(id)));

  return {
    props: {
      metadata: projects[index],
      prevPost: projects[index - 1] ?? null,
      nextPost: projects[index + 1] ?? null,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const projects = await projectsNames();
  const paths = projects.map((id) => ({ params: { id } }));
  return { paths, fallback: false };
};

const Project = ({ metadata, prevPost, nextPost }: ProjectProps) => {
  const { title, description } = metadata;
  const { query } = useRouter();
  const PostContents = require(`./${query.id}.mdx`).default;

  return (
    <PostLayout>
      <Head>
        <title>{title}</title>
        <Description>{description}</Description>
      </Head>
      <main>
        <PostContents />
      </main>

      <Metadata metadata={metadata} />
      <Feedback metadata={metadata} />
      <Adjacent prev={prevPost} next={nextPost} />
    </PostLayout>
  );
};

export default Project;
