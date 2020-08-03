import { List, ClassName } from "@shared/types";
import { exists } from "@shared/exists";

export function classes(...list: List<ClassName>): ClassName {
  return list.filter(exists).join(" ");
}
