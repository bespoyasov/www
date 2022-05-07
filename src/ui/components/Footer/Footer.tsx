import { author } from "@core/author";
import { site } from "@core/site";
import { mailto } from "@utils/mailto";
import styles from "./Footer.module.css";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <a href={mailto(author.email)} className="text-color">
        {author.email}
      </a>

      <span>{site.createdAt}+ 🇸🇪</span>
    </footer>
  );
};
