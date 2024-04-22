import React, { useEffect } from 'react';
import ResponsiveAppBar from './components/ResponsiveAppBar';
import DefaultFooter from './components/DefaultFooter';
import ScrollTopButton from "./components/ScrollTopButton";
import './PostProductionServices.css'
import { Link } from 'react-router-dom'; // Import Link from react-router-do
import { useTranslation } from 'react-i18next'; // Import useTranslation hook



const PostProductionServices = () => {
    const { t } = useTranslation(); // Destructure t from useTranslation

    useEffect(() => {
        // Scroll to the top of the page when it loads
        window.scrollTo(0, 0);
    }, []); // This effect runs only once after the component mounts

    
    return (
        <div>
            <ResponsiveAppBar />
            <div className="content">
                <h1 className="title">{t('postProductionServices.title')}</h1>
                <p className="description">{t('postProductionServices.description')}</p>
                <h2 className="subtitle">{t('postProductionServices.subtitle')}</h2>
                <p className="description">{t('postProductionServices.platformSolutions')}</p>
                <h2 className="subtitle">{t('postProductionServices.readyToTransform')}</h2>
                <p className="description">{t('postProductionServices.contactUs')}</p>
            </div>
            <div className='cta-container'>
                <p className='cta-text'>{t('postProductionServices.ctaText')}</p>
                <Link to="/contact" className='cta-button'>{t('postProductionServices.ctaButton')}</Link>
            </div>
            <div className='deadSpace'></div>
            <DefaultFooter />
            <ScrollTopButton />
        </div>
    );
};

export default PostProductionServices;