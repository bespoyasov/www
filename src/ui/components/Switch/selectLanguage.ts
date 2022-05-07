import type { CodeSampleLanguage } from "@core/code";
import type { PreferredLanguage } from "@core/preferences";
import { first } from "@utils/first";

type PreferredOrFallback = CodeSampleLanguage;

export function selectLanguage(
  available: List<CodeSampleLanguage>,
  preferred: PreferredLanguage,
): PreferredOrFallback {
  return available.includes(preferred) ? preferred : first(available);
}
