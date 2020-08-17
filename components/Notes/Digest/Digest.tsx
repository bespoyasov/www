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
        <List notes={notes.slice(0, 15)} />
      </div>

      <div>
        <Tagged with="dev" from={notes} />
        <Tagged with="travel" from={notes} />
      </div>

      <div>
        <Tagged with="books" from={notes} />
        <Tagged with="opinion" from={notes} />
      </div>

      <div>
        <Tagged with="process" from={notes} />
        <Tagged with="brain" from={notes} />
      </div>
    </div>
  );
};
