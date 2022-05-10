import { useRouter } from "next/router";
import { onMainPage } from "@utils/onMainPage";
import { Author } from "@components/Author";
import { Link } from "@components/LinkIf";
import { Nav } from "@components/Nav";
import styles from "./Header.module.css";

export const Header = () => {
  const { pathname } = useRouter();

  return (
    <header className={styles.header}>
      <Link to="/" if={!onMainPage(pathname)}>
        <Author />
      </Link>

      <Nav className={styles.nav} />
    </header>
  );
};
