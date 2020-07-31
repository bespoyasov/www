import React from "react";
import styles from "./Post.module.css";

export const PostLayout: React.FC = ({ children }) => {
  return <div className={styles.post}>{children}</div>;
};
