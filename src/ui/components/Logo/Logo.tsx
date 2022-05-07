import { HTMLAttributes } from "react";
import { useRouter } from "next/router";
import { onMainPage } from "@utils/onMainPage";
import { classes } from "@utils/classes";
import styles from "./Logo.module.css";

export const Logo = ({ className }: HTMLAttributes<HTMLSpanElement>) => {
  const { pathname } = useRouter();
  const Header = onMainPage(pathname) ? "h1" : "span";

  return (
    <span className={classes(styles.logo, className)}>
      <Header className={styles.label}>Саша Беспоясов</Header>

      <div className={styles.photo}>
        <picture>
          <source
            type="image/webp"
            draggable="false"
            srcSet="
              /img/common/photo-2022-02-22.webp    1x,
              /img/common/photo-2022-02-22@2x.webp 2x,
              /img/common/photo-2022-02-22@3x.webp 3x
            "
          />

          <img
            alt="Фотография автора."
            draggable="false"
            srcSet="
              /img/common/photo-2022-02-22.png    1x,
              /img/common/photo-2022-02-22@2x.png 2x,
              /img/common/photo-2022-02-22@3x.png 3x
            "
            src="/img/common/photo-2022-02-22.png"
          />
        </picture>
      </div>
    </span>
  );
};
