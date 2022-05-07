import Head from "next/head";
import { GetStaticProps, GetStaticPaths } from "next";

import { PostContents } from "@domain/post";
import { Metadata as MetadataType } from "@domain/metadata";
import { projectsMetadata, projectsNames, fetchProject } from "@network/fetch";

import { Post } from "@components/Post";
import { Metadata } from "@components/Metadata";
import { Feedback } from "@components/Feedback";
import { Adjacent } from "@components/Adjacent";
import { Description } from "@components/Description";
import { SummaryCard } from "@components/SummaryCard";

type ProjectProps = {
  contents: PostContents;
  metadata: MetadataType;
  prevPost: Nullable<MetadataType>;
  nextPost: Nullable<MetadataType>;
};

export const getStaticProps: GetStaticProps<ProjectProps> = async (context) => {
  const postId = String(context.params.id);

  const content = await fetchProject(postId);
  const projects = projectsMetadata();
  const index = projects.findIndex((project) => project.slug.endsWith(postId));

  return {
    props: {
      metadata: projects[index],
      prevPost: projects[index + 1] ?? null,
      nextPost: projects[index - 1] ?? null,
      contents: content,
    },
  };
};

export const getStaticPaths: GetStaticPaths = () => {
  const projects = projectsNames();
  const paths = projects.map((id) => ({ params: { id } }));
  return { paths, fallback: false };
};

const Project = ({ metadata, prevPost, nextPost, contents }: ProjectProps) => {
  return (
    <>
      <Head>
        <title>{metadata.title}</title>
        <Description>{metadata.description}</Description>
        <SummaryCard metadata={metadata} />
      </Head>

      <Post content={contents} />
      <Feedback metadata={metadata} />
      <Metadata metadata={metadata} />
      <Adjacent prev={prevPost} next={nextPost} />
    </>
  );
};

export default Project;
