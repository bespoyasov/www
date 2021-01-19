import React from "react";

type DescriptionProps = {
  children: string;
};

export const Description = ({ children }: DescriptionProps) => {
  return <meta name="description" content={children} />;
};
