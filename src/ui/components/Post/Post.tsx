import { MDXRemote } from "next-mdx-remote";

import type { PostContents } from "@core/post";
import { PreferencesProvider } from "@context/preferences";
import { substitutes } from "./substitutes";
import { settings } from "./settings";
import styles from "./Post.module.css";

type PostProps = {
  content: PostContents;
  as?: HtmlElements;
};

export const Post = ({ content, as: Container = "main" }: PostProps) => {
  return (
    <PreferencesProvider>
      <Container className={styles.post}>
        <MDXRemote compiledSource={content} components={substitutes} {...settings} />
      </Container>
    </PreferencesProvider>
  );
};
