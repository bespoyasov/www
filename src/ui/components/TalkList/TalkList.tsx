import type { Metadata } from "@core/metadata";
import { splitInto } from "@utils/splitInto";
import { Talk } from "@components/Talk";
import styles from "./TalkList.module.css";

type TalkListProps = {
  talks: List<Metadata>;
};

export const TalkList = ({ talks }: TalkListProps) => {
  const columnsCount = 2;
  const columns = splitInto(talks, columnsCount);

  return (
    <div className={styles.container}>
      {columns.map((talks, index) => (
        <ul className="reset" key={index}>
          {talks.map((talk) => (
            <li key={talk.slug}>
              <Talk talk={talk} />
            </li>
          ))}
        </ul>
      ))}
    </div>
  );
};
