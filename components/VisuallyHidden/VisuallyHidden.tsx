import React, { HtmlHTMLAttributes } from "react";
import styles from "./VisuallyHidden.module.css";

export const VisuallyHidden: React.FC<HtmlHTMLAttributes<HTMLSpanElement>> = ({ children }) => {
  return <span className={styles.container}>{children}</span>;
};
