import { useState, useEffect } from "react";
import "./normalize.css";
import "./App.scss";
import { useFetch, Main, Nav } from "./index";
import { useSearchParams } from "react-router-dom";

function App() {
  //gets the url parameters
  let [searchParams, setSearchParams] = useSearchParams();

  //first time app renders set language to the one from url, localstorage or english
  const [language, setLanguage] = useState(
    searchParams.get("lang") || localStorage.getItem("language") || "en"
  );

  const strapiUrl = process.env.REACT_APP_STRAPI_URL;

  let pagesUrl = `${strapiUrl}pages/?locale=${language}`;
  let startUrl = `${strapiUrl}start/?locale=${language}`;
  let pricingUrl = `${strapiUrl}pricing/?locale=${language}`;
  let contactUrl = `${strapiUrl}contact/?locale=${language}`;

  const [startContent, startLoading, startError] = useFetch(startUrl);
  const [pricingContent, pricingLoading, pricingError] = useFetch(pricingUrl);
  const [contactContent, contactLoading, contactError] = useFetch(contactUrl);
  const [content, loading, error] = useFetch(pagesUrl);

  useEffect(() => {
    localStorage.setItem("language", language);
    if (searchParams.get("lang") !== language) {
      setSearchParams({ lang: language });
    }
  }, [language, setSearchParams, searchParams]);
  //varför tycker lintern att setSearcParams ska vara en dependency? Det är en funktion den ändras inte?

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
