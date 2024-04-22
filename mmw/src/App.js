// App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useTranslation } from 'react-i18next'; // Import useTranslation hook
import ContentCreation from './ContentCreation';
import WebDev from './WebDev';
import DroneContentCreation from './DroneContentCreation';
import StrategicSocialMediaManagement from './StrategicSocialMediaManagement';
import PostProductionServices from './PostProductionServices';
import Contact from './Contact';

function App() {
  const [currentLanguage, setCurrentLanguage] = useState('en'); // Default language is English
  const { i18n } = useTranslation(); // Access i18n instance

  const toggleLanguage = () => {
    const newLanguage = currentLanguage === 'en' ? 'fr' : 'en';
    setCurrentLanguage(newLanguage);
    i18n.changeLanguage(newLanguage); // Change language using i18n instance
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<ContentCreation />} />
        <Route path="/webdev" element={<WebDev />} />
        <Route path="/dronecontentcreation" element={<DroneContentCreation />} />
        <Route
          path="/strategicsocialmediamanagement"
          element={<StrategicSocialMediaManagement handleLanguageToggle={toggleLanguage} />}
        />
        <Route path="/postproductionservices" element={<PostProductionServices />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;