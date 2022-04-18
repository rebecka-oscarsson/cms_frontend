import React from "react";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { Spinner, Error } from "../../index";

function Page({ content, loading, error }) {
  if (loading) return <Spinner />;
  if (error) return <Error />;
  if (content && Object.keys(content).length > 0) {
    return (
      <main className={"dynamicpage"}>
        <ReactMarkdown>{content}</ReactMarkdown>
      </main>
    );
  }
  else return null
}

export default Page;
