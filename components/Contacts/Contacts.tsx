import React from "react";
import styles from "./Contacts.module.css";
import { contacts } from "./list";

export const Contacts: React.FC = () => {
  return (
    <ul className={styles.contacts}>
      {contacts.map(({ url, type }) => (
        <li key={type}>
          <a href={url} className="text-color">
            {type}
          </a>
        </li>
      ))}
    </ul>
  );
};
