import React from "react";
import styles from "./Error.module.scss";

function Error() {
    return <main className={styles.error}><h2><i className="fa fa-exclamation-triangle" aria-hidden="true" /> Error loading the page</h2></main>;
}

export default Error;
