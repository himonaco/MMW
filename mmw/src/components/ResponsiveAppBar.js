import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import InstagramIcon from '@mui/icons-material/Instagram';
import Logo from '../assets/logofull1.png';
import './ResponsiveAppBar.css';

const pages = ['services', 'projects', 'contact'];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleMenuItemClick = (page) => {
    handleCloseNavMenu();
    const sectionId = `#${page}`;
    if (page === 'services') {
      document.querySelector(sectionId).scrollIntoView({ behavior: 'smooth' });
    } else {
      document.querySelector(sectionId).scrollIntoView();
    }
  };

  return (
    <AppBar position="sticky" className="app-bar">
      <Container maxWidth="xl">
        <Toolbar disableGutters className="toolbar">
          <Typography variant="h6" noWrap component="a" href="#app-bar-with-responsive-menu" className="typography">
          </Typography>
          <Box className="box">
            <IconButton size="large" aria-label="account of current user" aria-controls="menu-appbar" aria-haspopup="true" onClick={handleOpenNavMenu} color="inherit" className="icon-button">
              <MenuIcon />
            </IconButton>
            <Menu id="menu-appbar" anchorEl={anchorElNav} anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }} keepMounted transformOrigin={{ vertical: 'top', horizontal: 'left' }} open={Boolean(anchorElNav)} onClose={handleCloseNavMenu} className="menu">
              {pages.map((page, index) => (
                <MenuItem key={page} onClick={() => handleMenuItemClick(page)} className="menu-item">
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography variant="h5" noWrap component="a" href="#app-bar-with-responsive-menu" className="typography-logo">
            <img src={Logo} alt="Logo" className="logo" />
            
          </Typography>
          <Box className="box-pages">
            {pages.map((page, index) => (
              <Button key={page} onClick={() => handleMenuItemClick(page)} className="button">
                {page}
              </Button>
            ))}
          </Box>
          <IconButton size="large" aria-label="instagram" color="inherit" component="a" href="https://www.instagram.com/monacomediaworks/" target="_blank" className="instagram-icon">
            <InstagramIcon />
          </IconButton>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default ResponsiveAppBar;