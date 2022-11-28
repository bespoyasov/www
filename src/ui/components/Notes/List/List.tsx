import Link from "next/link";

import type { Metadata } from "@core/metadata";
import { classes } from "@utils/classes";
import styles from "./List.module.css";

type ListProps = {
  notes: List<Metadata>;
};

export const List = ({ notes }: ListProps) => {
  return (
    <ul className={classes(styles.list, "reset")}>
      {notes.map(({ slug, title }) => (
        <li key={slug}>
          <Link href={slug}>{title}</Link>
        </li>
      ))}
    </ul>
  );
};
