import React, { useEffect } from "react";
import ResponsiveAppBar from "./components/ResponsiveAppBar";
import DefaultFooter from "./components/DefaultFooter";
import ScrollTopButton from "./components/ScrollTopButton";
import { useTranslation } from "react-i18next"; // Import useTranslation hook
import { Link } from "react-router-dom";
import "./locales/en.json";
import "./locales/fr.json";
import "./StrategicSocialMediaManagement.css";

function StrategicSocialMediaManagement() {
  const { t, i18n } = useTranslation(); // Initialize useTranslation hook

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Function to handle language toggle
  const handleLanguageToggle = () => {
    const newLanguage = i18n.language === "en" ? "fr" : "en";
    i18n.changeLanguage(newLanguage);
  };

  return (
    <div>
      <ResponsiveAppBar handleLanguageToggle={handleLanguageToggle} />{" "}
      <div className="content">
        <h1 className="title">{t("strategicSocialMediaManagement.title")}</h1>
        <p className="description">
          {t("strategicSocialMediaManagement.description")}
        </p>
        <h2 className="subtitle">
          {t("strategicSocialMediaManagement.subtitleCrafting")}
        </h2>
        <p className="description">
          {t("strategicSocialMediaManagement.description")}
        </p>
        <h2 className="subtitle">
          {t("strategicSocialMediaManagement.subtitleElevate")}
        </h2>
        <p className="description">
          {t("strategicSocialMediaManagement.description")}
        </p>
        <h2 className="subtitle">
          {t("strategicSocialMediaManagement.subtitleEngage")}
        </h2>
        <p className="description">
          {t("strategicSocialMediaManagement.description")}
        </p>
        <h2 className="subtitle">
          {t("strategicSocialMediaManagement.subtitleComprehensive")}
        </h2>
        <p className="description">
          {t("strategicSocialMediaManagement.description")}
        </p>
        <h2 className="subtitle">
          {t("strategicSocialMediaManagement.subtitleReady")}
        </h2>
        <p className="description">
          {t("strategicSocialMediaManagement.description")}
        </p>
      </div>
      <div className="cta-container">
        <p className="cta-text">
          {t("strategicSocialMediaManagement.ctaText")}
        </p>
        <Link to="/contact" className="cta-button">
          {t("strategicSocialMediaManagement.ctaButton")}
        </Link>
      </div>
      <div className="deadSpace"></div>
      <DefaultFooter />
      <ScrollTopButton />
    </div>
  );
}

export default StrategicSocialMediaManagement;
