import React, { useEffect } from "react";
import ResponsiveAppBar from "./components/ResponsiveAppBar";
import "./Drone.css"; // Import the new CSS file
import DefaultFooter from "./components/DefaultFooter";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import ScrollTopButton from "./components/ScrollTopButton";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import { useTranslation } from "react-i18next"; // Import useTranslation hook

const theme = createTheme({
  palette: {
    primary: {
      main: "#000000",
    },
  },
});

function DroneContentCreation() {
  const { t } = useTranslation(); // Destructure t from useTranslation

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <div className="drone">
        <ResponsiveAppBar />

        <div className="content">
          {/* Drone Services Section */}
          <section id="services">
          <h2 className="title">{t("droneContentCreation.title")}</h2>

            <h3 className="description">
              {t("droneContentCreation.description")}
            </h3>
            <ul className="services-list">
              {t("droneContentCreation.services", { returnObjects: true }).map(
                (service, index) => (
                  <li key={index} className="service-item">
                    {" "}
                    <strong>{service.title}</strong>
                    <br />
                    {service.description}
                  </li>
                )
              )}
            </ul>
            <h2 className="title">
              {t("droneContentCreation.whyChooseUs")}
            </h2>
            <p className="why-us">{t("droneContentCreation.whyUs")}</p>
          </section>

          {/* Contact Section */}
          <div className="cta-container">
            <p className="cta-text">{t("droneContentCreation.ctaText")}</p>
            <Link to="/contact" className="cta-button">
              {t("droneContentCreation.ctaButton")}
            </Link>
          </div>
          <div className="deadSpace"></div>
        </div>

        <DefaultFooter />
        <ScrollTopButton />
      </div>
    </ThemeProvider>
  );
}

export default DroneContentCreation;
