import type { WithChildren } from "@extensions/components";

import { useEffect } from "react";
import { LinkProxy } from "@components/LinkProxy";

type RedirectProps = {
  to: AbsoluteUrl;
};

export const Redirect = ({ to, children }: WithChildren<RedirectProps>) => {
  useEffect(() => {
    location.href = to;
  }, []);

  return <LinkProxy href={to}>{children}</LinkProxy>;
};
