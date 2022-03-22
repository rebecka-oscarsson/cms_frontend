import React from "react";
import styles from "./Main.module.css";

function Main({ content, loading, error }) {
  const renderContent = () => {
    // if (loading) {
    //   return <p>loading...</p>;
    // } else if (error) {
    //   return <p>An error occured</p>;
    // } else
    //   return content.map((result) => (
    //     <Card
    //       key={result.id}
    //       searchResult={result.id}
    //       id={result.id}
    //       logo={result.thumbnail}
    //       company={result.title}
    //       description={result.description}
    //     />
    //   ));
    return "Main"
  };
  return <main className={styles.main}>{renderContent()}</main>;
}

export default Main;
