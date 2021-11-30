import Head from "next/head";
import { GetStaticProps } from "next";

import { SummaryCard } from "@components/SummaryCard";
import { Description } from "@components/Description";
import { Showcase } from "@components/Showcase";

import { Metadata } from "@domain/metadata";
import { projectsMetadata } from "@api/fetch";

type ProjectsProps = {
  projects: Metadata[];
};

export const getStaticProps: GetStaticProps<ProjectsProps> = () => {
  return {
    props: {
      projects: projectsMetadata(),
    },
  };
};

const Projects = ({ projects }: ProjectsProps) => {
  return (
    <>
      <Head>
        <title>Сделал</title>
        <Description>
          Последние сайты, приложения, книги и образовательные проекты, над которыми я работал.
        </Description>
        <SummaryCard />
      </Head>
      <Showcase projects={projects} />
    </>
  );
};

export default Projects;
