import { useState, useEffect } from "react";
import "./normalize.css";
import "./App.css";
import { useFetch, Start, Main, Nav } from "./index";

function App() {
  const [language, setLanguage] = useState(
    localStorage.getItem("language") || "en"
  );
  let url = `http://localhost:1337/api/pages/?locale=${language}`;
  const [content, loading, error] = useFetch(url);

  useEffect(() => {
    localStorage.setItem("language", language);
  }, [language]);

  return (
    <>
      <Nav setLanguage={setLanguage} language={language} />
      <Start
        language={language}
        content={content}
        loading={loading}
        error={error}
      />
      <Main />
    </>
  );
}

export default App;
