import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

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
  { name: "Post Prodcution Services", link: "/postproductionservices" },
  { name: "Web Development Services", link: "/webdev" },
  { name: "Contact Us", link: "/contact" },
];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [shrinkLogo, setShrinkLogo] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setShrinkLogo(true);
      } else {
        setShrinkLogo(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <ThemeProvider theme={theme}>
      <AppBar position="sticky" sx={{ bgcolor: 'white' }} className={`app-bar ${shrinkLogo ? 'shrink' : ''}`}>
        <Container maxWidth="xl">
          <Toolbar disableGutters className="toolbar">
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="#app-bar-with-responsive-menu"
              className="typography"
            ></Typography>
            <Box className="box">
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
            <Typography
  variant="h5"
  noWrap
  component="a"
  href="#app-bar-with-responsive-menu"
  className="typography-logo"
>
  <img src={Logo} alt="Logo" className={`logo ${shrinkLogo ? 'shrink' : ''}`} />
</Typography>
            <Box className="box-pages">
              {pages.map((page, index) => (
                <Button key={page.name} className="button">
                  <Link to={page.link}>{page.name}</Link>
                </Button>
              ))}
            </Box>
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
          </Toolbar>
        </Container>
      </AppBar>
    </ThemeProvider>
  );
}

export default ResponsiveAppBar;
