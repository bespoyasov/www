import { classes } from "@shared/classes";

type ActiveLinkClassName = ClassName;

export function activeIf(condition: boolean): ActiveLinkClassName {
  return classes(condition && "text-color");
}
