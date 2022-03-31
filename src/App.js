import { useState, useEffect } from "react";
import "./normalize.css";
import "./App.css";
import { useFetch, Main, Nav } from "./index";

function App() {
  const [language, setLanguage] = useState(
    localStorage.getItem("language") || "en"
  );
  let url = `http://localhost:1337/api/pages/?locale=${language}&sort=SortOrder:asc`;
  const [content, loading, error] = useFetch(url);

  useEffect(() => {
    localStorage.setItem("language", language);
  }, [language]);

  return (
    <>
      <Nav setLanguage={setLanguage} language={language} content={content}/>
      <Main 
        content={content}
        loading={loading}
        error={error}/>
    </>
  );
}

export default App;
