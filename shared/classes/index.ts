import { List } from "@shared/types";
import { exists } from "@shared/exists";

type ClassName = string;

export function classes(...list: List<ClassName>): ClassName {
  return list.filter(exists).join(" ");
}
