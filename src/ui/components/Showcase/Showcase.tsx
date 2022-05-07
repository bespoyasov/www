import type { Metadata } from "@core/metadata";

import { ProjectsList } from "@components/ProjectsList";
import { translated } from "@translation";
import styles from "./Showcase.module.css";

type ShowcaseProps = {
  projects: List<Metadata>;
};

export const Showcase = ({ projects }: ShowcaseProps) => {
  return (
    <main className={styles.showcase}>
      <h1>{translated.showcase.heading}</h1>
      <p>{translated.showcase.description}</p>
      <ProjectsList projects={projects} />
    </main>
  );
};
