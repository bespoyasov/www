import React from "react";
import { Copyright } from "@components/Copyright";
import { Contacts } from "@components/Contacts";
import { Person } from "@components/MicroData";
import styles from "./Footer.module.css";

export const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <Copyright />
      <Contacts />
      <Person />
    </footer>
  );
};
