import React from "react";
import styles from "./Copyright.module.css";

export const Copyright = () => {
  return (
    <div>
      <span className={styles.dates}>2010+</span>
      <a href="mailto:bespoyasov@me.com" className="text-color">
        bespoyasov@me.com
      </a>
    </div>
  );
};
