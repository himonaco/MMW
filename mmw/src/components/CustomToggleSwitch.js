import React, { useState } from "react";
import { Helmet } from "react-helmet";
import "./CustomToggleSwitch.css";

const CustomToggleSwitch = ({ onChange, checked, label, image }) => {
  const [isChecked, setIsChecked] = useState(checked);

  const handleChange = () => {
    const newChecked = !isChecked;
    setIsChecked(newChecked);
    onChange(newChecked);
  };

  return (
    <div className="custom-toggle-switch" onClick={handleChange}>
      {/* Add Helmet for meta tags */}
      <Helmet>
        <title>{label ? `${label} - Toggle Switch` : 'Custom Toggle Switch'}</title>
        <meta name="description" content={label ? `This is a custom toggle switch for ${label}.` : 'This is a custom toggle switch component.'} />
        <meta name="keywords" content="React, Toggle Switch, Custom Component, UI" />
        <meta property="og:title" content={label ? `${label} - Toggle Switch` : 'Custom Toggle Switch'} />
        <meta property="og:description" content={label ? `This is a custom toggle switch for ${label}.` : 'This is a custom toggle switch component.'} />
        {image && <meta property="og:image" content={image} />}
        <link rel="canonical" href="https://www.monacomediaworks.com/toggle-switch" />
      </Helmet>
      
      {image && <img src={image} alt="Toggle" className="toggle-image" />}
      {label && <span className="label">{label}</span>}
      <div className={`toggle-switch ${isChecked ? "checked" : ""}`}>
        <div className="slider"></div>
      </div>
    </div>
  );
};

export default CustomToggleSwitch;
