import { LinkProxy } from "@components/LinkProxy";
import { options } from "./options";

export const SupportOptions = () => {
  return (
    <ul>
      {options.map(({ url, text, icon }) => (
        <li key={url}>
          <LinkProxy href={url}>{text}</LinkProxy> {icon}
        </li>
      ))}
    </ul>
  );
};
