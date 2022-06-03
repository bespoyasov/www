import type { HTMLAttributes } from "react";
import type { WithChildren } from "@extensions/components";
import styles from "./InlineCode.module.css";

type CodeProps = WithChildren<HTMLAttributes<HTMLElement>>;

export const Code = ({ children, className: blockCode }: CodeProps) => {
  return <code className={blockCode ?? styles.inlineCode}>{children}</code>;
};
