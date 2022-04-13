import React from "react";

function LanguageDropdown({ setLanguage, language, closeMobileMenu }) {
  const languages = [
    { code: "en", name: "english" },
    { code: "sv", name: "svenska" },
    { code: "nl", name: "nederlands" },
    { code: "fr", name: "français" },
  ];

  const handleChange = (e) => {setLanguage(e.target.value); closeMobileMenu()};

  return (
    <div>
      <label htmlFor="languages">Show site in </label>
      <select
        name="languages"
        id="languages"
        onChange={(e) => handleChange(e)}
        value={language}
      >
        {languages.map((languageObject, index) => (
          <option value={languageObject.code} key={index.toString()}>
            {languageObject.name}
          </option>
        ))}
      </select>
    </div>
  );
}

export default LanguageDropdown;
