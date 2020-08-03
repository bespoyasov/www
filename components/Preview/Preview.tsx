import React from "react";
import Link from "next/link";
import { Metadata } from "@domain/metadata";

type PreviewProps = {
  metadata: Metadata;
};

export const Preview: React.FC<PreviewProps> = ({ metadata }) => {
  const { slug, title, description } = metadata;

  return (
    <div>
      <h2>
        <Link href={slug} as={slug}>
          <a className="text-color">{title}</a>
        </Link>
      </h2>
      <p>{description}</p>
    </div>
  );
};
