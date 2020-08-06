import React from "react";
import { classes } from "@shared/classes";
import { PictureProps } from "./types";
import { isLimited } from "./isLimited";
import styles from "./Picture.module.css";

const { picture, limited } = styles;

export const Picture: React.FC<PictureProps> = ({ src, alt, cite, caption }) => {
  return (
    <figure className={classes(picture, isLimited(src) && limited)}>
      <a href={cite}>
        <picture>
          <img src={src} alt={alt} loading="lazy" />
        </picture>
      </a>
      <figcaption>{caption || alt}</figcaption>
    </figure>
  );
};
