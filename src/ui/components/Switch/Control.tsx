import type { CodeSampleLanguage } from "@core/code";

import { nameOf } from "@core/code";
import { usePreferencesContext } from "@context/preferences";
import { useScrollRestore } from "./useScrollRestore";
import styles from "./Control.module.css";

type ControlDisabled = boolean;
type ControlProps = {
  language: CodeSampleLanguage;
  disabled: ControlDisabled;
};

export const Control = ({ language, disabled }: ControlProps) => {
  const { updateLanguage } = usePreferencesContext();
  const { control, restoreScroll } = useScrollRestore<HTMLButtonElement>();

  function applyChanges() {
    updateLanguage(language);
    restoreScroll();
  }

  return (
    <button
      type="button"
      disabled={disabled}
      className={styles.control}
      onClick={applyChanges}
      ref={control}
    >
      {nameOf(language)}
    </button>
  );
};
