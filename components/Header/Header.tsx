import React from "react";
import { Logo } from "@components/Logo";
import { Nav } from "@components/Nav";
import styles from "./Header.module.css";

export const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div>
        <Logo />
        <Nav className={styles.nav} />
      </div>
    </header>
  );
};
