import React from "react";
import { Routes, Route } from "react-router-dom";
import { Start, Pricing, Contact, Page, Error, Spinner } from "../../index";

function PageRoutes({
  customPagesContent,
  customPagesLoading,
  customPagesError,
  startContent,
  startLoading,
  startError,
  pricingContent,
  pricingLoading,
  pricingError,
  contactContent,
  contactLoading,
  contactError,
  language
}) {
  
  return (
    <>
      <Routes>
        <Route
          path={`/`}
          element={
            <Start
              content={startContent}
              loading={startLoading}
              error={startError}
              language={language}
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
        {customPagesContent && Object.keys(customPagesContent).length > 0
          ? customPagesContent.map((page, index) => (
              <Route
                path={`/${page.attributes.Page_id}`}
                key={index.toString()}
                element={
                  <Page
                    pageName={page.attributes.Page_name}
                    content={page.attributes.Content}
                    customPagesLoading={customPagesLoading}
                    customPagesError={customPagesError}
                  />
                }
              />
            ))
          : null}
          {customPagesContent && Object.keys(customPagesContent).length > 0
          ? <Route path="*" element={<Error />} />: <Route path="*" element={<Spinner />} />}
      </Routes>
    </>
  );
}

export default PageRoutes;
