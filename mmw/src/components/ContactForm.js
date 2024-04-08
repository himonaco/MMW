import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { Box } from '@mui/material';
import { Toaster, toast } from 'react-hot-toast'; // Import Toaster and toast from react-hot-toast

const containerStyle = {
    width: '100%',
    maxWidth: '600px',
    margin: '0 auto',
    padding: '20px',
    borderRadius: '10px',
    backgroundColor: '#fff',
    boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
    position: 'relative',
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
    width: '60%',
    padding: '10px',
    fontSize: '16px',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
    marginLeft: 'auto',
    marginRight: 'auto',
    display: 'block',
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
      const serviceId = 'service_2jhe6pa';
      const templateId = 'template_xmpj65j';
      const userId = 'DCJzPNHgfQwGIDROc';
  
      emailjs.send(serviceId, templateId, formData, userId)
        .then((response) => {
          console.log('Email sent successfully:', response);
          toast.success('Message sent successfully!', { duration: 4000, icon: '🚀', position: 'bottom-center' });
        })
        .catch((error) => {
          console.error('Email sending failed:', error);
          toast.error('Message sending failed. Please try again later.', { duration: 4000, icon: '❌', position: 'bottom-center' });
        });
  
      setFormData({
        name: '',
        email: '',
        message: '',
      });
    };
  
    return (
      <Box sx={containerStyle}>
        <Toaster />
        <form style={formStyle} onSubmit={handleSubmit}>
          <div style={{ marginBottom: '20px' }}>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Name"
              required
              style={inputStyle}
            />
          </div>
          <div style={{ marginBottom: '20px' }}>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              required
              style={inputStyle}
            />
          </div>
          <div style={{ marginBottom: '20px' }}>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Message"
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
