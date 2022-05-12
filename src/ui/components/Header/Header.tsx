import { useRouter } from "next/router";
import { onMainPage } from "@utils/onMainPage";
import { Language } from "@components/Language";
import { Author } from "@components/Author";
import { Link } from "@components/LinkIf";
import { Nav } from "@components/Nav";
import styles from "./Header.module.css";

export const Header = () => {
  const { pathname } = useRouter();

  return (
    <header className={styles.header}>
      <span className={styles.photo}>
        <Link to="/" if={!onMainPage(pathname)}>
          <Author />
        </Link>
      </span>

      <Nav className={styles.nav} />
      <Language className={styles.language} />
    </header>
  );
};
