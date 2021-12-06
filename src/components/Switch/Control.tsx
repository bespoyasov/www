import type { CodeSamplesLanguage } from "@domain/preferences";
import { nameOf } from "@domain/preferences";
import { usePreferencesContext } from "@global/context";
import styles from "./Control.module.css";

type ControlDisabled = boolean;
type ControlProps = {
  language: CodeSamplesLanguage;
  disabled: ControlDisabled;
};

export const Control = ({ language, disabled }: ControlProps) => {
  const { updateLanguage } = usePreferencesContext();

  return (
    <button
      type="button"
      disabled={disabled}
      className={styles.control}
      onClick={() => updateLanguage(language)}
    >
      {nameOf(language)}
    </button>
  );
};
