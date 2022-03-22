import { useState } from "react";
import styles from "./Nav.module.css";
import {Link} from "../index";

function Nav() {
  const links = ["start", "pricing", "about", "contact"];
  return (
    <nav className={styles.nav}>
      <ul className={styles.links}>
        {links.map((link, index) => (
        <Link text={link} key={index.toString()} id={index.toString()} />
        ))}
      </ul>
    </nav>
  );
}

export default Nav;
