import styles from "./YouTube.module.css";

type YouTubeVideoSource = AbsoluteUrl;
type VisibleCaption = string;

type YouTubeProps = {
  src: YouTubeVideoSource;
  caption?: VisibleCaption;
};

export const YouTube = ({ src, caption }: YouTubeProps) => {
  return (
    <figure className={styles.container}>
      <iframe src={src} frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen />
      {caption && <figcaption>{caption}</figcaption>}
    </figure>
  );
};
