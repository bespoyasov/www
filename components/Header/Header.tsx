import React from "react";
import { useRouter } from "next/router";
import { onMainPage } from "@shared/onMainPage";
import { Link } from "@components/LinkIf";
import { Nav } from "@components/Nav";
import { Logo } from "@components/Logo";
import { About } from "@components/About";
import styles from "./Header.module.css";

export const Header: React.FC = () => {
  const { pathname } = useRouter();
  const mainPage = onMainPage(pathname);

  return (
    <header className={styles.header}>
      <div>
        <Link to="/" if={!mainPage}>
          <Logo className={styles.logo} />
        </Link>
        <Nav className={styles.nav} />
      </div>

      {mainPage && <About />}
    </header>
  );
};
