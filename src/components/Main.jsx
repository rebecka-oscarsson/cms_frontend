import React from "react";
import "./Main.module.css";
import { Routes, Route } from "react-router-dom";
import { Start, Pricing, Contact, Page } from "../index";

function Main({
  content,
  loading,
  error,
  startContent,
  startLoading,
  startError,
  pricingContent,
  pricingLoading,
  pricingError,
  contactContent,
  contactLoading,
  contactError,
  language,
}) {
  
  // const urlLanguage = useLocation().pathname.split('/')[1];
  // console.log(urlLanguage)
  return (
    <main>
      <Routes>
        <Route
          path={`/`}
          element={
            <Start
              content={startContent}
              loading={startLoading}
              error={startError}
            />
          }
        />
        <Route
          path={`/pricing`}
          element={
            <Pricing
              content={pricingContent}
              loading={pricingLoading}
              error={pricingError}
            />
          }
        />
        <Route
          path={`/contact`}
          element={
            <Contact
              content={contactContent}
              loading={contactLoading}
              error={contactError}
            />
          }
        />
        {content && Object.keys(content).length > 0
          ? content.map((page, index) => (
              <Route
                path={`/${page.attributes.Page_id}`}
                key={index.toString()}
                element={
                  <Page
                    pageName={page.attributes.Page_name}
                    content={page.attributes.Content}
                    loading={loading}
                    error={error}
                  />
                }
              />
            ))
          : null}
      </Routes>
    </main>
  );
}

export default Main;
