import React from "react";

import type { CodeSampleLanguage } from "@core/code";
import { nameOf } from "@core/code";

import { classes } from "@utils/classes";
import { useMounted } from "@effects/useMounted";
import { usePreferencesContext } from "@context/preferences";
import { VisuallyHidden } from "@components/VisuallyHidden";
import { translated, injectIn } from "@translation";

import { selectLanguage } from "./selectLanguage";
import { Control } from "./Control";
import styles from "./Controls.module.css";

type ControlsProps = {
  options: List<CodeSampleLanguage>;
};

export const Controls = ({ options }: ControlsProps) => {
  const { language: preferred } = usePreferencesContext();
  const current = selectLanguage(options, preferred);
  const mounted = useMounted();

  return (
    <figcaption className={classes(styles.controls, mounted && styles.mounted)} hidden={!mounted}>
      <VisuallyHidden>
        {injectIn(translated.codeSample.currentLanguage, nameOf(current))}
        {translated.codeSample.changeLanguage}
      </VisuallyHidden>

      {options.map((language) => (
        <Control key={language} language={language} disabled={language === current} />
      ))}
    </figcaption>
  );
};
