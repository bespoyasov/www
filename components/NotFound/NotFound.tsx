import React from "react";
import styles from "./NotFound.module.css";

export const NotFound: React.FC = () => {
  return (
    <main className={styles.container}>
      <article>
        <h1>404</h1>
        <p>Упс! Такой страницы нет :–(</p>
      </article>
    </main>
  );
};
