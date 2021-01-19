import React from "react";
import styles from "./Contacts.module.css";
import { contacts } from "./list";

export const Contacts = () => {
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
