import React from "react";
import styles from "./Start.module.scss";

//problem: css:en kommer krascha om man byter namn på sidan
function Start({ content, loading, error }) {
  
  if (loading) return "loading";
  if (error) return "nääj det blev feeel";
  if (content && Object.keys(content).length > 0)
    //det här borde inte behöva vara här. varför blir content undefined? utan att det är loading eller error?
    return (
      <div className={styles.start}>
        <h2>{content.attributes.Headline}</h2>
        <p>{content.attributes.Presentation}</p>
        <button>{content.attributes.Button_text}</button>
        <img src="https://res.cloudinary.com/dc39bw2wz/image/upload/v1649946049/sthlm_cc9bbd58a4.svg" alt=""></img>
      </div>
    );
  else return null;
}

export default Start;
