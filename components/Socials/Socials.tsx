import React from "react";
import styles from "./Socials.module.css";
import { socials } from "./list";

export const Socials: React.FC = () => {
  return (
    <ul className={styles.socials}>
      {socials.map(({ url, name }) => (
        <li key={name}>
          <a href={url} className="text-color">
            {name}
          </a>
        </li>
      ))}
    </ul>
  );
};
