import React from 'react';
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
