import type { CodeSampleLanguage } from "@core/code";
import type { WithChildren } from "@extensions/components";
import type { InstanceId } from "./types";

import { sizeOf } from "@utils/sizeOf";
import { Samples } from "./Samples";
import { Controls } from "./Controls";
import styles from "./Switch.module.css";

type SwitchProps = {
  id: InstanceId;
  options: List<CodeSampleLanguage>;
};

export const Switch = ({ id, options, children }: WithChildren<SwitchProps>) => {
  if (!id) return <>{children}</>;

  if (!Array.isArray(children)) return <>{children}</>;
  if (sizeOf(children) !== sizeOf(options)) return <>{children}</>;

  return (
    <figure className={styles.switch} id={id}>
      <Controls options={options} switchId={id} />
      <Samples options={options} samples={children} />
    </figure>
  );
};
