import React from "react";
import { nameOf } from "@domain/preferences";
import type { CodeSamplesLanguage } from "@domain/preferences";

import { classes } from "@shared/classes";
import { useMounted } from "@effects/useMounted";
import { usePreferencesContext } from "@global/context";
import { VisuallyHidden } from "@components/VisuallyHidden";

import type { InstanceId } from "./types";
import { selectLanguage } from "./selectLanguage";
import { Control } from "./Control";
import styles from "./Controls.module.css";

type ControlsProps = {
  options: List<CodeSamplesLanguage>;
  switchId: InstanceId;
};

export const Controls = ({ options, switchId }: ControlsProps) => {
  const { language: preferred } = usePreferencesContext();
  const current = selectLanguage(options, preferred);
  const mounted = useMounted();

  return (
    <figcaption className={classes(styles.controls, mounted && styles.mounted)} hidden={!mounted}>
      <VisuallyHidden>
        Фрагмент кода на {nameOf(current)}. Показать на других языках:
      </VisuallyHidden>

      {options.map((language) => (
        <Control
          key={language}
          language={language}
          disabled={language === current}
          switchId={switchId}
        />
      ))}
    </figcaption>
  );
};
