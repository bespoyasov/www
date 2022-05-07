import type { WithChildren } from "@extensions/components";
import styles from "./SideNote.module.css";

export const SideNote = ({ children }: WithChildren) => {
  return <aside className={styles.aside}>{children}</aside>;
};
