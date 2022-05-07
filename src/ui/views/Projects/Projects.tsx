import Head from "next/head";

import { SummaryCard } from "@components/SummaryCard";
import { Description } from "@components/Description";
import { Showcase } from "@components/Showcase";

import { translated } from "@translation";
import type { ProjectsProps } from "./types";

export const Projects = ({ projects }: ProjectsProps) => {
  return (
    <>
      <Head>
        <title>{translated.projectsPage.title}</title>
        <Description>{translated.projectsPage.description}</Description>
        <SummaryCard />
      </Head>
      <Showcase projects={projects} />
    </>
  );
};
