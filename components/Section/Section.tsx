import React from "react";
import styles from "./Section.module.css";

type SectionProps = {
  title: string;
};

export const Section: React.FC<SectionProps> = ({ title, children }) => {
  return (
    <section className={styles.section}>
      <h2 className="title">{title}</h2>
      {children}
    </section>
  );
};
