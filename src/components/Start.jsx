import React from "react";

//problem: css:en kommer krascha om man byter namn på sidan
function Start({ content, loading, error }) {
  if (loading) return "loading";
  if (error) return "nääj det blev feeel";
  if (content && Object.keys(content).length > 0)
    //det här borde inte behöva vara här. varför blir content undefined? utan att det är loading eller error?
    return <div className="start"><h2>{content.Headline}</h2>{content.Presentation}</div>;
    else return null
}

export default Start;