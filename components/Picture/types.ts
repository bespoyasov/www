import { RelativePath, AbsoluteUrl } from "@shared/types";

export type ImageFileSource = RelativePath;
type CitationSource = AbsoluteUrl;
type AlternativeText = string;
type VisibleCaption = string;

export type PictureProps = {
  src: ImageFileSource;
  alt: AlternativeText;
  caption?: VisibleCaption;
  cite?: CitationSource;
};
