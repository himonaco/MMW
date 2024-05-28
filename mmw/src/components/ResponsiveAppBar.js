import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Helmet } from "react-helmet";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import InstagramIcon from "@mui/icons-material/Instagram";
import Logo from "../assets/logofull1.png";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import "./ResponsiveAppBar.css";
import "../i18n";
import CountryFlag from "react-country-flag";

const theme = createTheme({
  palette: {
    primary: {
      main: "#000000",
    },
  },
});

const pages = [
  { name: "Drone Content Creation", link: "/dronecontentcreation" },
  { name: "Social Media Management", link: "/strategicsocialmediamanagement" },
  { name: "Post Production Services", link: "/postproductionservices" },
  { name: "Web Development Services", link: "/webdev" },
  { name: "Contact Us", link: "/contact" },
];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [shrinkLogo, setShrinkLogo] = useState(false);
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setShrinkLogo(true);
      } else {
        setShrinkLogo(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleLanguageToggle = () => {
    const newLanguage = i18n.language === "en" ? "fr" : "en";
    i18n.changeLanguage(newLanguage);
  };

  return (
    <ThemeProvider theme={theme}>
      {/* Add Helmet for meta tags */}
      <Helmet>
        <title>Monaco Media Works - Professional Media Services</title>
        <meta name="description" content="Monaco Media Works offers professional media services including drone content creation, social media management, post production services, and web development." />
        <meta name="keywords" content="Monaco Media Works, drone content creation, social media management, post production services, web development, media services" />
        <meta property="og:title" content="Monaco Media Works - Professional Media Services" />
        <meta property="og:description" content="Monaco Media Works offers professional media services including drone content creation, social media management, post production services, and web development." />
        <link rel="canonical" href="https://www.monacomediaworks.com" />
      </Helmet>
      
      <AppBar position="sticky" sx={{ bgcolor: "white" }} className={`app-bar ${shrinkLogo ? "shrink" : ""}`}>
        <Container maxWidth="xl">
          <Toolbar disableGutters className="toolbar">
            {/* Menu Icon Section */}
            <Box className="menu-icon-section">
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="primary"
                className="icon-button"
              >
                <MenuIcon style={{ fontSize: 40 }} />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
                keepMounted
                transformOrigin={{ vertical: "top", horizontal: "left" }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                className="menu"
              >
                {pages.map((page, index) => (
                  <MenuItem key={page.name} className="menu-item">
                    <Link to={page.link}>
                      <Typography textAlign="center">{page.name}</Typography>
                    </Link>
                  </MenuItem>
                ))}
              </Menu>
            </Box>

            {/* Logo Section */}
            <Typography variant="h5" noWrap component="div" href="#app-bar-with-responsive-menu" className="typography-logo">
              <Link to="/" className="logo-container">
                <img src={Logo} alt="Logo" className={`logo ${shrinkLogo ? "shrink" : ""}`} />
              </Link>
            </Typography>

            {/* Instagram and Flag Icons Section */}
            <Box className="icons-section">
              <IconButton
                size="large"
                aria-label="instagram"
                color="primary"
                component="a"
                href="https://www.instagram.com/monacomediaworks/"
                target="_blank"
                className="instagram-icon"
              >
                <InstagramIcon style={{ fontSize: 40 }} />
              </IconButton>
              <Box className="box-flags">
                <a href="#" onClick={handleLanguageToggle}>
                  {i18n.language === "en" ? (
                    <CountryFlag
                      countryCode="FR"
                      svg
                      style={{
                        width: "30px",
                        height: "auto",
                        borderRadius: "50%",
                      }}
                    />
                  ) : (
                    <CountryFlag
                      countryCode="GB"
                      svg
                      style={{
                        width: "30px",
                        height: "auto",
                        borderRadius: "50%",
                      }}
                    />
                  )}
                </a>
              </Box>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </ThemeProvider>
  );
}

export default ResponsiveAppBar;
