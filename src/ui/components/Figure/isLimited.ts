import type { ImageFileSource } from "@core/image";

type ShouldLimitContainerWidth = boolean;

const LIMITED_IMAGE_POSTFIX = "?limited";

export function isLimited(src: ImageFileSource): ShouldLimitContainerWidth {
  return src.endsWith(LIMITED_IMAGE_POSTFIX);
}
