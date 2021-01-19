import React from "react";
import { useMount } from "@effects/useMount";
import { AbsoluteUrl } from "@shared/types";

type RedirectProps = {
  to: AbsoluteUrl;
};

export const Redirect = ({ to }: RedirectProps) => {
  useMount(() => {
    location.href = to;
  });

  return null;
};
