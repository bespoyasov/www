import React from "react";
import { UrlSlug, AbsoluteUrl } from "@shared/types";
import styles from "./Picture.module.css";

type ImageRelativePath = UrlSlug;
type AlternativeText = string;
type VisibleCaption = string;
type CitationSource = AbsoluteUrl;

type Props = {
  src: ImageRelativePath;
  alt: AlternativeText;
  caption?: VisibleCaption;
  cite?: CitationSource;
};

export const Picture: React.FC<Props> = ({ src, alt, cite, caption }) => {
  return (
    <figure className={styles.picture}>
      <a href={cite}>
        <picture>
          <img src={src} alt={alt} />
        </picture>
      </a>
      {!!caption && <figcaption>{caption}</figcaption>}
    </figure>
  );
};
