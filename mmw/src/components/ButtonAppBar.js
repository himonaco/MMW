import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Logo from '../assets/logofull1.png';
import { Link } from 'react-router-dom';
import './ButtonAppBar.css'; 
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import InstagramIcon from "@mui/icons-material/Instagram";

const theme = createTheme({
  palette: {
    primary: {
      main: "#000000",
    },
  },
});

const pages = [
  { name: "Web Development", url: "webdev" },
  { name: "Drone Marketing", url: "drone" },
];

export default function ButtonAppBar() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <ThemeProvider theme={theme}>
      <AppBar position="sticky" sx={{ bgcolor: 'white' }} className="appBar">
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
                edge="start"
                color="primary"
                aria-label="menu"
                className="iconButton"
                onClick={handleClick}
              >
                <MenuIcon style={{fontSize: 40}} className="menuIcon" />                
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                {pages.map((page, index) => (
                  <MenuItem
                    key={page.name}
                    component={Link}
                    to={`/${page.url}`}
                  >
                    <Typography textAlign="center">{page.name}</Typography>
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
              <img src={Logo} alt="Logo" className="logo" />
            </Typography>
            <Box className="box-pages">
              {pages.map((page, index) => (
                <Button
                  key={page.name}
                  component={Link}
                  to={`/${page.url}`}
                  className="button"
                >
                  {page.name}
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
              <InstagramIcon style={{fontSize: 40}} />
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>
    </ThemeProvider>
  );
}