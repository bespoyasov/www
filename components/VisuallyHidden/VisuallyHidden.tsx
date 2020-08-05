import React, { HtmlHTMLAttributes } from "react";
import styles from "./VisuallyHidden.module.css";

type VisuallyHiddenProps = HtmlHTMLAttributes<HTMLElement> & {
  as?: keyof JSX.IntrinsicElements;
};

export const VisuallyHidden: React.FC<VisuallyHiddenProps> = ({
  as: Element = "span",
  children,
}) => {
  return <Element className={styles.container}>{children}</Element>;
};
