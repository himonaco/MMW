import React from "react";
import { Helmet } from "react-helmet";
import ResponsiveAppBar from "./components/ResponsiveAppBar";
import ActionAreaCard from "./components/ActionAreaCard";
import DefaultFooter from "./components/DefaultFooter";
import ScrollTopButton from "./components/ScrollTopButton";
import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next'; // Import useTranslation hook
import "./ContentCreation.css";

function ContentCreation() {
  const { t } = useTranslation(); // Destructure t from useTranslation

  // Assuming contentCreation is fetched from an API or imported from a JSON file
  const contentCreation = {
    title: t("contentCreation.title"),
    description: t("contentCreation.description"),
    offerings: t("contentCreation.offerings", { returnObjects: true }),
    ctaText: t("contentCreation.ctaText"),
    ctaButton: t("contentCreation.ctaButton")
  };

  return (
    <div className="content-creation-page">
      {/* Add Helmet for meta tags */}
      <Helmet>
        <title>{contentCreation.title} - Monaco Media Works</title>
        <meta name="description" content={contentCreation.description} />
        <meta name="keywords" content="content creation, media services, Monaco Media Works, professional media, drone content, social media management" />
        <meta property="og:title" content={`${contentCreation.title} - Monaco Media Works`} />
        <meta property="og:description" content={contentCreation.description} />
        <link rel="canonical" href="https://www.monacomediaworks.com/content-creation" />
      </Helmet>
      
      <ResponsiveAppBar />

      <div className="intro">
        <h1 className="title">{contentCreation.title}</h1>
        <p className="description">{contentCreation.description}</p>
      </div>

      <div className="offerings">
        {contentCreation.offerings.map((offering, index) => (
          <div className="card" key={index}>
            <ActionAreaCard
              title={offering.title}
              description={offering.descriptions}
              link={offering.link}
              image={offering.image}
            />
          </div>
        ))}
      </div>

      <div className='cta-container'>
        <p className='cta-text'>{contentCreation.ctaText}</p>
        <Link to="/contact" className='cta-button'>{contentCreation.ctaButton}</Link>
      </div>

      <DefaultFooter />
      <ScrollTopButton />
    </div>
  );
}

export default ContentCreation;
