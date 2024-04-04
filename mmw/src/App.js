import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import WebDev from './WebDev';
import Drone from './Drone';
import LandingPage from './LandingPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/webdev" element={<WebDev />} />
        <Route path="/drone" element={<Drone />} />
        <Route path="/" element={<LandingPage />} />
      </Routes>
    </Router>
  );
}

export default App;
