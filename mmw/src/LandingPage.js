import React, { useState } from "react";
import { Link } from "react-router-dom";
import ButtonAppBar from "./components/ButtonAppBar";
import Image1 from "./assets/image1.jpg";
import Image2 from "./assets/image2.jpg";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

function LandingPage() {
  const [hovered1, setHovered1] = useState(false);
  const [hovered2, setHovered2] = useState(false);

  return (
    <div>
      <ButtonAppBar />
      <style>
        {`
          .greyed-out {
            opacity: 0.5; /* Adjust the opacity value as needed */
            filter: grayscale(100%);
            transition: opacity 0.3s, filter 0.3s;
          }

          .greyed-out:hover {
            opacity: 1;
            filter: grayscale(0%);
          }
        `}
      </style>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          paddingTop: "3vh",
        }}
      >
      <h3 style={{ textAlign: "center", padding: "0 10vw", fontFamily: "Arial, sans-serif", color: "#333", lineHeight: "2" }}>
  Nestled in the heart of the South of France, <span style={{ fontWeight: "bold", color: "#2c3e50" }}>Monaco Media Works</span> specializes in two core services: web development and drone content creation. Our expert team crafts cutting-edge websites tailored to your business needs, ensuring seamless functionality and stunning design. Complementing our digital expertise, we offer unparalleled drone content creation, capturing captivating aerial imagery for promotional videos, real estate showcases, and more. Elevate your online presence and visualize the world from new heights with <span style={{ fontWeight: "bold", color: "#2c3e50" }}>MMW</span>.
</h3>


      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "60vh",
          padding: "0 5vw",}}
      >
        <div style={{ textAlign: "center", margin: "0 20px", flex: 1 }}>
          <Link
            to="/webdev"
            style={{
              display: "block",
              position: "relative",
              width: "100%",
              height: "100%",
            }}
            onMouseEnter={() => setHovered1(true)}
            onMouseLeave={() => setHovered1(false)}
          >
            <img
              src={Image2}
              alt="Image 2"
              className={hovered2 ? "greyed-out" : ""}
              style={{
                width: "100%",
                maxWidth: "100%",
                transition: "transform 0.3s",
                transform: hovered1
                  ? "scale(1.5) translate(30%, 0%)"
                  : "scale(1)",
                position: "relative",
                zIndex: hovered1 ? 2 : 1,
                borderRadius: "20px",
              }}
            />
            <Stack
              spacing={2}
              direction="row"
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(60%, 100%)",
                visibility: hovered1 ? "visible" : "hidden",
                zIndex: hovered1 ? 3 : -1,
              }}
            >
              <Button
                variant="contained"
                style={{
                  backgroundColor: "black",
                  borderRadius: "20px",
                  border: "1px solid white",
                  transform: hovered1
                    ? "scale(1.5) translate(40%, -90%)"
                    : "scale(1)",
                  transition: "transform 0.3s",
                }}
              >
                Web Development
              </Button>
            </Stack>
          </Link>
        </div>
        <div style={{ textAlign: "center", margin: "0 10px", flex: 1 }}>
          <Link
            to="/drone"
            style={{
              display: "block",
              position: "relative",
              width: "100%",
              height: "100%",
            }}
            onMouseEnter={() => setHovered2(true)}
            onMouseLeave={() => setHovered2(false)}
          >
            <img
              src={Image1}
              alt="Image 1"
              className={hovered1 ? "greyed-out" : ""}
              style={{
                width: "100%",
                maxWidth: "100%",
                transition: "transform 0.3s",
                transform: hovered2
                  ? "scale(1.5) translate(-30%, 0%)"
                  : "scale(1)",
                position: "relative",
                zIndex: hovered2 ? 2 : 1,
                borderRadius: "20px",
              }}
            />
            <Stack
              spacing={2}
              direction="row"
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-150%, 100%)",
                visibility: hovered2 ? "visible" : "hidden",
                zIndex: hovered2 ? 3 : -1,
              }}
            >
              <Button
                variant="contained"
                style={{
                  backgroundColor: "black",
                  borderRadius: "20px",
                  border: "1px solid white",
                  transform: hovered2
                    ? "scale(1.5) translate(-40%, -90%)"
                    : "scale(1)",
                  transition: "transform 0.3s",
                }}
              >
                Drone Marketing
              </Button>
            </Stack>
          </Link>
        </div>
      </div>
      <div
        style={{
          position: "static",
          background: "#333",
          color: "#fff",
          textAlign: "center",
          padding: "5px",
        }}
      >
        <p>© 2024 Monaco Media Works. All rights reserved.</p>
      </div>
    </div>
  );
}

export default LandingPage;
