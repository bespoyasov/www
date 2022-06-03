import type { HTMLAttributes } from "react";
import type { WithChildren } from "@extensions/components";
import styles from "./InlineCode.module.css";

type CodeProps = WithChildren<HTMLAttributes<HTMLElement>>;

export const Code = ({ children, className }: CodeProps) => {
  return <code className={className ?? styles.code}>{children}</code>;
};
