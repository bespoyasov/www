import type { ReactNode } from "react";
import type { CodeSampleLanguage } from "@core/code";

import { zip } from "@utils/zip";
import { usePreferencesContext } from "@context/preferences";
import { selectLanguage } from "./selectLanguage";

type SamplesProps = {
  options: List<CodeSampleLanguage>;
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
