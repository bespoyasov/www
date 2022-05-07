import Head from "next/head";

import { SummaryCard } from "@components/SummaryCard";
import { Description } from "@components/Description";
import { Showcase } from "@components/Showcase";

import type { ProjectsProps } from "./types";

export const Projects = ({ projects }: ProjectsProps) => {
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
