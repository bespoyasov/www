import { exists } from "@utils/exists";

export function classes(...list: List<ClassName>): ClassName {
  return list.filter(exists).join(" ");
}
