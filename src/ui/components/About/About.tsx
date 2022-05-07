import { VisuallyHidden } from "@components/VisuallyHidden";
import { translated } from "@translation";

import styles from "./About.module.css";

export const About = () => {
  return (
    <main className={styles.about}>
      <VisuallyHidden as="h2">{translated.about.heading}</VisuallyHidden>

      <p>{translated.about.introduction}</p>
      <p>{translated.about.projects}</p>
      <p>{translated.about.blogging}</p>
      <p>{translated.about.teaching}</p>
    </main>
  );
};
