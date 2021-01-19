import React from "react";
import Head from "next/head";
import { GetStaticProps } from "next";

import { Description } from "@components/Description";
import { Showcase } from "@components/Showcase";

import { Metadata } from "@domain/metadata";
import { projectsMetadata } from "@api/fetch";

type ProjectsProps = {
  projects: Metadata[];
};

export const getStaticProps: GetStaticProps<ProjectsProps> = async () => {
  return {
    props: {
      projects: await projectsMetadata(),
    },
  };
};

const Projects = ({ projects }: ProjectsProps) => {
  return (
    <>
      <Head>
        <title>Сделал</title>
        <Description>Что я наделал.</Description>
      </Head>
      <Showcase projects={projects} />
    </>
  );
};

export default Projects;
