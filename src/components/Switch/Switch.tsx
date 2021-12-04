import type { CodeSamplesLanguage } from "@domain/preferences";
import type { WithChildren } from "@extensions/components";

import { sizeOf } from "@shared/sizeOf";
import { Samples } from "./Samples";
import { Controls } from "./Controls";
import styles from "./Switch.module.css";

type SwitchProps = {
  options: List<CodeSamplesLanguage>;
};

export const Switch = ({ options, children }: WithChildren<SwitchProps>) => {
  if (!Array.isArray(children)) return children;
  if (sizeOf(children) !== sizeOf(options)) return children;

  return (
    <figure className={styles.switch}>
      <Controls options={options} />
      <Samples options={options} samples={children} />
    </figure>
  );
};
