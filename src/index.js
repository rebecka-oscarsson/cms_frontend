import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
export { default as Nav } from "./components/Nav";
export { default as LanguageDropdown } from "./components/LanguageDropdown";
export { default as Start } from "./components/Start";
export { default as Link } from "./components/NavLink";
export { default as Main } from "./components/Main";
export { default as Pricing } from "./components/Pricing";
export { default as About } from "./components/About";
export { default as Contact } from "./components/Contact";
export { default as useFetch } from "./hooks/useFetch";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <App />
  </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
