import React from 'react';
import ResponsiveAppBar from './components/ResponsiveAppBar';
import MyCarousel from './components/MyCarousel';
import ContactForm from './components/ContactForm';
import './WebDev.css'; // Import the CSS file
import Fab from '@mui/material/Fab';
import NavigationIcon from '@mui/icons-material/Navigation';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import DefaultFooter from './components/DefaultFooter';
import ScrollTopButton from "./components/ScrollTopButton";



const theme = createTheme({
  palette: {
    primary: {
      main: '#000000',
    },
  },
});

function WebDev() {

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <ThemeProvider theme={theme}>
    <div className="webdev">
      <ResponsiveAppBar />

      <div className="content">
         {/* Web Development Services Section */}
         <h1 id="services" className="title">Web Development Services</h1>
        <p>At Monaco Media Works, we specialize in providing comprehensive web development services tailored to meet the unique needs of your business. With a focus on delivering cutting-edge solutions, we offer a range of services to enhance your online presence and drive success.</p>
        
        <h2>Tailored Solutions for Your Business</h2>
        <p>Our expert team of developers is proficient in creating custom websites from scratch, ensuring that each site is uniquely designed to reflect your brand identity and goals. From simple informational websites to complex e-commerce platforms, we have the expertise to bring your vision to life.</p>
        
        <h2>Website Building</h2>
        <p>Our expert team of developers is proficient in creating custom websites from scratch, ensuring that each site is uniquely designed to reflect your brand identity and goals. From simple informational websites to complex e-commerce platforms, we have the expertise to bring your vision to life.</p>
        
        <h2>Application Development</h2>
        <p>In today's digital landscape, having a mobile application can significantly enhance your business's reach and engagement. We develop custom applications for both iOS and Android platforms, offering seamless user experiences and powerful functionalities.</p>
        
        <h2>Server Solutions</h2>
        <p>Reliable server infrastructure is crucial for the performance and security of your online presence. We provide robust server solutions tailored to your business requirements, ensuring optimal performance, scalability, and data protection.</p>
        
        <h2>Database Management</h2>
        <p>Efficient management of your databases is essential for maintaining data integrity and ensuring seamless operations. Our database management services encompass everything from database design and optimization to data migration and maintenance.</p>
        
        <h2>E-commerce Solutions</h2>
        <p>For businesses looking to expand their online sales channels, we offer comprehensive e-commerce solutions. From setting up online stores to integrating payment gateways and optimizing product listings, we help you establish a successful online sales platform.</p>
        
        <h2>Ongoing Support and Maintenance</h2>
        <p>Our commitment to your success extends beyond the initial development phase. We provide ongoing support and maintenance services to ensure that your website or application continues to perform optimally and remains secure against evolving threats.</p>
        
        <h2>Get Started Today</h2>
        <p>Ready to take your online presence to the next level? Contact us today to discuss your web development needs and discover how we can help your business thrive in the digital landscape.</p>

        {/* Project Section */}
        <h2 id="projects" className="projects-title">Projects</h2>
        {/* Add your project content here */}
        <MyCarousel />

        {/* Testimonials Section */}

        {/* Contact Section */}
        <h2 id="contact" className="contact-title">Contact Us</h2>
        {/* Add your contact content here */}
        <ContactForm />
      </div>
      <DefaultFooter />
      <ScrollTopButton />
      
      </div>
    </ThemeProvider>
  );
}

export default WebDev;