import React, { HTMLAttributes } from "react";
import Link from "next/link";
import { classes } from "@shared/classes";
import { internal, external } from "./routes";
import styles from "./Nav.module.css";

export const Nav: React.FC<HTMLAttributes<HTMLElement>> = ({ className }) => {
  return (
    <nav className={classes(styles.nav, className)}>
      <ul>
        {internal.map(({ url, title }) => (
          <li key={title}>
            <Link href={url}>
              <a>{title}</a>
            </Link>
          </li>
        ))}

        <li className={styles.separator}>·</li>

        {external.map(({ url, title }) => (
          <li key={title}>
            <a href={url}>{title}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};
