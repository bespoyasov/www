import type { Metadata } from "@core/metadata";

import { classes } from "@utils/classes";
import { Preview } from "@components/Preview";
import styles from "./ProjectsList.module.css";

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
