import React from "react";
import { UrlSlug, RelativePath } from "@shared/types";
import { Metadata } from "@domain/metadata";

type ProjectSlug = UrlSlug;
type ImageSource = RelativePath;

function composeSource(slug: ProjectSlug): ImageSource {
  return ["/img", slug, "/cover.png"].join("");
}

type CoverProps = {
  metadata: Metadata;
};

export const Cover: React.FC<CoverProps> = ({ metadata }) => {
  const { slug, title } = metadata;
  return <img src={composeSource(slug)} alt={title} />;
};
