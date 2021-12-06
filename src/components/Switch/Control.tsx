import type { CodeSamplesLanguage } from "@domain/preferences";
import { nameOf } from "@domain/preferences";

import { useHashUpdate } from "@effects/useHashUpdate";
import { usePreferencesContext } from "@global/context";

import type { InstanceId } from "./types";
import styles from "./Control.module.css";

type ControlDisabled = boolean;
type ControlProps = {
  language: CodeSamplesLanguage;
  disabled: ControlDisabled;
  switchId: InstanceId;
};

export const Control = ({ language, disabled, switchId }: ControlProps) => {
  const { updateLanguage } = usePreferencesContext();
  const updateHash = useHashUpdate();

  function applyChanges() {
    updateLanguage(language);
    updateHash(switchId);
  }

  return (
    <button type="button" disabled={disabled} className={styles.control} onClick={applyChanges}>
      {nameOf(language)}
    </button>
  );
};
