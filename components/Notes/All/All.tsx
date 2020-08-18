import React from "react";
import { sizeOf } from "@shared/sizeOf";
import { splitInto } from "@shared/splitInto";
import { Metadata } from "@domain/metadata";
import { List } from "@components/Notes/List";
import styles from "./All.module.css";

type AllNotesProps = {
  notes: Metadata[];
};

export const AllNotes: React.FC<AllNotesProps> = ({ notes }) => {
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
