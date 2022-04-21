import React from "react";
import styles from "./Start.module.scss";
import { Spinner, Error } from "../../index";
import { Link } from "react-router-dom";
import { Helmet, HelmetProvider } from 'react-helmet-async';

function Start({ content, loading, error, language }) {
  if (loading) return <Spinner />;
  if (error) return <Error />;
  if (content && Object.keys(content).length > 0)
    return (
      <HelmetProvider>
      <main className={styles.start}>
        
        <Helmet>
          <title>{content.attributes.Headline}</title>
          <meta name="description" content={content.attributes.Presentation} />
          <meta
          name="keywords"
          content="test"
        />
        </Helmet>

        <div className={styles.start_container}>
          <div>
            <h1>{content.attributes.Headline}</h1>
            <p>{content.attributes.Presentation}</p>
          </div>
          <Link to={`/pricing?lang=${language}`}>
            <button className={styles.linkbutton}>
              {content.attributes.Button_text}
            </button>
          </Link>
        </div>
      </main></HelmetProvider>
    );
  else return null;
}

export default Start;
