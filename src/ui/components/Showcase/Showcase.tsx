import type { Metadata } from "@core/metadata";

import { ProjectsList } from "@components/ProjectsList";
import styles from "./Showcase.module.css";

type ShowcaseProps = {
  projects: Metadata[];
};

export const Showcase = ({ projects }: ShowcaseProps) => {
  return (
    <main className={styles.showcase}>
      <h1>Проекты</h1>
      <p>Последние сайты, приложения, книги и образовательные проекты, над которыми я работал.</p>
      <ProjectsList projects={projects} />
    </main>
  );
};
