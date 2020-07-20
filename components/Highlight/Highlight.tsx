import React from "react";
import styles from "./Highlight.module.css";

export const Highlight: React.FC = ({ children }) => {
  return <mark className={styles.highlight}>{children}</mark>;
};
