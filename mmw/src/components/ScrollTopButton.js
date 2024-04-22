import React, { useState, useEffect } from "react";
import Fab from "@mui/material/Fab";
import NavigationIcon from "@mui/icons-material/Navigation";
import "./ScrollTopButton.css";

function ScrollTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled up to given distance
  const toggleVisibility = () => {
    if (window.pageYOffset > 100) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Set the top cordinate to 0
  // make scrolling smooth
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    isVisible && (
      <Fab
        color="inherit"
        aria-label="scroll back to top"
        onClick={scrollToTop}
        sx={{
          position: "fixed",
          bottom: "80px",
          right: "20px",
          zIndex: "1000",
          "@media (max-width: 768px)": {
            width: "40px",
            height: "40px",
          },
          backgroundColor: "transparent",
        }}
      >
        <NavigationIcon style={{ color: "black" }} />{" "}
      </Fab>
    )
  );
}

export default ScrollTopButton;
