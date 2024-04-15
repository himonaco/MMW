import React from 'react';
import ResponsiveAppBar from './components/ResponsiveAppBar';
import DefaultFooter from './components/DefaultFooter';
import ScrollTopButton from "./components/ScrollTopButton";

function StrategicSocialMediaManagement() {
    return (
        <div>
            <ResponsiveAppBar />
            {/* Your component content goes here */}
            <DefaultFooter />
      <ScrollTopButton />
        </div>
    );
}

export default StrategicSocialMediaManagement;