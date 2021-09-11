import { Copyright } from "@components/Copyright";
import { Contacts } from "@components/Contacts";
import { Person } from "@components/MicroData";
import styles from "./Footer.module.css";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Copyright />
      <Contacts />
      <Person />
    </footer>
  );
};
