import Link from "next/link";
import { classes } from "@utils/classes";
import { Metadata } from "@domain/metadata";
import styles from "./List.module.css";

type ListProps = {
  notes: Metadata[];
};

export const List = ({ notes }: ListProps) => {
  return (
    <ul className={classes(styles.list, "reset")}>
      {notes.map(({ slug, title }) => {
        return (
          <li key={slug}>
            <Link href={slug}>
              <a>{title}</a>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};
