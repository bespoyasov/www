import type { WithChildren } from "@extensions/components";
import styles from "./InlineCode.module.css";

export const InlineCode = ({ children }: WithChildren) => {
  return <code className={styles.code}>{children}</code>;
};
