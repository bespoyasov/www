import React, { HtmlHTMLAttributes } from "react";
import styles from "./VisuallyHidden.module.css";

type Props = HtmlHTMLAttributes<HTMLElement> & {
  element?: keyof JSX.IntrinsicElements;
};

export const VisuallyHidden: React.FC<Props> = ({ element: Element = "span", children }) => {
  return <Element className={styles.container}>{children}</Element>;
};
