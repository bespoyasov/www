import type { CodeSamplesLanguage } from "@domain/preferences";
import type { WithChildren } from "@extensions/components";
import type { InstanceId } from "./types";

import { sizeOf } from "@shared/sizeOf";
import { Samples } from "./Samples";
import { Controls } from "./Controls";
import styles from "./Switch.module.css";

type SwitchProps = {
  id: InstanceId;
  options: List<CodeSamplesLanguage>;
};

export const Switch = ({ id, options, children }: WithChildren<SwitchProps>) => {
  if (!Array.isArray(children)) return children;
  if (sizeOf(children) !== sizeOf(options)) return children;

  return (
    <figure className={styles.switch} id={id}>
      <Controls options={options} switchId={id} />
      <Samples options={options} samples={children} />
    </figure>
  );
};
