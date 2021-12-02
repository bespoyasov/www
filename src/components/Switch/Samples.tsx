import type { ReactNode } from "react";
import type { CodeSamplesLanguage } from "@domain/preferences";

import { usePreferencesContext } from "@global/context";
import { zip } from "@shared/zip";

type SamplesProps = {
  options: List<CodeSamplesLanguage>;
  samples: List<ReactNode>;
};

export const Samples = ({ options, samples }: SamplesProps) => {
  const { language: current } = usePreferencesContext();
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
