import React from "react";
import Carousel from "react-material-ui-carousel";
import { Paper } from "@mui/material";

function MyCarousel() {
  const items = [
    {
      name: "Item 1",
      description: "Description for Item 1",
      image: "https://tumo.org/wp-content/uploads/2017/08/web-dev.png",
    },
    {
      name: "Item 2",
      description: "Description for Item 2",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4ZSSxn9Fohj2NK0BeNx89gI1FpjXt9zPcWunGHlRVFw&s",
    },
    // Add more items as needed
  ];

  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "60vh"}}>
      <Carousel
        autoPlay={true} // Disable autoplay if not needed
        indicators={false} // Disable indicators if not needed
        animation="slide" // Choose animation type (slide, fade)
        timeout={500} // Animation timeout in milliseconds
        navButtonsAlwaysVisible // Show navigation buttons always
        fullHeightHover={false} // Remove the hover effect if not needed
        cycleNavigation // Allow cycling through items
        navButtonsProps={{
          // Style navigation buttons if needed
          style: {
            backgroundColor: "rgba(255, 255, 255, 0.5)",
            color: "black",
          },
        }}
        navButtonsWrapperProps={{
          // Style navigation buttons wrapper if needed
          style: {
            bottom: "10px",
          },
        }}
        NextIcon={<span>&#10095;</span>} // Customize the next button icon
        PrevIcon={<span>&#10094;</span>} // Customize the previous button icon
        // Add more props as needed
        sx={{ width: "60%", maxWidth: "1000px" }} // Adjust the width of the carousel
      >
        {items.map((item, index) => (
          <Paper key={index} style={{ textAlign: "center" }}>
            <img
              src={item.image}
              alt={item.name}
              style={{ maxWidth: "100%", height: "auto", maxHeight: "300px" }} // Custom style for image size
            />
            <h2>{item.name}</h2>
            <p>{item.description}</p>
          </Paper>
        ))}
      </Carousel>
    </div>
  );
}

export default MyCarousel;
