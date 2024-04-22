import React from 'react';
import ContactForm from './components/ContactForm';
import './Contact.css';
import ResponsiveAppBar from './components/ResponsiveAppBar';
import DefaultFooter from "./components/DefaultFooter";

const Contact = () => {
    return (
        <div>
                <ResponsiveAppBar />
            <div className='contact'>
                <h1 className='title'>Contact Us</h1>
                <div className='contact-content'>
                    <div className='contact-info'>
                        <p>
                            We're thrilled that you're considering Monaco Media Works for your content creation needs!
                            Whether you have questions about our services, want to discuss a potential project,
                            or simply want to say hello, we're here to help.
                        </p>
                        <p>
                            Our team is passionate about bringing your vision to life through stunning visuals,
                            captivating content, and professional post-production services. We understand the importance
                            of effective communication and collaboration, and we're dedicated to providing you with
                            personalized attention and tailored solutions.
                        </p>
                        <p>
                            Don't hesitate to reach out to us using the form below.
                            We can't wait to hear from you and explore how we can work together to
                            elevate your brand's online presence and tell your story in the most compelling way.
                        </p>
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
