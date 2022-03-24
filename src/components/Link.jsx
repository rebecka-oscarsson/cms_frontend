import React from "react";

function Link({ text, id }) {
  return (
    <li key={id}>
      <a href="">{text}</a>
    </li>
  );
}

export default Link;
