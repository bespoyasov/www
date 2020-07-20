import React from "react";
import { UrlSlug } from "@shared/types";
import styles from "./Picture.module.css";

type ImageRelativePath = UrlSlug;
type AlternativeText = string;
type VisibleCaption = string;

type Props = {
  src: ImageRelativePath;
  alt: AlternativeText;
  caption?: VisibleCaption;
};

export const Picture: React.FC<Props> = ({ src, alt, caption, children }) => {
  return (
    <figure className={styles.picture}>
      <picture>
        <img src={src} alt={alt} />
        {children}
      </picture>
      {!!caption && <figcaption>{caption}</figcaption>}
    </figure>
  );
};
