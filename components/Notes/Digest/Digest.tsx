import React from "react";
import { Metadata } from "@domain/metadata";
import { Tagged } from "@components/Notes/Tagged";
import { List } from "@components/Notes/List";
import styles from "./Digest.module.css";

type DigestProps = {
  notes: Metadata[];
};

export const Digest: React.FC<DigestProps> = ({ notes }) => {
  return (
    <div className={styles.section}>
      <div>
        <h3>Последние заметки</h3>
        <List notes={notes.slice(0, 20)} />
      </div>

      <div>
        <Tagged with="Dev" from={notes} />
        <Tagged with="Opinion" from={notes} />
      </div>

      <div>
        <Tagged with="Books" from={notes} />
        <Tagged with="Travel" from={notes} />
      </div>

      <div>
        <Tagged with="Process" from={notes} />
        <Tagged with="Brain" from={notes} />
      </div>
    </div>
  );
};
