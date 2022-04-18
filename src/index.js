import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
export { default as Nav } from "./components/navigation/Nav";
export { default as LanguageSelect } from "./components/navigation/LanguageSelect";
export { default as NavLink } from "./components/navigation/NavLink";
export { default as Start } from "./components/views/Start";
export { default as PageRoutes } from "./components/views/PageRoutes";
export { default as Contact } from "./components/views/Contact";
export { default as Pricing } from "./components/views/Pricing";
export { default as Page } from "./components/views/Page";
export { default as Spinner } from "./components/views/Spinner";
export { default as Error } from "./components/views/Error";
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
