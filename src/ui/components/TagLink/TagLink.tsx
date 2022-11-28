import Link from "next/link";

import type { TagKind } from "@core/tags";
import { valueOf } from "@core/tags";

type TagLinkProps = {
  tag: TagKind;
};

export const TagLink = ({ tag }: TagLinkProps) => {
  const value = valueOf(tag);

  return (
    <Link href={`/tag/${tag}`} className="text-color">
      {value}
    </Link>
  );
};
