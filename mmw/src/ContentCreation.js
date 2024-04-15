import React from "react";
import ResponsiveAppBar from "./components/ResponsiveAppBarContentCreation";
import ActionAreaCard from "./components/ActionAreaCard";
import DefaultFooter from "./components/DefaultFooter";
import ScrollTopButton from "./components/ScrollTopButton";
import "./ContentCreation.css";
import { Link } from "react-router-dom";


function ContentCreation() {
  return (
    <div className="content-creation-page">
      <ResponsiveAppBar />

      <div className="intro">
        <h1 className="title">Content Creation Services</h1>
        <p className="description">
          At Monaco Media Works, we offer a comprehensive suite of content
          creation services tailored to elevate your brand's online presence.
          From stunning aerial photography to captivating social media content
          and professional post-production services, we specialize in bringing
          your vision to life. Explore our offerings below to discover how we
          can help you tell your story in the most compelling way.
        </p>
      </div>

      <div className="offerings">
        <ActionAreaCard
          title="Drone Content Creation"
          description="Transform your brand with breathtaking aerial imagery. Showcase properties, events, and landscapes like never before."
          link="/dronecontentcreation"
          image="/assets/image1.jpg"
        />
        <ActionAreaCard
          title="Strategic Social Media Management: Crafting Compelling Content & Cultivating a Dynamic Online Presence"
          description="Engage your audience with captivating content tailored for platforms like Instagram, Facebook, and YouTube. Elevate your brands online presence with strategic social media management and growth strategies."
          link="/strategicsocialmediamanagement"
          image="/assets/image1.jpg"
        />
        <ActionAreaCard
          title="Post-Production Services"
          description="Polish your content to perfection with our professional post-production editing services. From color grading to audio enhancement, we ensure your videos stand out."
          link="/postproductionservices"
          image="/assets/image1.jpg"
        />
        <ActionAreaCard
          title="Web Development"
          description="Crafting stunning websites tailored to your business needs. From sleek designs to seamless functionality, we bring your online presence to life."
          link="/webdev"
          image="/assets/webdevelopmentimage.jpg"
        />
      </div>
      <DefaultFooter />
      <ScrollTopButton />
    </div>
  );
}

export default ContentCreation;
