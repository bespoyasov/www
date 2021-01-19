import React from "react";
import { WithChildren } from "@domain/components";
import styles from "./Blockquote.module.css";

export const Blockquote = ({ children }: WithChildren) => {
  return <blockquote className={styles.blockquote}>{children}</blockquote>;
};
