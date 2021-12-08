import { LinkProxy } from "@components/LinkProxy";
import { options } from "./options";

export const OptionList = () => {
  return (
    <ul>
      {options.map(({ link: url, text, icon }) => (
        <li key={text}>
          <LinkProxy href={url}>{text}</LinkProxy> {icon}
        </li>
      ))}
    </ul>
  );
};
