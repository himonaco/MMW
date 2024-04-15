import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import WebDev from './WebDev';
import Drone from './Drone';
import LandingPage from './LandingPage';
import ContentCreation from './ContentCreation';
import DroneContentCreation from './DroneContentCreation';
import StrategicScocialMediaManagement from './StrategicSocialMediaManagement';
import PostProductionServices from './PostProductionServices';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/webdev" element={<WebDev />} />
        <Route path="/drone" element={<Drone />} />
        <Route path="/" element={<ContentCreation />} />
        <Route path='/dronecontentcreation' element={<DroneContentCreation />} />
        <Route path='/strategicsocialmediamanagement' element={<StrategicScocialMediaManagement />} />
        <Route path='/postproductionservices' element={<PostProductionServices />} />
        {/* <Route path="/" element={<LandingPage />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
