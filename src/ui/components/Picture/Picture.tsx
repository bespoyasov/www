import type { ImageFileSource, ImageDescription } from "@core/image";

import { withWebp, withAvif } from "./withExtension";
import styles from "./Picture.module.css";

type PictureProps = {
  src: ImageFileSource;
  alt: ImageDescription;
};

export const Picture = ({ src, alt }: PictureProps) => {
  return (
    <picture className={styles.picture}>
      <source srcSet={withAvif(src)} type="image/avif" />
      <source srcSet={withWebp(src)} type="image/webp" />
      <img src={src} alt={alt} decoding="async" />
    </picture>
  );
};
