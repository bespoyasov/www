import type { HTMLAttributes } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { classes } from "@utils/classes";

import { routes } from "./routes";
import { activeIf } from "./activeIf";
import styles from "./Nav.module.css";

export const Nav = ({ className }: HTMLAttributes<HTMLElement>) => {
  const { asPath: path } = useRouter();

  return (
    <nav className={classes(styles.nav, className)}>
      <ul>
        {routes.map(({ url, title }) => (
          <li key={title}>
            <Link href={url} className={activeIf(path.startsWith(url))}>
              {title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
