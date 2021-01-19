import JSON5 from "json5";

export function parseObject<TParsed extends AnyObject>(text: string): Nullable<TParsed> {
  try {
    const objectStart = text.indexOf("{");
    const objectEnding = text.lastIndexOf("}") + 1;
    return JSON5.parse(text.slice(objectStart, objectEnding));
  } catch {
    return null;
  }
}
