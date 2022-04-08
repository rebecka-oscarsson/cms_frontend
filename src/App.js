import { useState, useEffect } from "react";
import "./normalize.css";
import "./App.scss";
import { useFetch, Main, Nav } from "./index";

function App() {
  const [language, setLanguage] = useState(
    localStorage.getItem("language") || "en"
  );

  const strapiUrl = process.env.REACT_APP_STRAPI_URL;
  console.log(process.env)


  let pagesUrl = `${strapiUrl}pages/?locale=${language}&sort=SortOrder:asc`;
  let startUrl = `${strapiUrl}start/?locale=${language}`;
  let pricingUrl = `${strapiUrl}pricing/?locale=${language}`;
  let contactUrl = `${strapiUrl}contact/?locale=${language}`;  console.log(pagesUrl);

  // let pagesUrl = `https://spraakteknik.herokuapp.com/api/pages/?locale=${language}&sort=SortOrder:asc`;
  // let startUrl = `https://spraakteknik.herokuapp.com/api/start/?locale=${language}`;
  // let pricingUrl = `https://spraakteknik.herokuapp.com/api/pricing/?locale=${language}`;
  // let contactUrl = `https://spraakteknik.herokuapp.com/api/contact/?locale=${language}`;

  

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
