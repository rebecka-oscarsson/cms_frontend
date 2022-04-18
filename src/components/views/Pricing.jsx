import React from "react";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { Spinner, Error } from "../../index";

//problem: css:en kommer krascha om man byter namn på sidan
function Pricing({ content, loading, error }) {
  if (loading) return <Spinner />;
  if (error) return <Error />;
  if (content && Object.keys(content).length > 0)
    return <main><ReactMarkdown>{content.attributes.Description}</ReactMarkdown></main>;
}

export default Pricing;
