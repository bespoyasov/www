import { MDXRemote } from "next-mdx-remote";
import { PostContents } from "@domain/post";
import { substitutes } from "./substitutes";
import styles from "./Post.module.css";

type PostProps = {
  content: PostContents;
};

export const Post = ({ content }: PostProps) => {
  return (
    <main className={styles.post}>
      <MDXRemote compiledSource={content} components={substitutes} />
    </main>
  );
};
