// LanguageToggle.js
import React from 'react';

function LanguageToggle({ languages, selectedLanguage, onChangeLanguage }) {
  return (
    <div>
      <label htmlFor="language-select">Select Language:</label>
      <select
        id="language-select"
        value={selectedLanguage}
        onChange={(e) => onChangeLanguage(e.target.value)}
      >
        {languages.map((language) => (
          <option key={language.code} value={language.code}>
            {language.name}
          </option>
        ))}
      </select>
    </div>
  );
}

export default LanguageToggle;
