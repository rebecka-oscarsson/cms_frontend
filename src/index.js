import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
export { default as Nav } from "./components/Nav";
export { default as LanguageDropdown } from "./components/LanguageDropdown";
export { default as Start } from "./components/Start";
export { default as Link } from "./components/Link";
export { default as Main } from "./components/Main";
export { default as useFetch } from "./hooks/useFetch";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
