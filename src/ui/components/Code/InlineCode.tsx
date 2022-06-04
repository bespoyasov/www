import type { WithChildren } from "@extensions/components";
import styles from "./InlineCode.module.css";

export const Code = ({ children }: WithChildren) => {
  return <code className={styles.code}>{children}</code>;
};
