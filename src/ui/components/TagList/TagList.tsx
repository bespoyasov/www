import type { TagKind } from "@core/tags";
import { TagLink } from "@components/TagLink";
import styles from "./TagList.module.css";

type TagListProps = {
  tags: List<TagKind>;
};

export const TagList = ({ tags }: TagListProps) => {
  return (
    <menu className={styles.tags}>
      <ul>
        {tags.map((tag) => (
          <li key={tag}>
            <TagLink tag={tag} />
          </li>
        ))}
      </ul>
    </menu>
  );
};
