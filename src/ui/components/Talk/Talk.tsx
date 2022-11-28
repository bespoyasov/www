import Link from "next/link";

import type { Metadata as MetadataType } from "@core/metadata";
import { Metadata } from "@components/Metadata";
import styles from "./Talk.module.css";

type TalkProps = {
  talk: MetadataType;
};

export const Talk = ({ talk }: TalkProps) => {
  const { slug, title, description } = talk;

  return (
    <article className={styles.talk}>
      <h3>
        <Link href={slug} className="text-color">
          {title}
        </Link>
      </h3>

      <p>{description}</p>
      <Metadata metadata={talk} />
    </article>
  );
};
