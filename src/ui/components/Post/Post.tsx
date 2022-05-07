import { MDXRemote } from "next-mdx-remote";
import { PostContents } from "@domain/post";
import { PreferencesProvider } from "@global/context";
import { substitutes } from "./substitutes";
import styles from "./Post.module.css";

type PostProps = {
  content: PostContents;
  as?: HtmlElements;
};

export const Post = ({ content, as: Container = "main" }: PostProps) => {
  return (
    <PreferencesProvider>
      <Container className={styles.post}>
        <MDXRemote compiledSource={content} components={substitutes} />
      </Container>
    </PreferencesProvider>
  );
};
