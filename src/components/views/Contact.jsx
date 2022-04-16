import React from "react";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";

function Contact({ content, loading, error }) {
  if (loading) return <main>loading</main>;
  if (error) return <main>error</main>
  if (content && Object.keys(content).length > 0)
    return <main className="contact"><ReactMarkdown>{content.attributes.Description}</ReactMarkdown></main>;
    else return null
}

export default Contact;
