import React from "react";
import styles from "./LanguageSelect.module.scss";

function LanguageSelect({ setLanguage, language, closeMobileMenu }) {
  const languages = [
    { code: "en", name: "english" },
    { code: "sv", name: "svenska" },
  ];

  const handleChange = (e) => {setLanguage(e.target.value); closeMobileMenu()};

  return (
      <div className ={styles.languageselect}>
      <label htmlFor="languages">Site language </label>
      <select
        name="languages"
        id="languages"
        onChange={(e) => handleChange(e)}
        value={language}
      >
        {languages.map((languageObject, index) => (
          <option value={languageObject.code} key={index.toString()} id={languageObject.code}>
            {languageObject.name}
          </option>
        ))}
      </select>
  </div>
  );
}

export default LanguageSelect;
