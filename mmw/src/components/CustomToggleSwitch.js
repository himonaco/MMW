// CustomToggleSwitch.js

import React, { useState } from "react";
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
      {image && <img src={image} alt="Toggle" className="toggle-image" />}
      {label && <span className="label">{label}</span>}
      <div className={`toggle-switch ${isChecked ? "checked" : ""}`}>
        <div className="slider"></div>
      </div>
    </div>
  );
};

export default CustomToggleSwitch;
