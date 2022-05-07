import type { WithChildren } from "@extensions/components";
import styles from "./Blockquote.module.css";

export const Blockquote = ({ children }: WithChildren) => {
  return <blockquote className={styles.blockquote}>{children}</blockquote>;
};
