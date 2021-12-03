import type { ReactNode } from "react";
import type { CodeSamplesLanguage } from "@domain/preferences";

import { zip } from "@shared/zip";
import { usePreferencesContext } from "@global/context";
import { selectLanguage } from "./selectLanguage";

type SamplesProps = {
  options: List<CodeSamplesLanguage>;
  samples: List<ReactNode>;
};

export const Samples = ({ options, samples }: SamplesProps) => {
  const { language: preferred } = usePreferencesContext();
  const current = selectLanguage(options, preferred);
  const pairs = zip(options, samples);

  return (
    <>
      {pairs.map(([lang, child]) => (
        <div key={lang} hidden={lang !== current}>
          {child}
        </div>
      ))}
    </>
  );
};
