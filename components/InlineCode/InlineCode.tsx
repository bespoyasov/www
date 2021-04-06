import { WithChildren } from "@domain/components";
import styles from "./InlineCode.module.css";

export const InlineCode = ({ children }: WithChildren) => {
  return <code className={styles.code}>{children}</code>;
};
