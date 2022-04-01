import React from "react";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";

//problem: css:en kommer krascha om man byter namn på sidan
function Contact({ pageName, content, loading, error }) {
  if (loading) return "loading";
  if (error) return "nääj det blev feeel";
  if (content && Object.keys(content).length > 0)
    //det här borde inte behöva vara här. varför blir content undefined? utan att det är loading eller error?
    return <div className={pageName}><ReactMarkdown>{content.Description}</ReactMarkdown></div>;
    else return null
}


export default Contact;
