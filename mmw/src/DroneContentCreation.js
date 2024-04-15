import React, { useEffect } from 'react';
import ResponsiveAppBar from "./components/ResponsiveAppBar";
import MyCarousel from "./components/MyCarousel";
import ContactForm from "./components/ContactForm";
import "./Drone.css"; // Import the new CSS file
import DefaultFooter from "./components/DefaultFooter";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import ScrollTopButton from "./components/ScrollTopButton";

const theme = createTheme({
  palette: {
    primary: {
      main: "#000000",
    },
  },
});

function DroneContentCreation() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <div className="drone">
        <ResponsiveAppBar />

        <div className="content">
          {/* Drone Services Section */}
          <section id="services">
            <h3 className="description">
              At <span className="highlight">Monaco Media Works</span>, we
              specialize in providing cutting-edge aerial photography and
              videography services tailored to meet your unique needs. With our
              state-of-the-art FPV drones and expert team, we offer a range of
              services to enhance your brand's visual storytelling.
            </h3>
            <h2 className="sub-title">Our Services Include:</h2>
            <ul className="services-list">
              <li>
                <strong>Real Estate Content Creation:</strong> Showcase
                properties like never before with our stunning aerial shots and
                captivating videos. From panoramic views to detailed close-ups,
                we highlight the beauty and uniqueness of each property from
                breathtaking perspectives.
              </li>
              <li>
                <strong>Yacht Promotional Content:</strong> Sail into the
                spotlight with our captivating aerial footage and immersive
                videos showcasing the luxury and elegance of your yacht. Impress
                potential buyers and charter clients with visually stunning
                visuals that set you apart from the competition.
              </li>
              <li>
                <strong>Social Media Presence Services:</strong> Elevate your
                social media presence with engaging content tailored for
                platforms like Instagram, Facebook, and YouTube. Our specialized
                services include:
                <ul>
                  <li>
                    Instagram Reels: Create dynamic and eye-catching short
                    videos that captivate your audience and increase engagement.
                  </li>
                  <li>
                    Video Production: Produce high-quality videos for your
                    social media channels, including product showcases, brand
                    stories, and promotional campaigns.
                  </li>
                  <li>
                    Shorts: Craft short, attention-grabbing videos optimized for
                    platforms like TikTok and Instagram Stories.
                  </li>
                  <li>
                    Posts Copywriting: Develop compelling copy for your social
                    media posts that resonates with your audience and drives
                    action.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Post Production Editing:</strong> Enhance your content
                with our professional post-production editing services. From
                color grading to audio enhancement, we ensure that your videos
                are polished to perfection before they reach your audience.
              </li>
            </ul>
            <h2 className="sub-title">Why Choose Us:</h2>
            <p className="why-us">
              Professionalism, creativity, quality, and customer satisfaction
              are the pillars of our service. Ready to elevate your brand with
              stunning aerial content and captivating social media presence?
              Contact us today to discuss your project requirements and let us
              bring your vision to life!
            </p>
          </section>

          {/* Project Section */}
          <section id="projects">
            <h2 className="project-title">Projects</h2>
            {/* Add your project content here */}
            <MyCarousel />
          </section>

          {/* Contact Section */}
          <section id="contact">
            <h2 className="contact-title">Contact Us</h2>
            <ContactForm />
          </section>
        </div>

        <DefaultFooter />
        <ScrollTopButton />
      </div>
    </ThemeProvider>
  );
}

export default DroneContentCreation;
