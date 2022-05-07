import { WithChildren } from "@extensions/components";
import styles from "./Highlight.module.css";

export const Highlight = ({ children }: WithChildren) => {
  return <mark className={styles.highlight}>{children}</mark>;
};
