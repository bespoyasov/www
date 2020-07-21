import React from "react";
import { useMount } from "@effects/useMount";
import { AbsoluteUrl } from "@shared/types";

type Props = {
  to: AbsoluteUrl;
};

export const Redirect: React.FC<Props> = ({ to }) => {
  useMount(() => {
    location.href = to;
  });

  return null;
};
