import type { GetStaticProps } from "next";
import type { ProjectsProps } from "@views/Projects";

import { projectsMetadata } from "@_network/metadata";
import { Projects as ProjectsPage } from "@views/Projects";

export const getStaticProps: GetStaticProps<ProjectsProps> = () => {
  return {
    props: {
      projects: projectsMetadata(),
    },
  };
};

export default ProjectsPage;
