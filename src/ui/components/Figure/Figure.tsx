import type { ImageFileSource, ImageDescription } from "@core/image";

import { classes } from "@utils/classes";
import { Picture } from "@components/Picture";
import { isLimited } from "./isLimited";
import styles from "./Figure.module.css";

const { figure, limited } = styles;

type CitationSource = AbsoluteUrl;
type VisibleCaption = string;

type FigureProps = {
  src: ImageFileSource;
  alt: ImageDescription;
  cite?: CitationSource;
  caption?: VisibleCaption;
};

export const Figure = ({ src, alt, cite, caption }: FigureProps) => {
  return (
    <figure className={classes(figure, isLimited(src) && limited)}>
      <a href={cite}>
        <Picture src={src} alt={alt} />
      </a>
      <figcaption>{caption || alt}</figcaption>
    </figure>
  );
};
