import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { Box } from '@mui/material';
import { Toaster, toast } from 'react-hot-toast';
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
