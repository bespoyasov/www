import type { Site } from "./types";
import { domain } from "./domain";

const baseUrl = `https://bespoyasov.${domain}`;
const createdAt = 2010;

export const site: Site = {
  baseUrl,
  createdAt,
};
