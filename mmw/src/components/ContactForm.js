import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import Box from '@mui/material/Box';

const containerStyle = {
  width: '100%',
  maxWidth: '600px',
  margin: '0 auto',
  padding: '20px',
  borderRadius: '10px',
  backgroundColor: '#fff',
  boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
};

const formStyle = {
  width: '100%',
};

const inputStyle = {
  width: '100%',
  padding: '10px',
  fontSize: '16px',
  border: '1px solid #ccc',
  borderRadius: '4px',
  boxSizing: 'border-box',
};

const buttonStyle = {
  width: '100%',
  padding: '10px',
  fontSize: '16px',
  backgroundColor: '#007bff',
  color: '#fff',
  border: 'none',
  borderRadius: '4px',
  cursor: 'pointer',
  transition: 'background-color 0.3s ease',
};

const ContactForm = () => {
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
    // Replace these values with your actual Email.js service ID, template ID, and user ID
    const serviceId = 'service_2jhe6pa';
    const templateId = 'template_xmpj65j';
    const userId = 'DCJzPNHgfQwGIDROc';

    emailjs.send(serviceId, templateId, formData, userId)
      .then((response) => {
        console.log('Email sent successfully:', response);
        // Optionally, you can add code here to show a success message to the user
      })
      .catch((error) => {
        console.error('Email sending failed:', error);
        // Optionally, you can add code here to show an error message to the user
      });

    // Clear form data after submission
    setFormData({
      name: '',
      email: '',
      message: '',
    });
  };

  return (
    <Box sx={containerStyle}>
      <form style={formStyle} onSubmit={handleSubmit}>
        <div style={{ marginBottom: '20px' }}>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            style={inputStyle}
          />
        </div>
        <div style={{ marginBottom: '20px' }}>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            style={inputStyle}
          />
        </div>
        <div style={{ marginBottom: '20px' }}>
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            style={{ ...inputStyle, height: '100px' }}
          />
        </div>
        <button type="submit" style={buttonStyle}>Send Message</button>
      </form>
    </Box>
  );
};

export default ContactForm;
