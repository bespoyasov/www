import React from "react";
import { ImageFileSource, ImageDescription } from "@domain/image";
import { withWebp } from "./withWebp";
import styles from "./Picture.module.css";

type PictureProps = {
  src: ImageFileSource;
  alt: ImageDescription;
};

export const Picture = ({ src, alt }: PictureProps) => {
  return (
    <picture className={styles.picture}>
      <source srcSet={withWebp(src)} type="image/webp" />
      <img src={src} alt={alt} loading="lazy" />
    </picture>
  );
};
