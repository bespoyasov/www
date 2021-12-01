import { Person } from "@components/MicroData";
import { Contacts } from "@components/Contacts";
import { Since } from "@components/Since";
import styles from "./Footer.module.css";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Person />
      <Contacts />
      <Since />
    </footer>
  );
};
