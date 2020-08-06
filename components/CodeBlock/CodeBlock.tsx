import React from "react";
import styles from "./CodeBlock.module.css";

export const CodeBlock: React.FC = ({ children }) => {
  return <pre className={styles.container}>{children}</pre>;
};
