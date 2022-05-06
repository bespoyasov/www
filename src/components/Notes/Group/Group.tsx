import { sizeOf } from "@utils/sizeOf";
import { splitInto } from "@utils/splitInto";
import { Metadata } from "@domain/metadata";
import { List } from "@components/Notes/List";
import styles from "./Group.module.css";

type GroupProps = {
  notes: Metadata[];
};

export const Group = ({ notes }: GroupProps) => {
  const minNotesInColumn = 5;
  const columnsCount = sizeOf(notes) >= minNotesInColumn ? 2 : 1;
  const columnsContent = splitInto(notes, columnsCount);

  return (
    <div className={styles.section}>
      {columnsContent.map((perColumn, index) => {
        return <List notes={perColumn} key={index} />;
      })}
    </div>
  );
};
