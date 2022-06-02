import type { HTMLAttributes } from "react";
import type { WithChildren } from "@extensions/components";
import styles from "./InlineCode.module.css";

type InlineCodeProps = WithChildren<HTMLAttributes<HTMLElement>>;

export const InlineCode = ({ children, className }: InlineCodeProps) => {
  return <code className={className ?? styles.code}>{children}</code>;
};
