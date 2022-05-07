import { translated } from "@translation";
import styles from "./NotFound.module.css";

export const NotFound = () => {
  return (
    <main className={styles.container}>
      <article>
        <h1>{translated.notFound.title}</h1>
        <p>{translated.notFound.description}</p>
      </article>
    </main>
  );
};
