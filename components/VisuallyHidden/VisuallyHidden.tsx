import { HtmlHTMLAttributes } from "react";
import { WithChildren } from "@domain/components";
import styles from "./VisuallyHidden.module.css";

type VisuallyHiddenProps = HtmlHTMLAttributes<HTMLElement> & {
  as?: keyof JSX.IntrinsicElements;
};

export const VisuallyHidden = ({
  as: Element = "span",
  children,
}: WithChildren<VisuallyHiddenProps>) => {
  return <Element className={styles.container}>{children}</Element>;
};
