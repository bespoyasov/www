import type { CodeSamplesLanguage, PreferredLanguage } from "@domain/preferences";
import { first } from "@shared/first";

type PreferredOrFallback = CodeSamplesLanguage;

export function selectLanguage(
  available: List<CodeSamplesLanguage>,
  preferred: PreferredLanguage,
): PreferredOrFallback {
  return available.includes(preferred) ? preferred : first(available);
}
