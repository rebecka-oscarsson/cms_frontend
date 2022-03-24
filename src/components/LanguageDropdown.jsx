import React from "react";

function LanguageDropdown({ setLanguage, language }) {
  const languages = [
    { code: "en", name: "english" },
    { code: "sv", name: "svenska" },
    { code: "nl", name: "nederlands" },
    { code: "fr", name: "français" },
  ];
  return (
    <div>
      <label htmlFor="languages">Show site in </label>
      <select
        name="languages"
        id="languages"
        onChange={(e) => setLanguage(e.target.value)}
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
