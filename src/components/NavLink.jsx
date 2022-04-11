import React from "react";
import { Link } from "react-router-dom";

function NavLink({ pageId, text, id, language }) {
  return (
    <li key={id}>
      <Link to={pageId === "start" ? `/?lang=${language}` : `/${pageId}?lang=${language}`}>{text}</Link>
    </li>
  );
}

export default NavLink;
