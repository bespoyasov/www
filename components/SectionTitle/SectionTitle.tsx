import React, { AnchorHTMLAttributes } from "react";
import Link from "next/link";
import styles from "./SectionTitle.module.css";

export const SectionTitle: React.FC<AnchorHTMLAttributes<HTMLAnchorElement>> = ({ href, children }) => {
  return (
    <h2 className={styles.title}>
      <Link href={href}>
        <a className="text-color">{children}</a>
      </Link>
    </h2>
  );
};
