import React from "react";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import styles from "./Page.module.scss";

//problem: css:en kommer krascha om man byter namn på sidan
function Page({ content, loading, error }) {
  if (loading) return <main>loading</main>;
  if (error) return <main>error</main>;
  if (content && Object.keys(content).length > 0) {
    //det här borde inte behöva vara här. varför blir content undefined? utan att det är loading eller error?
    return <main className={styles.page}><ReactMarkdown>{content}</ReactMarkdown></main>;
  }
}

export default Page;
