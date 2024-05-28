import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import ResponsiveAppBar from './components/ResponsiveAppBar';
import DefaultFooter from './components/DefaultFooter';
import ScrollTopButton from "./components/ScrollTopButton";
import './PostProductionServices.css';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import { useTranslation } from 'react-i18next'; // Import useTranslation hook

const PostProductionServices = () => {
    const { t } = useTranslation(); // Destructure t from useTranslation

    useEffect(() => {
        // Scroll to the top of the page when it loads
        window.scrollTo(0, 0);
    }, []); // This effect runs only once after the component mounts

    return (
        <div>
            {/* Add Helmet for meta tags */}
            <Helmet>
                <title>{t('postProductionServices.title')} - Monaco Media Works</title>
                <meta name="description" content={t('postProductionServices.description')} />
                <meta name="keywords" content="post production services, media services, Monaco Media Works, video editing, sound design, visual effects" />
                <meta property="og:title" content={`${t('postProductionServices.title')} - Monaco Media Works`} />
                <meta property="og:description" content={t('postProductionServices.description')} />
                <link rel="canonical" href="https://www.monacomediaworks.com/postproductionservices" />
            </Helmet>

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
