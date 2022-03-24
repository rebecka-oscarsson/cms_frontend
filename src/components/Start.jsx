import React from "react";

function Start({ content, loading, error }) {
  if (loading) return <p>loading</p>;
  else if (error) return <p>nääj det blev feeel</p>;
  else if (content) return <h2>{content.data[0].attributes.Text_Content}</h2>;
  else return null;
}

export default Start;
