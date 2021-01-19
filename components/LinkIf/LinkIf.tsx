import React from "react";
import { WithChildren } from "@domain/components";
import { UrlSlug } from "@shared/types";
import NextLink from "next/link";

type Condition = boolean;
type Destination = UrlSlug;

type LinkIfProps = {
  if: Condition;
  to: Destination;
};

export const Link = ({ if: condition, to, children }: WithChildren<LinkIfProps>) => {
  if (condition) {
    return (
      <NextLink href={to}>
        <a>{children}</a>
      </NextLink>
    );
  }

  return <>{children}</>;
};
