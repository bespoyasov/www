import React from "react";
import styles from "./Table.module.css";

export const Table: React.FC = ({ children }) => {
  return (
    <div className={styles.container}>
      <table>{children}</table>
    </div>
  );
};
