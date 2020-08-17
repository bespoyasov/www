import React from "react";
import { Metadata } from "@domain/metadata";
import { Preview } from "@components/Preview";
import styles from "./ProjectsList.module.css";
import { classes } from "@shared/classes";

type ProjectsListProps = {
  projects: Metadata[];
};

export const ProjectsList: React.FC<ProjectsListProps> = ({ projects }) => {
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
