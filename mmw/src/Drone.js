import React from 'react';
import ResponsiveAppBar from './components/ResponsiveAppBar';
import MyCarousel from './components/MyCarousel';
import ContactForm from './components/ContactForm';

function Drone() {
  return (
    <div>
      <ResponsiveAppBar />

      <div style={{ padding: '20px', maxWidth: '70vw', margin: 'auto' }}>
        {/* Drone Services Section */}
        <section id="services">
          <h1 style={{ textAlign: 'center', marginBottom: '20px' }}>Welcome to <span style={{ fontWeight: 'bold', color: '#2c3e50' }}>Monaco Media Works</span>!</h1>
          <h3 style={{ textAlign: 'center', padding: '0 10vw', fontFamily: 'Arial, sans-serif', color: '#333', lineHeight: '2' }}>
            At <span style={{ fontWeight: 'bold', color: '#2c3e50' }}>Monaco Media Works</span>, we specialize in providing cutting-edge aerial photography and videography services tailored to meet your unique needs. With our state-of-the-art FPV drones and expert team, we offer a range of services to enhance your brand's visual storytelling.
          </h3>
          <h2 style={{ marginBottom: '10px' }}>Our Services Include:</h2>
          <ul style={{ marginBottom: '20px' }}>
            <li>
              <strong>Real Estate Content Creation:</strong> Showcase properties like never before with our stunning aerial shots and captivating videos. From panoramic views to detailed close-ups, we highlight the beauty and uniqueness of each property from breathtaking perspectives.
            </li>
            <li>
              <strong>Yacht Promotional Content:</strong> Sail into the spotlight with our captivating aerial footage and immersive videos showcasing the luxury and elegance of your yacht. Impress potential buyers and charter clients with visually stunning visuals that set you apart from the competition.
            </li>
            <li>
              <strong>Social Media Presence Services:</strong> Elevate your social media presence with engaging content tailored for platforms like Instagram, Facebook, and YouTube. Our specialized services include:
              <ul>
                <li>Instagram Reels: Create dynamic and eye-catching short videos that captivate your audience and increase engagement.</li>
                <li>Video Production: Produce high-quality videos for your social media channels, including product showcases, brand stories, and promotional campaigns.</li>
                <li>Shorts: Craft short, attention-grabbing videos optimized for platforms like TikTok and Instagram Stories.</li>
                <li>Posts Copywriting: Develop compelling copy for your social media posts that resonates with your audience and drives action.</li>
              </ul>
            </li>
            <li>
              <strong>Post Production Editing:</strong> Enhance your content with our professional post-production editing services. From color grading to audio enhancement, we ensure that your videos are polished to perfection before they reach your audience.
            </li>
          </ul>
          <h2 style={{ marginBottom: '10px' }}>Why Choose Us:</h2>
          <p style={{ marginBottom: '20px', lineHeight: '1.5' }}>
            Professionalism, creativity, quality, and customer satisfaction are the pillars of our service. Ready to elevate your brand with stunning aerial content and captivating social media presence? Contact us today to discuss your project requirements and let us bring your vision to life!
          </p>
        </section>

        {/* Project Section */}
        <section id="projects">
          <h2 style={{ marginBottom: '20px', textAlign: 'center' }}>Projects</h2>
          {/* Add your project content here */}
          <MyCarousel />
        </section>

        {/* Testimonials Section */}

        {/* Contact Section */}
        <section id="contact">
          <h2 style={{ marginBottom: '30px', textAlign: 'center' }}>Contact Us</h2>
          {/* Add your contact content here */}
          <ContactForm />
        </section>
      </div>
      
      {/* Footer */}
      <div
        style={{
          position: "static",
          background: "#333",
          color: "#fff",
          textAlign: "center",
          padding: "10px",
          marginTop: "30px",
        }}
      >
        <p>© 2024 Monaco Media Works. All rights reserved.</p>
      </div>
    </div>
  );
}

export default Drone;
