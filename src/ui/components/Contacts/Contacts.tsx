import { contacts } from "./links";
import styles from "./Contacts.module.css";

export const Contacts = () => {
  return (
    <ul className={styles.contacts}>
      {contacts.map(({ url, text }) => (
        <li key={url}>
          <a href={url}>{text}</a>
        </li>
      ))}
    </ul>
  );
};
