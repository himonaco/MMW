import React from "react";
import Carousel from "react-material-ui-carousel";
import { Helmet } from "react-helmet";
import { Paper } from "@mui/material";
import './MyCarousel.css'; // Import the CSS file

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
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4ZSSxn9Fohj2NK0BeNx89gI1FpjXt9zPcWunGHlRVFw&s",
    },
    // Add more items as needed
  ];

  return (
    <div className="carousel-container">
      {/* Add Helmet for meta tags */}
      <Helmet>
        <title>Monaco Media Works</title>
        <meta name="description" content="Explore our carousel showcasing various items with descriptions and images." />
        <meta name="keywords" content="carousel, React, material-ui, Monaco Media Works, showcase" />
        <meta property="og:title" content="My Carousel - Monaco Media Works" />
        <meta property="og:description" content="Explore our carousel showcasing various items with descriptions and images." />
        <meta property="og:image" content={items[0].image} /> {/* Use the first item's image as the Open Graph image */}
        <link rel="canonical" href="https://www.monacomediaworks.com/carousel" />
      </Helmet>
      
      <Carousel
        autoPlay={true}
        indicators={false}
        animation="slide"
        timeout={500}
        navButtonsAlwaysVisible
        fullHeightHover={false}
        cycleNavigation
        navButtonsProps={{
          className: "carousel-nav-buttons",
        }}
        navButtonsWrapperProps={{
          className: "carousel-nav-buttons-wrapper",
        }}
        NextIcon={<span>&#10095;</span>}
        PrevIcon={<span>&#10094;</span>}
        sx={{ width: "60%", maxWidth: "1000px" }}
      >
        {items.map((item, index) => (
          <Paper key={index} className="carousel-item">
            <img
              src={item.image}
              alt={item.name}
              className="carousel-image"
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
