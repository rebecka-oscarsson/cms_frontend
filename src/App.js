import { useState, useEffect } from "react";
import "./normalize.css";
import "./App.scss";
import { useFetch, Main, Nav } from "./index";

function App() {
  const [language, setLanguage] = useState(
    localStorage.getItem("language") || "en"
  );
  let pagesUrl = `http://localhost:1337/api/pages/?locale=${language}&sort=SortOrder:asc`;
  let startUrl = `http://localhost:1337/api/start/?locale=${language}`;
  let pricingUrl = `http://localhost:1337/api/pricing/?locale=${language}`;
  let contactUrl = `http://localhost:1337/api/contact/?locale=${language}`;

  const [content, loading, error] = useFetch(pagesUrl);
  const [startContent, startLoading, startError] = useFetch(startUrl);
  const [pricingContent, pricingLoading, pricingError] = useFetch(pricingUrl);
  const [contactContent, contactLoading, contactError] = useFetch(contactUrl);

  useEffect(() => {
    localStorage.setItem("language", language);
  }, [language]);

  return (
    <>
      <Nav
        setLanguage={setLanguage}
        language={language}
        content={content}
        startContent={startContent}
        contactContent={contactContent}
        pricingContent={pricingContent}
      />
      <Main
        content={content}
        loading={loading}
        error={error}
        startContent={startContent}
        startLoading={startLoading}
        startError={startError}
        pricingContent={pricingContent}
        pricingLoading={pricingLoading}
        pricingError={pricingError}
        contactContent={contactContent}
        contactLoading={contactLoading}
        contactError={contactError}
      />
    </>
  );
}

export default App;
