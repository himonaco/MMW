// App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';
import ContentCreation from './ContentCreation';
import WebDev from './WebDev';
import DroneContentCreation from './DroneContentCreation';
import StrategicSocialMediaManagement from './StrategicSocialMediaManagement';
import PostProductionServices from './PostProductionServices';
import Contact from './Contact';

function App() {
  const [currentLanguage, setCurrentLanguage] = useState('en');
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLanguage = currentLanguage === 'en' ? 'fr' : 'en';
    setCurrentLanguage(newLanguage);
    i18n.changeLanguage(newLanguage);
  };

  return (
    <Router>
      <Helmet>
        <title>Monaco Media Works - Professional Media Services</title>
        <meta name="description" content="Monaco Media Works offers professional media services including drone content creation, social media management, post production services, and web development." />
      </Helmet>
      <Routes>
        <Route path="/" element={<ContentCreation />} />
        <Route path="/webdev" element={<WebDev />} />
        <Route path="/dronecontentcreation" element={<DroneContentCreation />} />
        <Route path="/strategicsocialmediamanagement" element={<StrategicSocialMediaManagement />} />
        <Route path="/postproductionservices" element={<PostProductionServices />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
