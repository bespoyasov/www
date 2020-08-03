import React from "react";
import { Metadata } from "@domain/metadata";
import { ProjectPreview } from "@components/ProjectPreview";
import styles from "./Showcase.module.css";

type ShowcaseProps = {
  projects: Metadata[];
};

export const Showcase: React.FC<ShowcaseProps> = ({ projects }) => {
  return (
    <main className={styles.showcase}>
      <h1>Все проекты</h1>
      <p>Сайты, приложения и книги, над которыми я успел поработать.</p>

      <ul className="reset">
        {projects.map((project) => (
          <li key={project.slug}>
            <ProjectPreview metadata={project} />
          </li>
        ))}
      </ul>
    </main>
  );
};
