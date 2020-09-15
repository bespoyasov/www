import React from "react";
import { classes } from "@shared/classes";
import { FigureProps } from "./types";
import { isLimited } from "./isLimited";
import { withWebp } from "./withWebp";
import styles from "./Picture.module.css";

const { picture, limited } = styles;

export const Figure: React.FC<FigureProps> = ({ src, alt, cite, caption }) => {
  return (
    <figure className={classes(picture, isLimited(src) && limited)}>
      <a href={cite}>
        <picture>
          <source srcSet={withWebp(src)} type="image/webp" />
          <img src={src} alt={alt} loading="lazy" />
        </picture>
      </a>
      <figcaption>{caption || alt}</figcaption>
    </figure>
  );
};
