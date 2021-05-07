import { MDXRemote } from "next-mdx-remote";
import { PostContents } from "@domain/post";
import { substitutes } from "./substitutes";
import styles from "./Post.module.css";

type PostProps = {
  content: PostContents;
  as?: keyof JSX.IntrinsicElements;
};

export const Post = ({ content, as: Container = "main" }: PostProps) => {
  return (
    <Container className={styles.post}>
      <MDXRemote compiledSource={content} components={substitutes} />
    </Container>
  );
};
