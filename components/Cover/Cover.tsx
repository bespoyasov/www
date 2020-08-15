import React from "react";
import { Metadata } from "@domain/metadata";
import { ImageExtension } from "@domain/image";
import { imageSourceFor } from "./imageSourceFor";

type CoverProps = {
  for: Metadata;
  withExtension?: ImageExtension;
};

export const Cover: React.FC<CoverProps> = ({ for: entity, withExtension = "png" }) => {
  const { title } = entity;
  const source = imageSourceFor(entity, withExtension);
  return <img src={source} alt={title} />;
};
