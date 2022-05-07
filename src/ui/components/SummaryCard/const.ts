import type { SummaryCard } from "./types";
import { translated } from "@translation";

const { title, description } = translated.summaryCard;
const cover = "/images/static/social-media-preview.png";

export const DEFAULT_CARD: SummaryCard = {
  title,
  cover,
  description,
};
