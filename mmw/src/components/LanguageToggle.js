import React from 'react';
import { Helmet } from 'react-helmet';

function LanguageToggle({ languages, selectedLanguage, onChangeLanguage }) {
  return (
    <div>
      {/* Add Helmet for meta tags */}
      <Helmet>
        <title>Monaco Media Works</title>
        <meta name="description" content="Choose your preferred language to browse Monaco Media Works content." />
        <meta name="keywords" content="Monaco Media Works, language selection, multilingual, localization" />
        <meta property="og:title" content="Select Language - Monaco Media Works" />
        <meta property="og:description" content="Choose your preferred language to browse Monaco Media Works content." />
        <link rel="canonical" href="https://www.monacomediaworks.com/language-toggle" />
      </Helmet>
      
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
