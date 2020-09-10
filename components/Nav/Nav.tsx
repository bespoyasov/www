import React, { HTMLAttributes } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { classes } from "@shared/classes";
import { internal, external } from "./routes";
import { activeIf } from "./activeIf";
import styles from "./Nav.module.css";

export const Nav: React.FC<HTMLAttributes<HTMLElement>> = ({ className }) => {
  const { asPath: path } = useRouter();

  return (
    <nav className={classes(styles.nav, className)}>
      <ul>
        {internal.map(({ url, title }) => (
          <li key={title}>
            <Link href={url}>
              <a className={activeIf(path.includes(url))}>{title}</a>
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
