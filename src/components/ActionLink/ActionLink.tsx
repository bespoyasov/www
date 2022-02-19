import type { AnchorHTMLAttributes } from "react";
import type { WithChildren } from "@extensions/components";
import styles from "./ActionLink.module.css";

type ActionLinkProps = WithChildren<AnchorHTMLAttributes<HTMLAnchorElement>>;

export const ActionLink = ({ children, href }: ActionLinkProps) => {
  return (
    <a className={styles.link} href={href}>
      {children}
    </a>
  );
};
