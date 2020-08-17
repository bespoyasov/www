import React from "react";
import { Metadata } from "@domain/metadata";
import { ProjectsList } from "@components/ProjectsList";
import styles from "./Showcase.module.css";

type ShowcaseProps = {
  projects: Metadata[];
};

export const Showcase: React.FC<ShowcaseProps> = ({ projects }) => {
  return (
    <main className={styles.showcase}>
      <h1>Все проекты</h1>
      <p>Последние сайты, приложения и книги, над которыми я работал.</p>
      <ProjectsList projects={projects} />
    </main>
  );
};
