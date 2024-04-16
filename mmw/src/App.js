import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import WebDev from "./WebDev";
import ContentCreation from "./ContentCreation";
import DroneContentCreation from "./DroneContentCreation";
import StrategicScocialMediaManagement from "./StrategicSocialMediaManagement";
import PostProductionServices from "./PostProductionServices";
import Contact from "./Contact";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ContentCreation />} />
        <Route path="/webdev" element={<WebDev />} />
        <Route
          path="/dronecontentcreation"
          element={<DroneContentCreation />}
        />
        <Route
          path="/strategicsocialmediamanagement"
          element={<StrategicScocialMediaManagement />}
        />
        <Route
          path="/postproductionservices"
          element={<PostProductionServices />}
        />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
