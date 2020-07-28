import React from "react";

type DescriptionProps = {
  children: string;
};

export const Description: React.FC<DescriptionProps> = ({ children }) => {
  return <meta name="description" content={children} />;
};
