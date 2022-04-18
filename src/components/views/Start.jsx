import React from "react";
import styles from "./Start.module.scss";
import { Spinner, Error } from "../../index";
import { Link } from "react-router-dom";


function Start({ content, loading, error, language }) {

  if (loading) return <Spinner />;
  if (error) return <Error />;
  if (content && Object.keys(content).length > 0)
    return (
      <main className={styles.start}>
        <h2>{content.attributes.Headline}</h2>
        <p>{content.attributes.Presentation}</p>
        <Link to={`/pricing?lang=${language}`}>
        <button className={styles.linkbutton}>{content.attributes.Button_text}</button>
        </Link>
        
      </main>
    );
  else return null;
}

export default Start;
