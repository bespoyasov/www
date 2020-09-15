import { ImageSource } from "@domain/image";

type ShouldLimitContainerWidth = boolean;

const LIMITED_IMAGE_POSTFIX = "?limited";

export function isLimited(src: ImageSource): ShouldLimitContainerWidth {
  return src.endsWith(LIMITED_IMAGE_POSTFIX);
}
