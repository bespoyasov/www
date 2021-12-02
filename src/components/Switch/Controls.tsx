import React from "react";
import { nameOf } from "@domain/preferences";
import type { CodeSamplesLanguage } from "@domain/preferences";

import { classes } from "@shared/classes";
import { useMounted } from "@effects/useMounted";
import { usePreferencesContext } from "@global/context";

import { VisuallyHidden } from "@components/VisuallyHidden";
import styles from "./Controls.module.css";

type ControlsProps = {
  options: List<CodeSamplesLanguage>;
};

export const Controls = ({ options }: ControlsProps) => {
  const { language: current, update } = usePreferencesContext();
  const mounted = useMounted();

  return (
    <figcaption className={classes(styles.controls, mounted && styles.mounted)} hidden={!mounted}>
      <VisuallyHidden>
        Фрагмент кода на {nameOf(current)}. Показать на других языках:
      </VisuallyHidden>

      {options.map((language) => (
        <button
          type="button"
          key={language}
          disabled={language === current}
          onClick={() => update(language)}
        >
          {nameOf(language)}
        </button>
      ))}
    </figcaption>
  );
};
