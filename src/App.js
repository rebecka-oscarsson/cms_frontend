import { useState, useEffect } from "react";
import "./normalize.css";
import "./App.scss";
import { useFetch, PageRoutes, Nav } from "./index";
import { useSearchParams } from "react-router-dom";
import { Helmet, HelmetProvider } from "react-helmet-async";

function App() {
  //gets the url parameters
  let [searchParams, setSearchParams] = useSearchParams();

  //first time app renders set language to the one from url, localstorage or english
  const [language, setLanguage] = useState(
    searchParams.get("lang") || localStorage.getItem("language") || "en"
  );

  let strapiUrl = process.env.REACT_APP_STRAPI_URL; //for testing with local instance of strapi specified in env-file
  //strapiUrl = remoteUrl; //for testing the project locally using data from remote cms, comment out if using local cms

  let customPagesUrl = `${strapiUrl}pages/?sort=SortOrder&locale=${language}`;
  let startUrl = `${strapiUrl}start/?locale=${language}`;
  let pricingUrl = `${strapiUrl}pricing/?locale=${language}`;
  let contactUrl = `${strapiUrl}contact/?locale=${language}`;

  const [startContent, startLoading, startError] = useFetch(startUrl);
  const [pricingContent, pricingLoading, pricingError] = useFetch(pricingUrl);
  const [contactContent, contactLoading, contactError] = useFetch(contactUrl);
  const [customPagesContent, customPagesLoading, customPagesError] = useFetch(customPagesUrl);


  useEffect(() => {
    localStorage.setItem("language", language);
    if (searchParams.get("lang") !== language) {
      setSearchParams({ lang: language });
    }
  }, [language, setSearchParams, searchParams]);

  return (
    <HelmetProvider>
      <>
        <Helmet htmlAttributes={{ lang: language }}></Helmet>
        <Nav
          setLanguage={setLanguage}
          language={language}
          customPagesContent={customPagesContent}
          startContent={startContent}
          contactContent={contactContent}
          pricingContent={pricingContent}
        />
        <PageRoutes
          customPagesContent={customPagesContent}
          customPagesLoading={customPagesLoading}
          customPagesError={customPagesError}
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
    </HelmetProvider>
  );
}

export default App;
