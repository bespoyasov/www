import { GetStaticProps } from "next";

import { Metadata } from "@domain/metadata";
import { projectsMetadata } from "@network/fetch";

import { Projects as ProjectsPage } from "@views/Projects";

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

export default ProjectsPage;
