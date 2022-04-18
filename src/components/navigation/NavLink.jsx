import React from "react";
import { Link } from "react-router-dom";
import styles from "./NavLink.module.scss";

function NavLink({ pageId, text, id, language, closeMobileMenu }) {
  return (
    <li key={id}>
      <Link
        to={
          pageId === "start"
            ? `/?lang=${language}`
            : `/${pageId}?lang=${language}`
        }
        onClick={closeMobileMenu}
        className={styles.navlink}
      >
        {text}
      </Link>
    </li>
  );
}

export default NavLink;
