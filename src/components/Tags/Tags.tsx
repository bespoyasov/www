import { TagLink } from "@components/TagLink";
import { TagKind } from "@domain/tags/types";
import styles from "./Tags.module.css";

type TagsProps = {
  tags: List<TagKind>;
};

export const Tags = ({ tags }: TagsProps) => {
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
