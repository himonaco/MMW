import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ButtonAppBar from "./components/ButtonAppBar";
import Image1 from "./assets/image1.jpg";
import Image2 from "./assets/image2.jpg";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import "./LandingPage.css"; // Import the CSS file
import useMediaQuery from '@mui/material/useMediaQuery';
import DefaultFooter from "./components/DefaultFooter";

function LandingPage() {
  const [hovered1, setHovered1] = useState(false);
  const [hovered2, setHovered2] = useState(false);
  const isMobile = useMediaQuery('(max-width:768px)');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="landingPageContent">
      <div className="landing-page">
        <ButtonAppBar />
        <div className="intro-section">
          <h3>
            Nestled in the heart of the South of France,{" "}
            <span className="bold-text">Monaco Media Works</span> specializes in
            two core services: web development and drone content creation. Our
            expert team crafts cutting-edge websites tailored to your business
            needs, ensuring seamless functionality and stunning design.
            Complementing our digital expertise, we offer unparalleled drone
            content creation, capturing captivating aerial imagery for
            promotional videos, real estate showcases, and more. Elevate your
            online presence and visualize the world from new heights with{" "}
            <span className="bold-text">MMW</span>.
          </h3>
          <Button component={Link} to="/ContentCreation" variant="contained" className="button">
            Content Creation
          </Button>
        </div>
        <div className="services-section">
          <div className="service">
            <Link
              to="/webdev"
              className="service-link"
              onMouseEnter={() => setHovered1(true)}
              onMouseLeave={() => setHovered1(false)}
            >
              <img
                src={Image2}
                alt="Image 2"
                className={hovered2 ? "greyed-out" : ""}
              />
              <Stack
                spacing={2}
                direction="row"
                className={`stack ${hovered1 ? "visible" : "hidden"}`}
              >
                <Button
                  variant="contained"
                  className="button"
                  sx={{
                    backgroundColor: 'black', 
                    color: 'white', 
                    border: '1px solid white',
                    width: isMobile ? '200px' : 'auto', // Conditionally apply the width
                    '&:hover': {
                      backgroundColor: 'black',
                    },
                  }}
                >
                  Web Development
                </Button>
              </Stack>
            </Link>
          </div>
          <div className="service">
            <Link
              to="/drone"
              className="service-link"
              onMouseEnter={() => setHovered2(true)}
              onMouseLeave={() => setHovered2(false)}
            >
              <img
                src={Image1}
                alt="Image 1"
                className={hovered1 ? "greyed-out" : ""}
              />
              <Stack
                spacing={2}
                direction="row"
                className={`stack ${hovered2 ? "visible" : "hidden"}`}
              >
                <Button
                  variant="contained"
                  className="button"
                  sx={{
                    backgroundColor: 'black', 
                    color: 'white', 
                    border: '1px solid white',
                    width: isMobile ? '200px' : 'auto', // Conditionally apply the width
                    '&:hover': {
                      backgroundColor: 'black',
                    },
                  }}
                >
                  Drone Marketing
                </Button>
              </Stack>
            </Link>
          </div>
        </div>        
      <DefaultFooter />
      </div>
    </div>
  );
}

export default LandingPage;
