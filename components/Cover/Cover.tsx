import React from "react";
import { UrlSlug, RelativePath } from "@shared/types";
import { Metadata } from "@domain/metadata";

type ProjectSlug = UrlSlug;
type ImageSource = RelativePath;

function composeSource(slug: ProjectSlug): ImageSource {
  return ["/img", slug, "/cover.png"].join("");
}

type CoverProps = {
  for: Metadata;
};

export const Cover: React.FC<CoverProps> = ({ for: entity }) => {
  const { slug, title } = entity;
  return <img src={composeSource(slug)} alt={title} />;
};
