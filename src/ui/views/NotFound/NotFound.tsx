import styles from "./NotFound.module.css";

export const NotFound = () => {
  return (
    <main className={styles.container}>
      <article>
        <h1>404</h1>
        <p>Упс! Такой страницы нет :–(</p>
      </article>
    </main>
  );
};
