import React from "react";
import styles from "./Stretch.module.css";

export const Stretch: React.FC = ({ children }) => {
  return <div className={styles.container}>{children}</div>;
};
