import { AnchorHTMLAttributes } from "react";
import Link from "next/link";

function isExternalRoute(uri: AbsoluteUrl | UrlSlug): boolean {
  return uri.startsWith("http") || uri.startsWith("mailto");
}

export const LinkProxy = (props: AnchorHTMLAttributes<HTMLAnchorElement>) => {
  const { href, ...rest } = props;

  return isExternalRoute(href) ? (
    <a {...props} />
  ) : (
    <Link href={href}>
      <a {...rest} />
    </Link>
  );
};
