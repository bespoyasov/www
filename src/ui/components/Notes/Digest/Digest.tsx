import { Metadata } from "@domain/metadata";
import { Tagged } from "@components/Notes/Tagged";
import { List } from "@components/Notes/List";
import styles from "./Digest.module.css";

type DigestProps = {
  notes: Metadata[];
};

export const Digest = ({ notes }: DigestProps) => {
  return (
    <div className={styles.section}>
      <div>
        <h3>Последние заметки</h3>
        <List notes={notes.slice(0, 8)} />
      </div>

      <div>
        <Tagged with="dev" from={notes} />
        <Tagged with="travel" from={notes} />
      </div>

      <div>
        <Tagged with="talks" from={notes} />
        <Tagged with="books" from={notes} />
      </div>

      <div>
        <Tagged with="process" from={notes} />
        <Tagged with="design" from={notes} />
      </div>
    </div>
  );
};
