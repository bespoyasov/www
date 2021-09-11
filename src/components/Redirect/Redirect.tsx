import { useMount } from "@effects/useMount";

type RedirectProps = {
  to: AbsoluteUrl;
};

export const Redirect = ({ to }: RedirectProps) => {
  useMount(() => {
    location.href = to;
  });

  return null;
};
