type ClassName = string;

export function classes(...list: ClassName[]): ClassName {
  return list.join(" ");
}
