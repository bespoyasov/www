import React from "react";
import { UrlSlug } from "@shared/types";
import NextLink from "next/link";

type Condition = boolean;
type Destination = UrlSlug;

type Props = {
  if: Condition;
  to: Destination;
};

export const Link: React.FC<Props> = ({ if: condition, to, children }) => {
  if (condition) {
    return (
      <NextLink href={to}>
        <a>{children}</a>
      </NextLink>
    );
  }

  return <>{children}</>;
};
