import { useEffect } from "react";

type RedirectProps = {
  to: AbsoluteUrl;
};

export const Redirect = ({ to }: RedirectProps) => {
  useEffect(() => {
    location.href = to;
  });

  return null;
};
