import React from "react";
import { WithChildren } from "@domain/components";
import styles from "./Table.module.css";

export const Table = ({ children }: WithChildren) => {
  return (
    <div className={styles.container}>
      <table>{children}</table>
    </div>
  );
};
