import React from "react";
import styles from "./Spinner.module.scss";
import spinner from "../../images/spinner.gif";

function Spinner() {
    return <main className={styles.spinner}><img src={spinner} /></main>;
}

export default Spinner;
