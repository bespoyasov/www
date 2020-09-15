import React from "react";
import { classes } from "@shared/classes";
import { AbsoluteUrl } from "@shared/types";
import { ImageSource, ImageDescription } from "@domain/image";
import { Picture } from "@components/Picture";
import { isLimited } from "./isLimited";
import styles from "./Figure.module.css";

const { figure, limited } = styles;

type CitationSource = AbsoluteUrl;
type VisibleCaption = string;

type FigureProps = {
  src: ImageSource;
  alt: ImageDescription;
  cite?: CitationSource;
  caption?: VisibleCaption;
};

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
