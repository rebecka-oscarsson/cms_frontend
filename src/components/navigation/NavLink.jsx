import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./NavLink.module.scss";

function NavBarLink({ pageId, text, id, language, closeMobileMenu }) {
  return (
    <li key={id} role="menuitem">
      <NavLink
        to={
          pageId === "start"
            ? `/?lang=${language}`
            : `/${pageId}?lang=${language}`
        }
        onClick={closeMobileMenu}
        // className={styles.navlink}
        className={({ isActive }) => (isActive ? styles.navlinkactive : styles.navlink)}
      >
        {text}
      </NavLink>
    </li>
  );
}

export default NavBarLink;
