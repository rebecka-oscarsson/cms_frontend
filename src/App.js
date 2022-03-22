import { useState, useEffect } from "react";
import "./normalize.css";
import "./App.css";
import {useFetch,
  Header,
  Start,
  Main,
  Nav 
} from "./index";

function App() {
  const [language, setLanguage] = useState("");

  return (
    <>
      <Nav />
      <Start />     
      <Main />      
    </>
  );
}

export default App;
