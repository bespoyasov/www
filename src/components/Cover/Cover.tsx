import { ImageExtension } from "@domain/image";
import { Metadata } from "@domain/metadata";
import { Picture } from "@components/Picture";
import { imageSourceFor } from "./imageSourceFor";

type CoverProps = {
  for: Metadata;
  withExtension?: ImageExtension;
};

export const Cover = ({ for: entity, withExtension = "png" }: CoverProps) => {
  const { title } = entity;
  const source = imageSourceFor(entity, withExtension);
  return <Picture src={source} alt={title} />;
};
