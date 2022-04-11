import { useState, useEffect } from "react";
import "./normalize.css";
import "./App.scss";
import { useFetch, Main, Nav } from "./index";
import { useSearchParams } from "react-router-dom";


function App() {

  const [searchParams, setSearchParams] = useSearchParams();


  const [language, setLanguage] = useState(
    searchParams.get("lang") || localStorage.getItem("language") || "en"
  );

  const strapiUrl = process.env.REACT_APP_STRAPI_URL;


  let pagesUrl = `${strapiUrl}pages/?locale=${language}`
  // &sort=SortOrder:asc;
  let startUrl = `${strapiUrl}start/?locale=${language}`;
  let pricingUrl = `${strapiUrl}pricing/?locale=${language}`;
  let contactUrl = `${strapiUrl}contact/?locale=${language}`;


  const [startContent, startLoading, startError] = useFetch(startUrl);
  const [pricingContent, pricingLoading, pricingError] = useFetch(pricingUrl);
  const [contactContent, contactLoading, contactError] = useFetch(contactUrl);
  const [content, loading, error] = useFetch(pagesUrl);

  useEffect(() => {
    localStorage.setItem("language", language); setSearchParams(`lang=${language}`)
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
        language={language}
      />
    </>
  );
}

export default App;
