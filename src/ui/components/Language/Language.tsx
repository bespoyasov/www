import type { HTMLAttributes } from "react";

import { VisuallyHidden } from "@components/VisuallyHidden";
import { matchesCurrent } from "@env/locale";
import { translated } from "@translation";
import { classes } from "@utils/classes";

import { languages } from "./languages";
import styles from "./Language.module.css";

export const Language = ({ className }: HTMLAttributes<HTMLElement>) => {
  const foreign = languages.filter(({ locale }) => !matchesCurrent(locale));

  return (
    <aside className={classes(styles.language, className)}>
      <VisuallyHidden>{translated.language.label}</VisuallyHidden>

      {foreign.map(({ url, locale }) => (
        <a key={url} href={url} className="text-color">
          {locale}
        </a>
      ))}
    </aside>
  );
};
