import React from "react";
import styles from "./Main.module.css";
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
}) {
  if (
    content &&
    startContent &&
    pricingContent &&
    contactContent &&
    Object.keys(content).length > 0 &&
    Object.keys(startContent).length > 0 &&
    Object.keys(contactContent).length > 0 &&
    Object.keys(pricingContent).length > 0
  ) {
    return (
      <main className={styles.main}>
        <Routes>
          <Route
            exact
            path="/"
            element={
              <Start
                content={startContent.attributes}
                loading={startLoading}
                error={startError}
              />
            }
          />
          <Route
            path="pricing"
            element={
              <Pricing
                content={pricingContent.attributes}
                loading={pricingLoading}
                error={pricingError}
              />
            }
          />
          <Route
            path="contact"
            element={
              <Contact
                content={contactContent.attributes}
                loading={contactLoading}
                error={contactError}
              />
            }
          />
          {content.map((page, index) => (
            <Route
              path={
                page.attributes.Page_id === "start"
                  ? "/"
                  : "/" + page.attributes.Page_id
              }
              key={index.toString()}
              element={
                <Page
                  pageName={page.attributes.Page_name}
                  content={page.attributes.Content}
                  loading={loading}
                  error={error}
                />
                //lägg till /språk
              }
            />
          ))}
        </Routes>
      </main>
    );
  } else return null;
}

export default Main;
