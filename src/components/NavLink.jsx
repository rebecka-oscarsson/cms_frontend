import React from "react";
import { Link } from "react-router-dom";

function NavLink({ text, id }) {
  return (
    <li key={id}>
      <Link to={text === "start" ? "/" : "/" + text}>{text}</Link>
    </li>
  );
}

export default NavLink;
