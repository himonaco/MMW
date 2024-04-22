import React, { useEffect } from 'react';
import ResponsiveAppBar from './components/ResponsiveAppBar';
import DefaultFooter from './components/DefaultFooter';
import ScrollTopButton from "./components/ScrollTopButton";
import './PostProductionServices.css'
import { Link } from 'react-router-dom'; // Import Link from react-router-dom


const PostProductionServices = () => {
    useEffect(() => {
        // Scroll to the top of the page when it loads
        window.scrollTo(0, 0);
    }, []); // This effect runs only once after the component mounts

    return (
        <div>
            <ResponsiveAppBar />
            <div className="content">
                <h1 className="title">Post-Production Services</h1>
                <p className="description">
                    Welcome to Monaco Media Works' Post-Production Services page! Our post-production team specializes in bringing your raw footage to life through creative editing, visual effects, and professional finishing touches. Whether you've captured stunning aerial shots with a drone or captivating scenes with a camera, our experts are here to transform your footage into compelling content that resonates with your audience.
                </p>
                
                <h2 className="subtitle">Tailored Solutions for Every Platform:</h2>
                <p className="description">
                    Whether you're creating long-form content for YouTube, short videos for Instagram Reels, or engaging clips for TikTok, we tailor our post-production services to suit the specific requirements of each platform. Our team stays up-to-date with the latest trends and best practices to ensure that your content stands out and resonates with your target audience.
                </p>
                <h2 className="subtitle">Ready to Transform Your Footage?</h2>
                <p className="description">
                    Take the first step towards unlocking the full potential of your raw footage with Monaco Media Works' Post-Production Services. Let our team of experts enhance your content and bring your vision to life with creativity, professionalism, and attention to detail. Contact us today to discuss your project requirements and explore how we can help you create compelling content that leaves a lasting impression.
                </p>
            </div>
            <div className='cta-container'>
                <p className='cta-text'>Ready to elevate your content and captivate your audience?</p>
                <Link to="/contact" className='cta-button'>Contact Us</Link>
            </div>
            <div className='deadSpace'>
            </div>
            <DefaultFooter />
            <ScrollTopButton />
        </div>
    );
};

export default PostProductionServices;
