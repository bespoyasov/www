import React from "react";
import { Metadata } from "@domain/metadata";
import { Neighbor } from "./Neighbor";
import styles from "./Adjacent.module.css";

type AdjacentProps = {
  prev?: Metadata;
  next?: Metadata;
};

export const Adjacent = ({ prev, next }: AdjacentProps) => {
  return (
    <menu className={styles.adjacent}>
      {!!prev && <Neighbor is="prev" describes={prev} />}
      {!!next && <Neighbor is="next" describes={next} />}
    </menu>
  );
};
