import { WithChildren } from "@extensions/components";
import styles from "./CodeBlock.module.css";

export const CodeBlock = ({ children }: WithChildren) => {
  return <pre className={styles.container}>{children}</pre>;
};
