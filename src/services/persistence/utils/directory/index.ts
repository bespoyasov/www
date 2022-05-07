import type { ContentDirectory, QueryKind } from "@persistence/types";
import type { Dependencies } from "@persistence/composition";

import path from "path";
import { BASE_DIRECTORY } from "@persistence/const";
import { dependencies } from "@persistence/composition";

export function directoryFor(
  query: QueryKind,
  { locale }: Dependencies = dependencies,
): ContentDirectory {
  return path.join(BASE_DIRECTORY, locale, query);
}
