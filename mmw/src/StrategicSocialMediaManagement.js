import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import ResponsiveAppBar from "./components/ResponsiveAppBar";
import DefaultFooter from "./components/DefaultFooter";
import ScrollTopButton from "./components/ScrollTopButton";
import { useTranslation } from "react-i18next"; // Import useTranslation hook
import { Link } from "react-router-dom";
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
      {/* Add Helmet for meta tags */}
      <Helmet>
        <title>{t("strategicSocialMediaManagement.title")} - Monaco Media Works</title>
        <meta name="description" content={t("strategicSocialMediaManagement.description")} />
        <meta name="keywords" content="social media management, strategic social media, Monaco Media Works, social media strategy, digital marketing" />
        <meta property="og:title" content={`${t("strategicSocialMediaManagement.title")} - Monaco Media Works`} />
        <meta property="og:description" content={t("strategicSocialMediaManagement.description")} />
        <link rel="canonical" href="https://www.monacomediaworks.com/strategicsocialmediamanagement" />
      </Helmet>

      <ResponsiveAppBar handleLanguageToggle={handleLanguageToggle} />
      <div className="content">
        <h1 className="title">{t("strategicSocialMediaManagement.title")}</h1>
        <p className="description">{t("strategicSocialMediaManagement.description")}</p>
        <h2 className="subtitle">{t("strategicSocialMediaManagement.subtitleCrafting")}</h2>
        <p className="description">{t("strategicSocialMediaManagement.descriptionCrafting")}</p>
        <h2 className="subtitle">{t("strategicSocialMediaManagement.subtitleElevate")}</h2>
        <p className="description">{t("strategicSocialMediaManagement.descriptionElevate")}</p>
        <h2 className="subtitle">{t("strategicSocialMediaManagement.subtitleEngage")}</h2>
        <p className="description">{t("strategicSocialMediaManagement.descriptionEngage")}</p>
        <h2 className="subtitle">{t("strategicSocialMediaManagement.subtitleComprehensive")}</h2>
        <p className="description">{t("strategicSocialMediaManagement.descriptionComprehensive")}</p>
        <h2 className="subtitle">{t("strategicSocialMediaManagement.subtitleReady")}</h2>
        <p className="description">{t("strategicSocialMediaManagement.descriptionReady")}</p>
      </div>
      <div className="cta-container">
        <p className="cta-text">{t("strategicSocialMediaManagement.ctaText")}</p>
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
