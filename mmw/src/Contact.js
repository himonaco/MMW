import React from 'react';
import { Helmet } from 'react-helmet';
import ContactForm from './components/ContactForm';
import './Contact.css';
import ResponsiveAppBar from './components/ResponsiveAppBar';
import DefaultFooter from "./components/DefaultFooter";
import { useTranslation } from 'react-i18next'; // Import useTranslation hook
import enData from './locales/en.json'; // Import English JSON data
import frData from './locales/fr.json'; // Import French JSON data

const Contact = () => {
    const { t, i18n } = useTranslation(); // Destructure t and i18n from useTranslation

    // Determine which JSON data to use based on the current language
    const jsonData = i18n.language === 'fr' ? frData : enData;

    if (!jsonData.contact) {
        return <div>Loading...</div>;
    }

    const { title, contactContent } = jsonData.contact;

    return (
        <div>
            {/* Add Helmet for meta tags */}
            <Helmet>
                <title>{title} - Monaco Media Works</title>
                <meta name="description" content="Get in touch with Monaco Media Works. We offer professional media services including drone content creation, social media management, post production services, and web development." />
                <meta name="keywords" content="contact, Monaco Media Works, media services, drone content, social media management, post production, web development" />
                <meta property="og:title" content={`${title} - Monaco Media Works`} />
                <meta property="og:description" content="Contact Monaco Media Works for professional media services. We are here to assist you with your media needs." />
                <link rel="canonical" href="https://www.monacomediaworks.com/contact" />
            </Helmet>
            
            <ResponsiveAppBar />
            <div className='contact'>
                <h1 className='title'>{title}</h1>
                <div className='contact-content'>
                    <div className='contact-info'>
                        {contactContent.map((paragraph, index) => (
                            <p className='text' key={index}>{paragraph}</p>
                        ))}
                        {/* Add any additional contact information here */}
                    </div>
                    <div className='form'>
                        <ContactForm />
                    </div>
                </div>
            </div>
            <DefaultFooter />
        </div>
    );
};

export default Contact;
