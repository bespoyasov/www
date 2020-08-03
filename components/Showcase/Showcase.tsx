import React from "react";
import { Metadata } from "@domain/metadata";
import { Preview } from "@components/Preview";
import { Grid } from "@components/Grid";
import styles from "./Showcase.module.css";

type ShowcaseProps = {
  projects: Metadata[];
};

export const Showcase: React.FC<ShowcaseProps> = ({ projects }) => {
  return (
    <main className={styles.showcase}>
      <h1>Все проекты</h1>
      <p>Сайты, приложения и книги, над которыми я успел поработать.</p>

      <Grid element="ul">
        {projects.map((project) => (
          <li key={project.slug}>
            <Preview metadata={project} />
          </li>
        ))}
      </Grid>
    </main>
  );
};
