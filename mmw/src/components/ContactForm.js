import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { Box } from '@mui/material';
import { Toaster, toast } from 'react-hot-toast';
import { Helmet } from 'react-helmet'; // Import Helmet
import './ContactForm.css'; // Import the CSS file
import { useTranslation } from 'react-i18next'; // Import useTranslation hook

const ContactForm = () => {
  const { t } = useTranslation(); // Destructure t from useTranslation

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const serviceId = 'service_2jhe6pa';
    const templateId = 'template_xmpj65j';
    const userId = 'DCJzPNHgfQwGIDROc';

    emailjs.send(serviceId, templateId, formData, userId)
      .then((response) => {
        console.log('Email sent successfully:', response);
        toast.success(t('contactForm.successMessage'), { duration: 4000, icon: '🚀', position: 'bottom-center' });
      })
      .catch((error) => {
        console.error('Email sending failed:', error);
        toast.error(t('contactForm.errorMessage'), { duration: 4000, icon: '❌', position: 'bottom-center' });
      });

    setFormData({
      name: '',
      email: '',
      message: '',
    });
  };

  return (
    <Box className="container">
      {/* Add Helmet for meta tags */}
      <Helmet>
        <title>Contact Us - Monaco Media Works</title>
        <meta name="description" content="Get in touch with Monaco Media Works for any inquiries, project discussions, or collaborations. We look forward to hearing from you." />
        <meta name="keywords" content="Monaco Media Works, contact, media, projects, collaborations" />
        <meta property="og:title" content="Contact Us - Monaco Media Works" />
        <meta property="og:description" content="Reach out to Monaco Media Works for your media needs. Let's discuss your next project." />
        <meta property="og:url" content="https://www.monacomediaworks.com/contact" />
        <meta property="og:image" content="https://www.monacomediaworks.com/images/contact-banner.jpg" /> {/* Assuming you have an appropriate image */}
        <link rel="canonical" href="https://www.monacomediaworks.com/contact" />
      </Helmet>
      
      <Toaster />
      <form className="form" onSubmit={handleSubmit}>
        <div className="input-group">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder={t('contactForm.namePlaceholder')}
            required
            className="input"
          />
        </div>
        <div className="input-group">
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder={t('contactForm.emailPlaceholder')}
            required
            className="input"
          />
        </div>
        <div className="input-group">
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder={t('contactForm.messagePlaceholder')}
            required
            className="textarea"
          />
        </div>
        <button type="submit" className="button">{t('contactForm.sendButton')}</button>
      </form>
    </Box>
  );
};

export default ContactForm;
