import React from "react";
import Link from "next/link";
import { List } from "@shared/types";
import { Tag as TagEnum, Tags as TagsType } from "@domain/tags/types";
import styles from "./Tags.module.css";

type Props = {
  tags: List<TagsType>;
};

export const Tags: React.FC<Props> = ({ tags }) => {
  return (
    <menu className={styles.tags}>
      <ul>
        {tags.map((tag) => (
          <li key={tag}>
            <Link href="/tag/[tag]" as={`/tag/${tag.toLowerCase()}`}>
              <a className="text-color">{TagEnum[tag]}</a>
            </Link>
          </li>
        ))}
      </ul>
    </menu>
  );
};
