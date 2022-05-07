import type { SummaryCard } from "./types";
import { translated } from "@translation";

const { title, description } = translated.summaryCard;

export const DEFAULT_CARD: SummaryCard = {
  title,
  cover,
  description,
};
