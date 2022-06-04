import type { CodeSampleLanguage } from "@core/code";
import type { WithChildren } from "@extensions/components";

import { sizeOf } from "@utils/sizeOf";
import { Samples } from "./Samples";
import { Controls } from "./Controls";
import styles from "./Switch.module.css";

type SwitchProps = {
  options: List<CodeSampleLanguage>;
};

export const Switch = ({ options, children }: WithChildren<SwitchProps>) => {
  if (!Array.isArray(children)) return <>children</>;
  if (sizeOf(children) !== sizeOf(options)) return <>children</>;

  return (
    <figure className={styles.switch}>
      <Controls options={options} />
      <Samples options={options} samples={children} />
    </figure>
  );
};
