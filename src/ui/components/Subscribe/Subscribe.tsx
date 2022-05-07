import { translated } from "@translation";

export const Subscribe = () => {
  return (
    <div>
      <h3>
        <a href="/rss.xml">{translated.subscribe.action}</a>
      </h3>
      <p>{translated.subscribe.reason}</p>
    </div>
  );
};
