import React from "react";
import { Link } from "react-router-dom";
import styles from "./Nav.module.scss";

function NavLink({ pageId, text, id, language, closeMobileMenu, onMouseEnter, onMouseLeave }) {
  return (
    <li key={id}>
      <Link to={`/${pageId}?lang=${language}`} onClick={closeMobileMenu} className={styles.navlinks}>{text}</Link>
    </li>
  );
}

export default NavLink;
