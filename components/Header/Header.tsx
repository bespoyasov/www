import React from "react";
import { useRouter } from "next/router";
import { onMainPage } from "@shared/onMainPage";
import { Nav } from "@components/Nav";
import { Logo } from "@components/Logo";
import { About } from "@components/About";
import styles from "./Header.module.css";

export const Header: React.FC = () => {
  const { pathname } = useRouter();

  return (
    <header className={styles.header}>
      <div>
        <Logo className={styles.logo} />
        <Nav className={styles.nav} />
      </div>

      {onMainPage(pathname) && <About />}
    </header>
  );
};
