import React from "react";
import styles from "./Start.module.scss";
import { Spinner } from "../../index";

//problem: css:en kommer krascha om man byter namn på sidan
function Start({ content, loading, error }) {
  
  if (loading) return <Spinner />;
  if (error) return <main>error</main>;
  if (content && Object.keys(content).length > 0)
    //det här borde inte behöva vara här. varför blir content undefined? utan att det är loading eller error?
    return (
      <main className={styles.start}>
        <h2>{content.attributes.Headline}</h2>
        <p>{content.attributes.Presentation}</p>
        <button>{content.attributes.Button_text}</button>
        
      </main>
    );
  else return null;
}

export default Start;
