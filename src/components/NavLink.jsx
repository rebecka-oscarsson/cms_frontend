import React from "react";
import { Link } from "react-router-dom";

function NavLink({ pageId, text, id }) {
  return (
    <li key={id}>
      <Link to={pageId === "start" ? "/" : "/" + pageId}>{text}</Link>
    </li>
  );
}

export default NavLink;
