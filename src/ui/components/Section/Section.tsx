import { WithChildren } from "@extensions/components";
import styles from "./Section.module.css";

type SectionProps = {
  title: LocalizedString;
};

export const Section = ({ title, children }: WithChildren<SectionProps>) => {
  return (
    <section className={styles.section}>
      <h2 className="title">{title}</h2>
      {children}
    </section>
  );
};
