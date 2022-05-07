import type { HTMLAttributes } from "react";
import { useRouter } from "next/router";

import { author } from "@core/author";
import { onMainPage } from "@utils/onMainPage";
import { classes } from "@utils/classes";
import styles from "./Logo.module.css";
import { translated } from "@translation";

export const Logo = ({ className }: HTMLAttributes<HTMLSpanElement>) => {
  const { pathname } = useRouter();
  const Header = onMainPage(pathname) ? "h1" : "span";

  return (
    <span className={classes(styles.logo, className)}>
      <Header className={styles.label}>{author.name}</Header>

      <div className={styles.photo}>
        <picture>
          <source
            type="image/avif"
            draggable="false"
            srcSet="
              /images/static/photo-2022-02-22.avif    1x,
              /images/static/photo-2022-02-22@2x.avif 2x,
              /images/static/photo-2022-02-22@3x.avif 3x
            "
          />

          <source
            type="image/webp"
            draggable="false"
            srcSet="
              /images/static/photo-2022-02-22.webp    1x,
              /images/static/photo-2022-02-22@2x.webp 2x,
              /images/static/photo-2022-02-22@3x.webp 3x
            "
          />

          <img
            alt={translated.logo.altText}
            draggable="false"
            srcSet="
              /images/static/photo-2022-02-22.png    1x,
              /images/static/photo-2022-02-22@2x.png 2x,
              /images/static/photo-2022-02-22@3x.png 3x
            "
            src="/images/static/photo-2022-02-22.png"
          />
        </picture>
      </div>
    </span>
  );
};
