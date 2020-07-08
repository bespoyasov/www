import { List } from "@shared/types";

type ClassName = string;

export function classes(...list: List<ClassName>): ClassName {
  return list.join(" ");
}
