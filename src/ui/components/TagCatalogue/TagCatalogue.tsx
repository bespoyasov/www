import { Tag, TagKind } from "@domain/tags";
import { byTagValue } from "@utils/sort";
import { splitInto } from "@utils/splitInto";
import { TagLink } from "@components/TagLink";
import styles from "./AllTags.module.css";

export const TagCatalogue = () => {

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
