import React from "react";
import { UrlSlug } from "@shared/types";
import NextLink from "next/link";

type Condition = boolean;
type Destination = UrlSlug;

type LinkIfProps = {
  if: Condition;
  to: Destination;
};

export const Link: React.FC<LinkIfProps> = ({ if: condition, to, children }) => {
  if (condition) {
    return (
      <NextLink href={to}>
        <a>{children}</a>
      </NextLink>
    );
  }

  return <>{children}</>;
};
