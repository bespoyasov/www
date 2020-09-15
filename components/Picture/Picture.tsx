import React from "react";
import { ImageSource, ImageDescription } from "@domain/image";
import { withWebp } from "./withWebp";
import styles from "./Picture.module.css";

type PictureProps = {
  src: ImageSource;
  alt: ImageDescription;
};

export const Picture: React.FC<PictureProps> = ({ src, alt }) => {
  return (
    <picture className={styles.picture}>
      <source srcSet={withWebp(src)} type="image/webp" />
      <img src={src} alt={alt} loading="lazy" />
    </picture>
  );
};
