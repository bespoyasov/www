import React from "react";
import { splitInto } from "@shared/splitInto";
import { Metadata } from "@domain/metadata";
import { List } from "@components/Notes/List";
import styles from "./All.module.css";

type AllNotesProps = {
  notes: Metadata[];
};

export const AllNotes: React.FC<AllNotesProps> = ({ notes }) => {
  const columnsCount = 2;
  const columnsContent = splitInto(notes, columnsCount);

  return (
    <div className={styles.section}>
      {columnsContent.map((perColumn, index) => {
        return <List notes={perColumn} key={index} />;
      })}
    </div>
  );
};
