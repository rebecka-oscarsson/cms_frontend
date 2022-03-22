import React from "react";

function Link({ text, id }) {
    console.log(id)
  return (
    <li key={id}>
      <a href="" >{text}{id}</a>
    </li>
  );
}

export default Link;
