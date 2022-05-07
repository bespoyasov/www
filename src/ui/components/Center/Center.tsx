import type { WithChildren } from "@extensions/components";
import styles from "./Center.module.css";

export const Center = ({ children }: WithChildren) => {
  return <div className={styles.center}>{children}</div>;
};
