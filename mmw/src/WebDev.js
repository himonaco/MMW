import React, { useEffect } from 'react';
import ResponsiveAppBar from './components/ResponsiveAppBar';
import MyCarousel from './components/MyCarousel';
import ContactForm from './components/ContactForm';
import './WebDev.css'; // Import the CSS file
import { createTheme, ThemeProvider } from '@mui/material/styles';
import DefaultFooter from './components/DefaultFooter';
import ScrollTopButton from "./components/ScrollTopButton";
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import { useTranslation } from 'react-i18next'; // Import useTranslation hook
import enData from './locales/en.json'; // Import English JSON data
import frData from './locales/fr.json'; // Import French JSON data

const theme = createTheme({
  palette: {
    primary: {
      main: '#000000',
    },
  },
});

function WebDev() {
  const { t, i18n } = useTranslation(); // Destructure t and i18n from useTranslation

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Determine which JSON data to use based on the current language
  const jsonData = i18n.language === 'fr' ? frData : enData;

  if (!jsonData.webDev) {
    return <div>Loading...</div>;
  }

  const { sections, ctaText, ctaButton } = jsonData.webDev;

  return (
    <ThemeProvider theme={theme}>
      <div className="webdev">
        <ResponsiveAppBar />

        <div className="content">
          {/* Render sections dynamically */}
          {sections && Object.values(sections).map((section, index) => (
            <section key={index} id={section.id}>
              <h2 className="title">{section.title}</h2>
              <p>{section.content}</p>
            </section>
          ))}
        </div>

        <div className='cta-container'>
          <p className='cta-text'>{ctaText}</p>
          <Link to="/contact" className='cta-button'>{ctaButton}</Link>
        </div>
        
        <div className='deadSpace'></div>
        
        <DefaultFooter />
        <ScrollTopButton />
      </div>
    </ThemeProvider>
  );
}

export default WebDev;
