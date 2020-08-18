import React from "react";
import { Tag, TagKind } from "@domain/tags";
import { byTagValue } from "@shared/sort";
import { splitInto } from "@shared/splitInto";
import { TagLink } from "@components/TagLink";
import styles from "./AllTags.module.css";

export const AllTags: React.FC = () => {
  const allTags = Object.keys(Tag).sort(byTagValue);

  const columnsCount = 2;
  const columnsContent = splitInto(allTags, columnsCount);

  return (
    <div className={styles.section}>
      {columnsContent.map((tags, index) => (
        <ul className="reset" key={index}>
          {tags.map((tag: TagKind) => (
            <li key={tag}>
              <TagLink tag={tag} />
            </li>
          ))}
        </ul>
      ))}
    </div>
  );
};
