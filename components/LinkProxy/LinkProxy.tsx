import { AnchorHTMLAttributes } from "react";
import Link from "next/link";

function isInternalRoute(uri: AbsoluteUrl | UrlSlug): boolean {
  return uri.startsWith("/");
}

export const LinkProxy = (props: AnchorHTMLAttributes<HTMLAnchorElement>) => {
  const { href, ...rest } = props;

  return isInternalRoute(href) ? (
    <Link href={href}>
      <a {...rest} />
    </Link>
  ) : (
    <a {...props} />
  );
};
