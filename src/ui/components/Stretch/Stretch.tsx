import type { WithChildren } from "@extensions/components";
import styles from "./Stretch.module.css";

export const Stretch = ({ children }: WithChildren) => {
  return <div className={styles.container}>{children}</div>;
};
