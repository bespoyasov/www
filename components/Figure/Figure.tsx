import React from "react";
import { classes } from "@shared/classes";
import { Picture } from "@components/Picture";
import { FigureProps } from "./types";
import { isLimited } from "./isLimited";
import styles from "./Figure.module.css";

const { figure, limited } = styles;

export const Figure: React.FC<FigureProps> = ({ src, alt, cite, caption }) => {
  return (
    <figure className={classes(figure, isLimited(src) && limited)}>
      <a href={cite}>
        <Picture src={src} alt={alt} />
      </a>
      <figcaption>{caption || alt}</figcaption>
    </figure>
  );
};
