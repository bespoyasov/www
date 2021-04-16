import { Metadata } from "@domain/metadata";
import { VisuallyHidden } from "@components/VisuallyHidden";
import { createLinksList } from "./createLinksList";
import styles from "./Feedback.module.css";

type FeedbackProps = {
  metadata: Metadata;
};

export const Feedback = ({ metadata }: FeedbackProps) => {
  const links = createLinksList(metadata);

  return (
    <article className={styles.feedback}>
      <VisuallyHidden as="h2">Если понравился пост</VisuallyHidden>
      <ul>
        {links.map(({ label, url }) => (
          <li key={label}>
            <a className="text-color" href={url}>
              {label}
            </a>
          </li>
        ))}
      </ul>
    </article>
  );
};
