import type { Metadata } from "@core/metadata";

import { Preview } from "@components/Preview";
import styles from "./ProjectsList.module.css";
import { classes } from "@utils/classes";

type ProjectsListProps = {
  projects: List<Metadata>;
};

export const ProjectsList = ({ projects }: ProjectsListProps) => {
  return (
    <ul className={classes("reset", styles.list)}>
      {projects.map((project) => (
        <li key={project.slug}>
          <Preview metadata={project} />
        </li>
      ))}
    </ul>
  );
};
