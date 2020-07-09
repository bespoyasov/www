import React from "react";
import styles from "./Blockquote.module.css";

export const Blockquote: React.FC = ({ children }) => {
  return <blockquote className={styles.blockquote}>{children}</blockquote>;
};
