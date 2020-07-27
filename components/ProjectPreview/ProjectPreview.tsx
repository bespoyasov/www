import React from "react";
import Link from "next/link";
import { Metadata } from "@domain/metadata";

type ProjectPreviewProps = {
  metadata: Metadata;
};

export const ProjectPreview: React.FC<ProjectPreviewProps> = ({ metadata }) => {
  const { slug, title, description } = metadata;

  return (
    <div>
      <h3>
        <Link href={slug} as={slug}>
          <a className="text-color">{title}</a>
        </Link>
      </h3>
      <p>{description}</p>
    </div>
  );
};
