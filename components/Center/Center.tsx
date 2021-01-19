import React from "react";
import { WithChildren } from "@domain/components";
import styles from "./Center.module.css";

export const Center = ({ children }: WithChildren) => {
  return <div className={styles.center}>{children}</div>;
};
